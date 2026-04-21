import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./techadvice.css";

export default function TechAdvice() {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const success = searchParams.get("success") === "true";
  const canceled = searchParams.get("canceled") === "true";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, question }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <>
        <div className="section-header">
          <h1>Tech Advice</h1>
        </div>
        <div className="tech-advice-result">
          <h2>Payment Received!</h2>
          <p>
            Thank you for your payment. Your question has been submitted and you
            can expect a response at the email address you provided within 24 hours.
          </p>
          <p>
            In the meantime, feel free to browse the site for tips that may help!
          </p>
        </div>
      </>
    );
  }

  if (canceled) {
    return (
      <>
        <div className="section-header">
          <h1>Tech Advice</h1>
        </div>
        <div className="tech-advice-result">
          <h2>Payment Canceled</h2>
          <p>
            Your payment was canceled and you have not been charged. Feel free
            to try again whenever you're ready.
          </p>
        </div>
        <TechAdviceForm
          name={name}
          email={email}
          question={question}
          setName={setName}
          setEmail={setEmail}
          setQuestion={setQuestion}
          loading={loading}
          error={error}
          onSubmit={handleSubmit}
        />
      </>
    );
  }

  return (
    <>
      <div className="section-header">
        <h1>Tech Advice</h1>
      </div>
      <h2>Ask a Tech Question</h2>
      <div className="tech-advice-intro">
        <p>
          Have a specific tech question? Get a personalized answer from AA Tech
          Tips for just <strong>$5</strong>. Fill out the form below, pay
          securely via Stripe, and receive a detailed response at your email
          address within 24 hours.
        </p>
        <ul>
          <li>Device troubleshooting (computer, phone, TV, etc.)</li>
          <li>Recommendations for devices, apps, or services</li>
          <li>Step-by-step help with software or settings</li>
          <li>Any other tech question you have</li>
        </ul>
      </div>
      <TechAdviceForm
        name={name}
        email={email}
        question={question}
        setName={setName}
        setEmail={setEmail}
        setQuestion={setQuestion}
        loading={loading}
        error={error}
        onSubmit={handleSubmit}
      />
    </>
  );
}

function TechAdviceForm({
  name,
  email,
  question,
  setName,
  setEmail,
  setQuestion,
  loading,
  error,
  onSubmit,
}) {
  return (
    <form className="tech-advice-form" onSubmit={onSubmit}>
      <label htmlFor="ta-name">Your Name</label>
      <input
        id="ta-name"
        type="text"
        placeholder="Jane Smith"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="ta-email">Email Address</label>
      <input
        id="ta-email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="ta-question">Your Tech Question</label>
      <textarea
        id="ta-question"
        placeholder="Describe your tech issue or question in as much detail as possible..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={5}
        required
      />

      {error && <p className="ta-error">{error}</p>}

      <button type="submit" className="ta-submit" disabled={loading}>
        {loading ? "Redirecting to payment..." : "Pay $5 & Submit Question"}
      </button>

      <p className="ta-secure">
        Payments are processed securely via Stripe. You will not be charged
        until you complete checkout.
      </p>
    </form>
  );
}
