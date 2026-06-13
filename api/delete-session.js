import { connectDB, Message } from "./_db.js";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(405).json({ error: "Method not allowed" });

  const { sessionId, adminPassword } = req.body;

  if (adminPassword !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Unauthorized" });

  if (!sessionId)
    return res.status(400).json({ error: "Missing sessionId" });

  await connectDB();
  await Message.deleteMany({ sessionId });
  res.json({ success: true });
}
