import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import ReactMarkdown from "react-markdown";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const MIN_CHARS = 100;
const MAX_CHARS = 1000;

const TIERS = [
  {
    model: "claude-sonnet-4-6",
    label: "Sonnet 4.6",
    price: "$3",
    description:
      "This model excels at being fast, accurate, and thorough — great for most tech questions.",
  },
  {
    model: "claude-opus-4-7",
    label: "Opus 4.7",
    price: "$5",
    description:
      "This is Anthropic's most powerful model — best for complex, multi-part questions.",
  },
];

const SYSTEM_PROMPT_COMPONENTS = {
  h1: ({ children }) => (
    <h2 style={{ color: "#fff", marginTop: "20px", marginBottom: "8px" }}>
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 style={{ color: "#fff", marginTop: "18px", marginBottom: "6px" }}>
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 style={{ color: "#e0f0ff", marginTop: "14px", marginBottom: "4px" }}>
      {children}
    </h4>
  ),
  strong: ({ children }) => (
    <strong style={{ color: "#fff" }}>{children}</strong>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code
        style={{
          background: "#0a2540",
          color: "#7ab8e8",
          padding: "2px 6px",
          borderRadius: "4px",
          fontSize: "13px",
        }}
      >
        {children}
      </code>
    ) : (
      <pre
        style={{
          background: "#0a2540",
          border: "1px solid #3c709f",
          borderRadius: "8px",
          padding: "14px",
          overflowX: "auto",
          fontSize: "13px",
          color: "#aac4e0",
          width: "100%",
          boxSizing: "border-box",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        <code>{children}</code>
      </pre>
    ),
  ul: ({ children }) => (
    <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ paddingLeft: "20px", marginBottom: "10px" }}>{children}</ol>
  ),
  li: ({ children }) => <li style={{ marginBottom: "4px" }}>{children}</li>,
  p: ({ children }) => <p style={{ marginBottom: "12px" }}>{children}</p>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#7ab8e8" }}
    >
      {children}
    </a>
  ),
  hr: () => <hr style={{ borderColor: "#3c709f", margin: "16px 0" }} />,
};

function CheckoutForm({ price, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.href },
      redirect: "if_required",
    });

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else if (result.paymentIntent?.status === "succeeded") {
      onSuccess(result.paymentIntent.id);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flexDirection: "column",
        alignItems: "stretch",
        background: "none",
        borderRadius: 0,
      }}
    >
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          width: "100%",
          marginTop: "16px",
          padding: "14px",
          background: stripe && !loading ? "#1a7a4a" : "#1a3a2a",
          border: "1px solid #2a9a5a",
          borderRadius: "30px",
          color: stripe && !loading ? "#fff" : "#557755",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: stripe && !loading ? "pointer" : "not-allowed",
          transition: "background 0.2s",
        }}
      >
        {loading ? "Processing..." : `Pay ${price} & Ask`}
      </button>
      {error && (
        <p
          style={{
            color: "#e07070",
            fontSize: "14px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}

function TechByteForm({ model, price, description }) {
  const [step, setStep] = useState("question");
  const [question, setQuestion] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const charCount = question.length;
  const isReady = charCount >= MIN_CHARS && charCount <= MAX_CHARS;

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!isReady || loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim(), model }),
      });
      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
        setStep("payment");
      } else {
        setError(
          data.error || "Failed to initialize payment. Please try again.",
        );
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (intentId) => {
    setStep("loading");
    try {
      const res = await fetch(
        `/api/tech-byte-answer?payment_intent_id=${intentId}`,
      );
      const data = await res.json();
      if (data.answer) {
        setAnswer(data.answer);
        setStep("answer");
      } else {
        setError(
          "Payment succeeded but answer could not be retrieved. Email feedback@aatechtips.com with ID: " +
            intentId,
        );
        setStep("error");
      }
    } catch {
      setError(
        "Payment succeeded but something went wrong. Email feedback@aatechtips.com with ID: " +
          intentId,
      );
      setStep("error");
    }
  };

  const handleReset = () => {
    setStep("question");
    setQuestion("");
    setClientSecret("");
    setPaymentIntentId("");
    setAnswer("");
    setError(null);
  };

  if (step === "loading") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          color: "#aac4e0",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid #3c709f",
            borderTopColor: "#7ab8e8",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 20px",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ fontSize: "15px" }}>Generating your answer...</p>
        <p style={{ fontSize: "13px", color: "#6a8faf" }}>
          This may take a few seconds.
        </p>
      </div>
    );
  }

  if (step === "answer") {
    return (
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            background: "#0a2540",
            border: "1px solid #3c709f",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "12px",
              color: "#6a8faf",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Your Question
          </p>
          <p
            style={{
              margin: 0,
              color: "#aac4e0",
              fontSize: "14px",
              lineHeight: "1.6",
              whiteSpace: "pre-wrap",
            }}
          >
            {question}
          </p>
        </div>
        <div
          style={{
            background: "#0f1e2e",
            border: "1px solid #3c709f",
            borderRadius: "10px",
            padding: "20px 24px",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "12px",
              color: "#6a8faf",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Claude's Answer
          </p>
          <div
            style={{ color: "#d4e8ff", fontSize: "15px", lineHeight: "1.75" }}
          >
            <ReactMarkdown components={SYSTEM_PROMPT_COMPONENTS}>
              {answer}
            </ReactMarkdown>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleReset}
            style={{
              padding: "12px 32px",
              background: "#1a4a72",
              border: "1px solid #3c709f",
              borderRadius: "8px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Ask Another Question
          </button>
        </div>
      </div>
    );
  }

  if (step === "error") {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <p style={{ color: "#e07070", fontSize: "14px", marginBottom: "20px" }}>
          {error}
        </p>
        <button
          onClick={handleReset}
          style={{
            padding: "10px 24px",
            background: "#1a4a72",
            border: "1px solid #3c709f",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 20px" }}>
      {step === "question" && (
        <>
          <h4>{description}</h4>

          <form
            onSubmit={handleQuestionSubmit}
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              background: "none",
              borderRadius: 0,
            }}
          >
            <textarea
              value={question}
              onChange={(e) => {
                if (e.target.value.length <= MAX_CHARS)
                  setQuestion(e.target.value);
              }}
              placeholder="Example: I have a 2015 MacBook Pro running the latest compatible macOS. My Wi-Fi keeps disconnecting intermittently. My router is an Asus AX6000. I've rebooted both devices. My phone stays connected fine. What could be causing this and how do I fix it?"
              rows={10}
              style={{
                width: "100%",
                background: "#0f1e2e",
                border: "1px solid #3c709f",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "14px",
                lineHeight: "1.6",
                padding: "12px",
                resize: "vertical",
                boxSizing: "border-box",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: charCount < MIN_CHARS ? "#e07070" : "#7ec87e",
                }}
              >
                {charCount < MIN_CHARS
                  ? `${MIN_CHARS - charCount} more characters needed`
                  : `${charCount} / ${MAX_CHARS}`}
              </span>
              {charCount > 0 && charCount < MIN_CHARS && (
                <span style={{ fontSize: "12px", color: "#aac4e0" }}>
                  The more detail, the better your answer
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={!isReady || loading}
              style={{
                width: "100%",
                padding: "14px",
                background: isReady && !loading ? "#1a7a4a" : "#1a3a2a",
                border: "1px solid #2a9a5a",
                borderRadius: "30px",
                color: isReady && !loading ? "#fff" : "#557755",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: isReady && !loading ? "pointer" : "not-allowed",
                transition: "background 0.2s",
              }}
            >
              {loading
                ? "Preparing payment..."
                : `Continue to Payment — ${price}`}
            </button>
          </form>
          {error && (
            <p
              style={{
                color: "#e07070",
                textAlign: "center",
                marginTop: "12px",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}
          <h5
            style={{ textAlign: "center", color: "#ffffff", marginTop: "16px" }}
          >
            Secure payment via Stripe. Your question is sent to Claude AI after
            payment is confirmed.
          </h5>
        </>
      )}

      {step === "payment" && clientSecret && (
        <>
          <div
            style={{
              background: "#0a2540",
              border: "1px solid #3c709f",
              borderRadius: "10px",
              padding: "14px 18px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                margin: "0 0 4px",
                fontSize: "12px",
                color: "#6a8faf",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Your Question
            </p>
            <p
              style={{
                margin: 0,
                color: "#aac4e0",
                fontSize: "13px",
                lineHeight: "1.5",
              }}
            >
              {question}
            </p>
          </div>
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: "night",
                variables: {
                  colorPrimary: "#3c709f",
                  colorBackground: "#0f1e2e",
                  colorText: "#ffffff",
                  colorDanger: "#e07070",
                  borderRadius: "8px",
                  fontFamily: "inherit",
                },
              },
            }}
          >
            <CheckoutForm price={price} onSuccess={handlePaymentSuccess} />
          </Elements>
          <button
            onClick={() => setStep("question")}
            style={{
              background: "none",
              border: "none",
              color: "#6a8faf",
              fontSize: "13px",
              cursor: "pointer",
              marginTop: "12px",
              textDecoration: "underline",
              display: "block",
              margin: "12px auto 0",
            }}
          >
            ← Edit question
          </button>
        </>
      )}
    </div>
  );
}

export default function TechByte() {
  return (
    <>
      <div className="section-header">
        <h1>Tech Byte</h1>
      </div>
      <h2>Claude AI</h2>
      {/* <Collapsible
        trigger={<button className="collapsible-trigger">Instructions</button>}
      >
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "0 20px 20px",
          }}
        >
          <div
            style={{
              background: "#0a2540",
              border: "1px solid #3c709f",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                color: "#aac4e0",
                fontSize: "13px",
                lineHeight: "1.7",
              }}
            >
              <li>Enter your question with a model below in conversational English</li>
              <li>Name your device, brand, model, and operating system</li>
              <li>Describe exactly what is or isn't working</li>
              <li>Include what you've already tried</li>
              <li>State what outcome you're looking for</li>
            </ul>
          </div>
        </div>
      </Collapsible> */}
      {TIERS.map(({ model, label, price, description }) => (
        <Collapsible
          key={model}
          trigger={<button className="collapsible-trigger">{label}</button>}
        >
          <TechByteForm model={model} price={price} description={description} />
        </Collapsible>
      ))}
    </>
  );
}
