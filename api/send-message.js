import Pusher from "pusher";
import { connectDB, Message } from "./_db.js";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { sessionId, name, email, text } = req.body;
  if (!sessionId || !text)
    return res.status(400).json({ error: "Missing required fields" });

  await connectDB();

  const message = await Message.create({
    sessionId,
    sender: "visitor",
    name,
    email,
    text,
  });

  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: true,
  });

  await pusher.trigger(`chat-${sessionId}`, "new-message", {
    sender: "visitor",
    text,
    timestamp: message.timestamp,
  });

  res.json({ success: true, message });
}
