import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question, model } = req.body;
  if (!question || question.trim().length === 0) {
    return res.status(400).json({ error: "Question is required" });
  }

  const allowedModels = {
    "claude-sonnet-4-6": { amount: 300, label: "Claude Sonnet 4.6" },
    "claude-opus-4-7": { amount: 500, label: "Claude Opus 4.7" },
  };
  const tier = allowedModels[model] || allowedModels["claude-sonnet-4-6"];

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const q = question.trim();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: tier.amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        model: model || "claude-sonnet-4-6",
        question_1: q.substring(0, 500),
        question_2: q.substring(500, 1000),
      },
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
}
