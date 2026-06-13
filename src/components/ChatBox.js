import React, { useState, useEffect, useRef } from "react";
import Pusher from "pusher-js";
import "../styles.css";

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

    fetch(`/api/chat?action=get-messages&sessionId=${sessionId}`)
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
      const res = await fetch("/api/chat?action=send-message", {
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
      <div className="chat-info-wrapper">
        <form onSubmit={handleInfoSubmit} className="chat-info-form">
          <div className="chat-pill-input-container">
            <input
              type="text"
              placeholder="Type your name..."
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
              className="chat-pill-input"
            />
          </div>
          <div className="chat-pill-input-container">
            <input
              type="email"
              placeholder="Type your email..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              className="chat-pill-input"
            />
          </div>
          <button type="submit" className="chat-pill-btn">
            Start Chat
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="chat-main-wrapper">
      <div ref={messagesContainerRef} className="chat-messages">
        {messages.length === 0 && (
          <p className="chat-empty">How can I help you today?</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble chat-bubble--${msg.sender}`}>
            {msg.sender === "admin" && (
              <div className="chat-bubble-sender">Aaron</div>
            )}
            {msg.text}
          </div>
        ))}
      </div>
      {error && <p className="chat-error">{error}</p>}
      <form onSubmit={handleSend} className="chat-send-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-send-input"
        />
        <button type="submit" disabled={sending} className="chat-send-btn">
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
