import Pusher from "pusher";
import { connectDB, Message } from "./_db.js";

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
    const messages = await Message.find({ sessionId }).sort({ timestamp: 1 });
    return res.json({ messages });
  }

  // GET /api/chat?action=get-sessions&adminPassword=xxx
  if (action === "get-sessions") {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
    const { adminPassword } = req.query;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    const sessionGroups = await Message.aggregate([
      { $sort: { timestamp: -1 } },
      { $group: { _id: "$sessionId", latestMessage: { $first: "$text" }, latestTimestamp: { $first: "$timestamp" } } },
      { $sort: { latestTimestamp: -1 } },
    ]);
    const sessions = await Promise.all(
      sessionGroups.map(async (s) => {
        const firstVisitor = await Message.findOne({ sessionId: s._id, sender: "visitor" }).sort({ timestamp: 1 });
        return {
          sessionId: s._id,
          name: firstVisitor?.name || "Unknown",
          email: firstVisitor?.email || "",
          latestMessage: s.latestMessage,
          latestTimestamp: s.latestTimestamp,
        };
      })
    );
    return res.json({ sessions });
  }

  // POST /api/chat?action=send-message
  if (action === "send-message") {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, name, email, text } = req.body;
    if (!sessionId || !text) return res.status(400).json({ error: "Missing required fields" });
    const message = await Message.create({ sessionId, sender: "visitor", name, email, text });
    await getPusher().trigger(`chat-${sessionId}`, "new-message", { sender: "visitor", text, timestamp: message.timestamp });
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

  // DELETE /api/chat?action=delete-session
  if (action === "delete-session") {
    if (req.method !== "DELETE") return res.status(405).json({ error: "Method not allowed" });
    const { sessionId, adminPassword } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    await Message.deleteMany({ sessionId });
    return res.json({ success: true });
  }

  return res.status(400).json({ error: "Unknown action" });
}
