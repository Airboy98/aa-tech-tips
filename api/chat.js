import Pusher from "pusher";
import webpush from "web-push";
import { connectDB, Message, Session, PushSubscription } from "./_db.js";

webpush.setVapidDetails(
  "mailto:aaron.turner117@gmail.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

function getPusher() {
  return new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: true,
  });
}

export default async function handler(req, res) {
  const { action } = req.query;
  await connectDB();

  // GET /api/chat?action=get-messages&sessionId=xxx
  if (action === "get-messages") {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId } = req.query;
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    const [messages, sessionRecord] = await Promise.all([
      Message.find({ sessionId }).sort({ timestamp: 1 }),
      Session.findOne({ sessionId }),
    ]);
    return res.json({ messages, visitorLastReadAt: sessionRecord?.visitorLastReadAt || null });
  }

  // GET /api/chat?action=get-sessions&adminPassword=xxx
  if (action === "get-sessions") {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
    const { adminPassword } = req.query;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    const sessionGroups = await Message.aggregate([
      { $sort: { timestamp: -1 } },
      { $group: { _id: "$sessionId", latestMessage: { $first: "$text" }, latestTimestamp: { $first: "$timestamp" }, latestSender: { $first: "$sender" } } },
      { $sort: { latestTimestamp: -1 } },
    ]);
    const sessionIds = sessionGroups.map(s => s._id);
    const [firstVisitors, readRecords] = await Promise.all([
      Promise.all(sessionIds.map(id => Message.findOne({ sessionId: id, sender: "visitor" }).sort({ timestamp: 1 }))),
      Session.find({ sessionId: { $in: sessionIds } }),
    ]);
    const readMap = Object.fromEntries(readRecords.map(r => [r.sessionId, r.lastReadAt]));
    const sessions = sessionGroups.map((s, i) => {
      const firstVisitor = firstVisitors[i];
      const lastReadAt = readMap[s._id] || null;
      const unread = s.latestSender === "visitor" && (!lastReadAt || s.latestTimestamp > lastReadAt);
      return {
        sessionId: s._id,
        name: firstVisitor?.name || "Unknown",
        email: firstVisitor?.email || "",
        latestMessage: s.latestMessage,
        latestTimestamp: s.latestTimestamp,
        latestSender: s.latestSender,
        unread,
      };
    });
    return res.json({ sessions });
  }

  // POST /api/chat?action=subscribe-push
  if (action === "subscribe-push") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { adminPassword, subscription } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    if (!subscription?.endpoint) return res.status(400).json({ error: "Missing subscription" });
    await PushSubscription.findOneAndUpdate(
      { endpoint: subscription.endpoint },
      { endpoint: subscription.endpoint, keys: subscription.keys },
      { upsert: true }
    );
    return res.json({ success: true });
  }

  // POST /api/chat?action=unsubscribe-push
  if (action === "unsubscribe-push") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { endpoint } = req.body;
    if (endpoint) await PushSubscription.deleteOne({ endpoint });
    return res.json({ success: true });
  }

  // POST /api/chat?action=send-message
  if (action === "send-message") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, name, email, text } = req.body;
    if (!sessionId || !text) return res.status(400).json({ error: "Missing required fields" });
    const message = await Message.create({ sessionId, sender: "visitor", name, email, text });
    const [, subs] = await Promise.all([
      getPusher().trigger(`chat-${sessionId}`, "new-message", { sender: "visitor", text, timestamp: message.timestamp }),
      PushSubscription.find(),
    ]);
    if (subs.length > 0) {
      const payload = JSON.stringify({ title: `Message from ${name || "visitor"}`, body: text, url: "/admin" });
      await Promise.allSettled(subs.map(async sub => {
        try {
          await webpush.sendNotification({ endpoint: sub.endpoint, keys: sub.keys }, payload);
        } catch (err) {
          if (err.statusCode === 410) await PushSubscription.deleteOne({ endpoint: sub.endpoint });
        }
      }));
    }
    return res.json({ success: true, message });
  }

  // POST /api/chat?action=send-reply
  if (action === "send-reply") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, text, adminPassword } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    if (!sessionId || !text) return res.status(400).json({ error: "Missing required fields" });
    const message = await Message.create({ sessionId, sender: "admin", text });
    await getPusher().trigger(`chat-${sessionId}`, "new-message", { sender: "admin", text, timestamp: message.timestamp });
    return res.json({ success: true, message });
  }

  // POST /api/chat?action=mark-read
  if (action === "mark-read") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, adminPassword } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    await Session.findOneAndUpdate({ sessionId }, { lastReadAt: new Date() }, { upsert: true });
    return res.json({ success: true });
  }

  // POST /api/chat?action=mark-visitor-read
  if (action === "mark-visitor-read") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId } = req.body;
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    await Session.findOneAndUpdate({ sessionId }, { visitorLastReadAt: new Date() }, { upsert: true });
    await getPusher().trigger(`chat-${sessionId}`, "visitor-read-receipt", {});
    return res.json({ success: true });
  }

  // POST /api/chat?action=update-session
  if (action === "update-session") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, name, email, adminPassword } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    await Message.updateMany({ sessionId, sender: "visitor" }, { $set: { name, email } });
    await getPusher().trigger(`chat-${sessionId}`, "visitor-info-update", { name, email });
    return res.json({ success: true });
  }

  // DELETE /api/chat?action=delete-session
  if (action === "delete-session") {
    if (req.method !== "DELETE") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, adminPassword } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    await Promise.all([
      Message.deleteMany({ sessionId }),
      Session.deleteOne({ sessionId }),
    ]);
    return res.json({ success: true });
  }

  return res.status(400).json({ error: "Unknown action" });
}
