import { connectDB, Message } from "./_db.js";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { sessionId } = req.query;
  if (!sessionId)
    return res.status(400).json({ error: "Missing sessionId" });

  await connectDB();

  const messages = await Message.find({ sessionId }).sort({ timestamp: 1 });
  res.json({ messages });
}
