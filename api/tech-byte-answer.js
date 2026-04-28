import Stripe from "stripe";
import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  const { payment_intent_id } = req.query;
  if (!payment_intent_id) return res.status(400).json({ error: "Missing payment_intent_id" });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);
    if (paymentIntent.status !== "succeeded") {
      return res.status(402).json({ error: "Payment not completed" });
    }

    const question =
      (paymentIntent.metadata.question_1 || "") + (paymentIntent.metadata.question_2 || "");
    const model = paymentIntent.metadata.model || "claude-sonnet-4-6";

    const message = await anthropic.messages.create({
      model,
      max_tokens: 2048,
      system:
        "You are a thorough and knowledgeable tech expert. A user has paid for a premium, detailed answer to their tech question. Provide a comprehensive, well-structured, and accurate response. Use headings, bullet points, or numbered steps where it improves clarity. Cover root causes, step-by-step solutions, and any relevant tips or caveats. Be thorough but clear. Do not ask follow-up questions or invite the user to ask more — end with your complete answer only.",
      messages: [{ role: "user", content: question }],
    });

    const answer = message.content[0].text;
    res.json({ question, answer });
  } catch (err) {
    console.error("Tech Byte error:", err);
    res.status(500).json({ error: "Failed to generate answer" });
  }
}
