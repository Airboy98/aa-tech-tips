import { connectDB, Message } from "./_db.js";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { adminPassword } = req.query;
  if (adminPassword !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Unauthorized" });

  await connectDB();

  const sessionGroups = await Message.aggregate([
    { $sort: { timestamp: -1 } },
    {
      $group: {
        _id: "$sessionId",
        latestMessage: { $first: "$text" },
        latestTimestamp: { $first: "$timestamp" },
      },
    },
    { $sort: { latestTimestamp: -1 } },
  ]);

  const sessions = await Promise.all(
    sessionGroups.map(async (s) => {
      const firstVisitor = await Message.findOne({
        sessionId: s._id,
        sender: "visitor",
      }).sort({ timestamp: 1 });
      return {
        sessionId: s._id,
        name: firstVisitor?.name || "Unknown",
        email: firstVisitor?.email || "",
        latestMessage: s.latestMessage,
        latestTimestamp: s.latestTimestamp,
      };
    })
  );

  res.json({ sessions });
}
