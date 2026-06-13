import React, { useState, useEffect, useRef } from "react";
import Pusher from "pusher-js";
import "../styles.css";

function formatTimestamp(ts) {
  if (!ts) return "";
  const date = new Date(ts);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  const adminPasswordRef = useRef("");
  const messagesContainerRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    const res = await fetch(
      `/api/get-sessions?adminPassword=${encodeURIComponent(password)}`,
    );
    if (res.ok) {
      const data = await res.json();
      adminPasswordRef.current = password;
      setAuthed(true);
      setSessions(data.sessions);
    } else {
      setAuthError("Incorrect password.");
    }
  };

  const loadSession = async (session) => {
    setSelectedSession(session);
    setMessages([]);
    const res = await fetch(`/api/get-messages?sessionId=${session.sessionId}`);
    const data = await res.json();
    setMessages(data.messages || []);
  };

  useEffect(() => {
    if (!selectedSession) return;
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe(`chat-${selectedSession.sessionId}`);
    channel.bind("new-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`chat-${selectedSession.sessionId}`);
    };
  }, [selectedSession]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleDelete = async (sessionId) => {
    if (!window.confirm("Delete this conversation?")) return;
    await fetch("/api/delete-session", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, adminPassword: adminPasswordRef.current }),
    });
    setSessions((prev) => prev.filter((s) => s.sessionId !== sessionId));
    if (selectedSession?.sessionId === sessionId) {
      setSelectedSession(null);
      setMessages([]);
    }
  };

  const handleReply = async (e) => {
    e.preventDefault();
    if (!replyText.trim() || sending) return;
    setSending(true);
    await fetch("/api/send-reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: selectedSession.sessionId,
        text: replyText.trim(),
        adminPassword: adminPasswordRef.current,
      }),
    });
    setReplyText("");
    setSending(false);
  };

  if (!authed) {
    return (
      <>
        <div className="section-header">
          <h1>Admin</h1>
        </div>
        <div style={{ maxWidth: "340px", margin: "40px auto", padding: "0 20px" }}>
          <form onSubmit={handleLogin} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#333333", borderRadius: "50px", padding: "10px", width: "100%", boxSizing: "border-box", border: "1px solid #3c709f" }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ flex: 1, backgroundColor: "transparent", color: "white", fontSize: "16px", border: "none", outline: "none", paddingLeft: "10px" }}
              />
            </div>
            {authError && (
              <p style={{ color: "#e07070", fontSize: "13px", margin: 0 }}>{authError}</p>
            )}
            <button type="submit" style={{ padding: "12px", background: "#1a56a0", color: "#fff", border: "none", borderRadius: "30px", cursor: "pointer", fontSize: "14px", fontWeight: "bold", width: "100%" }}>
              Login
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div className="section-header">
        <h1>Admin</h1>
      </div>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* Session list */}
      <div
        style={{
          width: "260px",
          borderRight: "1px solid #3c709f",
          overflowY: "auto",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid #3c709f",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: "bold", fontSize: "15px" }}>
            Conversations
          </span>
          <span style={{ color: "#fff", fontSize: "12px" }}>
            {sessions.length}
          </span>
        </div>
        {sessions.length === 0 && (
          <p style={{ color: "#6b8fab", fontSize: "13px", padding: "16px" }}>
            No conversations yet.
          </p>
        )}
        {sessions.map((session) => {
          const isSelected = selectedSession?.sessionId === session.sessionId;
          return (
            <div
              key={session.sessionId}
              onClick={() => loadSession(session)}
              style={{
                padding: "14px 16px",
                borderBottom: "1px solid #1e3a5f",
                borderLeft: isSelected
                  ? "3px solid #4a9ade"
                  : "3px solid transparent",
                cursor: "pointer",
                background: isSelected ? "#0a1e33" : "#0d2d4a",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "#fff", fontSize: "14px", fontWeight: 500, flex: 1 }}>
                  {session.name}
                </div>
                <span style={{ color: "#6b8fab", fontSize: "11px", marginRight: "6px", flexShrink: 0 }}>
                  {formatTimestamp(session.latestTimestamp)}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(session.sessionId); }}
                  className="admin-delete-btn"
                  title="Delete conversation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </div>
              <div style={{ color: "#6b8fab", fontSize: "12px" }}>
                {session.email}
              </div>
              <div
                style={{
                  color: "#aac4e0",
                  fontSize: "12px",
                  marginTop: "4px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {session.latestMessage}
              </div>
            </div>
          );
        })}
      </div>

      {/* Chat panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          minWidth: 0,
        }}
      >
        {!selectedSession ? (
          <p
            style={{
              color: "#6b8fab",
              margin: "auto",
              fontSize: "14px",
            }}
          >
            Select a conversation to view messages.
          </p>
        ) : (
          <>
            <div style={{ marginBottom: "14px" }}>
              <h3 style={{ color: "#fff", margin: "0 0 2px" }}>
                {selectedSession.name}
              </h3>
              <span style={{ color: "#6b8fab", fontSize: "13px" }}>
                {selectedSession.email}
              </span>
            </div>
            <div
              ref={messagesContainerRef}
              style={{
                height: "calc(100vh - 360px)",
                background: "#0a2540",
                border: "1px solid #3c709f",
                borderRadius: "10px",
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf:
                      msg.sender === "admin" ? "flex-end" : "flex-start",
                    background: msg.sender === "admin" ? "#1a56a0" : "#1e3a5f",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    maxWidth: "70%",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    textAlign: "left",
                  }}
                >
                  {msg.sender === "visitor" && (
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#aac4e0",
                        marginBottom: "3px",
                        textAlign: "left",
                      }}
                    >
                      {selectedSession.name}
                    </div>
                  )}
                  {msg.text}
                </div>
              ))}
            </div>
            <form
              onSubmit={handleReply}
              style={{ display: "flex", alignItems: "center", border: "1px solid #3c709f", borderRadius: "30px", padding: "4px 4px 4px 14px" }}
            >
              <input
                type="text"
                placeholder="Type a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: "14px" }}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 4l-1.41 1.41L17.17 11H4v2h13.17l-6.58 6.59L12 21l9-9z" transform="rotate(-90 12 12)" />
                </svg>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

