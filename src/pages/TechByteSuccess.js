import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Collapsible from "react-collapsible";

export default function TechByteSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    const cacheKey = `tech-byte-${sessionId}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const { question, answer } = JSON.parse(cached);
      setQuestion(question);
      setAnswer(answer);
      setStatus("done");
      return;
    }

    fetch(`/api/tech-byte-answer?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.answer) {
          setQuestion(data.question || "");
          setAnswer(data.answer);
          setStatus("done");
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({
              question: data.question || "",
              answer: data.answer,
            }),
          );
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

  if (status === "loading") {
    return (
      <>
        <div className="section-header">
          <h1>Tech Byte</h1>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#aac4e0",
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
              margin: "0 auto 24px",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: "16px" }}>
            Verifying payment and generating your answer...
          </p>
          <p style={{ fontSize: "13px", color: "#6a8faf" }}>
            This may take a few seconds.
          </p>
        </div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="section-header">
          <h1>Tech Byte</h1>
        </div>
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ color: "#e07070", fontSize: "16px" }}>
            Something went wrong retrieving your answer.
          </p>
          <p
            style={{ color: "#aac4e0", fontSize: "14px", marginBottom: "24px" }}
          >
            If your payment went through, please email{" "}
            <a
              href="mailto:feedback@aatechtips.com"
              style={{ color: "#7ab8e8" }}
            >
              feedback@aatechtips.com
            </a>{" "}
            with your session ID:{" "}
            <code style={{ color: "#fff" }}>{sessionId}</code>
          </p>
          <button
            onClick={() => navigate("/tech-byte")}
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
            Back to Tech Byte
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="section-header">
        <h1>Tech Byte</h1>
      </div>
      <h2>Claude AI</h2>

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        {question && (
          <div
            style={{
              background: "#0a2540",
              border: "1px solid #3c709f",
              borderRadius: "10px",
              padding: "16px 20px",
              marginBottom: "24px",
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
        )}

        <div
          style={{
            background: "#0f1e2e",
            border: "1px solid #3c709f",
            borderRadius: "10px",
            padding: "20px 24px",
            marginBottom: "28px",
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
            style={{
              color: "#d4e8ff",
              fontSize: "15px",
              lineHeight: "1.75",
            }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h2
                    style={{
                      color: "#fff",
                      marginTop: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h3
                    style={{
                      color: "#fff",
                      marginTop: "18px",
                      marginBottom: "6px",
                    }}
                  >
                    {children}
                  </h3>
                ),
                h3: ({ children }) => (
                  <h4
                    style={{
                      color: "#e0f0ff",
                      marginTop: "14px",
                      marginBottom: "4px",
                    }}
                  >
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
                  <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li style={{ marginBottom: "4px" }}>{children}</li>
                ),
                p: ({ children }) => (
                  <p style={{ marginBottom: "12px" }}>{children}</p>
                ),
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
                hr: () => (
                  <hr style={{ borderColor: "#3c709f", margin: "16px 0" }} />
                ),
              }}
            >
              {answer}
            </ReactMarkdown>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/tech-byte")}
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
    </>
  );
}
