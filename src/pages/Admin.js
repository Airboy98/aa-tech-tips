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
      `/api/chat?action=get-sessions&adminPassword=${encodeURIComponent(password)}`,
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
    const res = await fetch(`/api/chat?action=get-messages&sessionId=${session.sessionId}`);
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
    await fetch("/api/chat?action=delete-session", {
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

  const handleNext = () => {
    const idx = sessions.findIndex((s) => s.sessionId === selectedSession.sessionId);
    if (idx < sessions.length - 1) loadSession(sessions[idx + 1]);
  };

  const hasNext = selectedSession
    ? sessions.findIndex((s) => s.sessionId === selectedSession.sessionId) < sessions.length - 1
    : false;

  const handleReply = async (e) => {
    e.preventDefault();
    if (!replyText.trim() || sending) return;
    setSending(true);
    await fetch("/api/chat?action=send-reply", {
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
        <div className="admin-login-wrapper">
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="chat-pill-input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="chat-pill-input"
              />
            </div>
            {authError && <p className="admin-login-error">{authError}</p>}
            <button type="submit" className="admin-login-btn">Login</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <div className="admin-layout">
      <div className="section-header">
        <h1>Admin</h1>
      </div>
      <div className={`admin-panels${selectedSession ? " admin-panels--chat-active" : ""}`}>
        {/* Session list */}
        <div className="admin-session-list">
          <div className="admin-session-header">
            <span className="admin-session-header-title">Conversations</span>
            <span className="admin-session-header-count">{sessions.length}</span>
          </div>
          {sessions.length === 0 && (
            <p className="admin-session-empty">No conversations yet.</p>
          )}
          {sessions.map((session) => {
            const isSelected = selectedSession?.sessionId === session.sessionId;
            return (
              <div
                key={session.sessionId}
                onClick={() => loadSession(session)}
                className={`admin-session-item${isSelected ? " admin-session-item--selected" : ""}`}
              >
                <div className="admin-session-item-content">
                  <div className="admin-session-item-top">
                    <div className="admin-session-name">{session.name}</div>
                    <span className="admin-session-time">{formatTimestamp(session.latestTimestamp)}</span>
                  </div>
                  <div className="admin-session-email">{session.email}</div>
                  <div className="admin-session-preview">{session.latestMessage}</div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(session.sessionId); }}
                  className="admin-delete-btn"
                  title="Delete conversation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Chat panel */}
        <div className="admin-chat-panel">
          {!selectedSession ? (
            <p className="admin-chat-empty">Select a conversation to view messages.</p>
          ) : (
            <>
              <div className="admin-chat-header">
                <button onClick={() => setSelectedSession(null)} className="admin-back-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="admin-chat-header-center">
                  <h3 className="admin-chat-header-name">{selectedSession.name}</h3>
                  <span className="admin-chat-header-email">{selectedSession.email}</span>
                </div>
                <button onClick={handleNext} disabled={!hasNext} className="admin-next-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <div ref={messagesContainerRef} className="admin-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`admin-bubble admin-bubble--${msg.sender}`}>
                    {msg.sender === "visitor" && (
                      <div className="admin-bubble-sender">{selectedSession.name}</div>
                    )}
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleReply} className="admin-reply-form">
                <input
                  type="text"
                  placeholder="Type a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="admin-reply-input"
                />
                <button type="submit" disabled={sending} className="chat-send-btn">
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
