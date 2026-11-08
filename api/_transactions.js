import { connectDB, Transaction, Expense } from "./_db.js";

const KINDS = {
  income: {
    Model: Transaction,
    fields: ["date", "type", "package", "client", "details", "miles", "rate", "hours", "fee"],
    required: "fee",
  },
  expense: {
    Model: Expense,
    fields: ["date", "vendor", "category", "description", "amount"],
    required: "amount",
  },
};

// Served via /api/admin?resource=transactions
// GET  &action=list
// POST &action=save&kind=income|expense    { _id?, ...fields }
// POST &action=delete&kind=income|expense  { _id }
export default async function handler(req, res) {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Unauthorized" });

  const { action } = req.query;
  try {
    await connectDB();

    if (action === "list") {
      if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
      const [transactions, expenses] = await Promise.all([
        Transaction.find().sort({ date: -1, _id: -1 }),
        Expense.find().sort({ date: -1, _id: -1 }),
      ]);
      return res.json({ transactions, expenses });
    }

    const kind = KINDS[req.query.kind || "income"];
    if (!kind) return res.status(400).json({ error: "Unknown kind" });

    if (action === "save") {
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      const data = Object.fromEntries(kind.fields.map((f) => [f, req.body[f] ?? null]));
      if (!data.date || data[kind.required] == null)
        return res.status(400).json({ error: `Date and ${kind.required} are required` });
      const item = req.body._id
        ? await kind.Model.findByIdAndUpdate(req.body._id, data, { new: true })
        : await kind.Model.create(data);
      return res.json({ item });
    }

    if (action === "delete") {
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      await kind.Model.findByIdAndDelete(req.body._id);
      return res.json({ ok: true });
    }

    return res.status(400).json({ error: "Unknown action" });
  } catch (err) {
    console.error("Transactions error:", err);
    return res.status(500).json({ error: "Transactions error" });
  }
}
