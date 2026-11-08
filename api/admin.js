import appointments from "./_appointments.js";
import transactions from "./_transactions.js";

const resources = { appointments, transactions };

// /api/admin?resource=appointments|transactions&action=...
export default function handler(req, res) {
  const resource = resources[req.query.resource];
  if (!resource) return res.status(400).json({ error: "Unknown resource" });
  return resource(req, res);
}
