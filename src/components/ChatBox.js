import React, { useState, useEffect, useRef } from "react";
import Pusher from "pusher-js";

function generateSessionId() {
  return "visitor_" + Math.random().toString(36).substr(2, 9);
}

export default function ChatBox() {
  const [sessionId, setSessionId] = useState("");
  const [visitorInfo, setVisitorInfo] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    let sid = localStorage.getItem("chatSessionId");
    if (!sid) {
      sid = generateSessionId();
      localStorage.setItem("chatSessionId", sid);
    }
    setSessionId(sid);

    const stored = localStorage.getItem("chatVisitorInfo");
    if (stored) setVisitorInfo(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (!sessionId) return;

    fetch(`/api/get-messages?sessionId=${sessionId}`)
      .then((r) => r.json())
      .then((data) => setMessages(data.messages || []));

    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe(`chat-${sessionId}`);
    channel.bind("new-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`chat-${sessionId}`);
    };
  }, [sessionId]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    const info = { name: nameInput.trim(), email: emailInput.trim() };
    localStorage.setItem("chatVisitorInfo", JSON.stringify(info));
    setVisitorInfo(info);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          name: visitorInfo.name,
          email: visitorInfo.email,
          text: newMessage.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setNewMessage("");
    } catch {
      setError("Failed to send message. Please try again.");
    }
    setSending(false);
  };

  if (!visitorInfo) {
    return (
      <div
        style={{ maxWidth: "340px", margin: "0 auto", padding: "0 20px 20px" }}
      >
        <form
          onSubmit={handleInfoSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "20px",
          }}
        >
          <div style={pillInputContainer}>
            <input
              type="text"
              placeholder="Type your name..."
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
              style={pillInput}
            />
          </div>
          <div style={pillInputContainer}>
            <input
              type="email"
              placeholder="Type your email..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              style={pillInput}
            />
          </div>
          <button type="submit" style={pillButton}>
            Start Chat
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      style={{ maxWidth: "500px", margin: "0 auto", padding: "0 20px 20px" }}
    >
      <div
        ref={messagesContainerRef}
        style={{
          background: "#0a2540",
          border: "1px solid #3c709f",
          borderRadius: "10px",
          height: "300px",
          overflowY: "auto",
          padding: "16px",
          marginBottom: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {messages.length === 0 && (
          <p
            style={{
              color: "#6b8fab",
              fontSize: "13px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            How can I help you today?
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.sender === "visitor" ? "flex-end" : "flex-start",
              background: msg.sender === "visitor" ? "#1a56a0" : "#1e3a5f",
              color: "#fff",
              borderRadius: "8px",
              padding: "8px 12px",
              maxWidth: "80%",
              fontSize: "14px",
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            {msg.sender === "admin" && (
              <div
                style={{
                  fontSize: "11px",
                  color: "#aac4e0",
                  marginBottom: "3px",
                  textAlign: "left",
                }}
              >
                Aaron
              </div>
            )}
            {msg.text}
          </div>
        ))}
      </div>
      {error && (
        <p style={{ color: "#e07070", fontSize: "13px", marginBottom: "8px" }}>
          {error}
        </p>
      )}
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #3c709f",
          borderRadius: "30px",
          padding: "4px 4px 4px 14px",
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontSize: "14px",
          }}
        />
        <button
          type="submit"
          disabled={sending}
          style={{
            width: "38px",
            height: "38px",
            background: sending ? "#1a3a2a" : "#1a56a0",
            border: "none",
            borderRadius: "50%",
            cursor: sending ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            opacity: sending ? 0.5 : 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              d="M12 4l-1.41 1.41L17.17 11H4v2h13.17l-6.58 6.59L12 21l9-9z"
              transform="rotate(-90 12 12)"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

const pillInputContainer = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#333333",
  border: "1px solid #3c709f",
  borderRadius: "50px",
  padding: "10px",
  width: "100%",
  boxSizing: "border-box",
};

const pillInput = {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#fff",
  fontSize: "16px",
  paddingLeft: "10px",
};

const pillButton = {
  padding: "12px",
  background: "#1a56a0",
  color: "#fff",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  width: "100%",
};
