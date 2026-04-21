import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, question } = req.body;

  if (!name || !email || !question) {
    return res.status(400).json({ error: "Name, email, and question are required" });
  }

  const origin =
    req.headers.origin ||
    (req.headers.host ? `https://${req.headers.host}` : "https://aatechtips.com");

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 500,
            product_data: {
              name: "Tech Advice",
              description: "One-time personalized tech advice from AA Tech Tips",
            },
          },
          quantity: 1,
        },
      ],
      metadata: { name, question },
      success_url: `${origin}/tech-advice?success=true`,
      cancel_url: `${origin}/tech-advice?canceled=true`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
}
