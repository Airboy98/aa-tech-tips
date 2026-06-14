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
  const [unreadSessions, setUnreadSessions] = useState(new Set());
  const [editingSession, setEditingSession] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const adminPasswordRef = useRef("");
  const messagesContainerRef = useRef(null);
  const selectedSessionRef = useRef(null);
  const sessionsRef = useRef([]);

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
      setUnreadSessions(new Set(
        data.sessions.filter(s => s.latestSender === "visitor").map(s => s.sessionId)
      ));
    } else {
      setAuthError("Incorrect password.");
    }
  };

  const loadSession = async (session) => {
    setSelectedSession(session);
    selectedSessionRef.current = session;
    setUnreadSessions(prev => { const n = new Set(prev); n.delete(session.sessionId); return n; });
    setMessages([]);
    const res = await fetch(`/api/chat?action=get-messages&sessionId=${session.sessionId}`);
    const data = await res.json();
    setMessages(data.messages || []);
  };

  useEffect(() => { sessionsRef.current = sessions; }, [sessions]);

  useEffect(() => {
    if (!authed || sessions.length === 0) return;
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    sessionsRef.current.forEach((session) => {
      const channel = pusher.subscribe(`chat-${session.sessionId}`);
      channel.bind("new-message", (data) => {
        setSessions((prev) => {
          const updated = prev.map((s) =>
            s.sessionId === session.sessionId
              ? { ...s, latestMessage: data.text, latestSender: data.sender, latestTimestamp: data.timestamp }
              : s
          );
          return updated.sort((a, b) => new Date(b.latestTimestamp) - new Date(a.latestTimestamp));
        });
        if (selectedSessionRef.current?.sessionId === session.sessionId) {
          setMessages((prev) => [...prev, data]);
        } else if (data.sender === "visitor") {
          setUnreadSessions((prev) => { const n = new Set(prev); n.add(session.sessionId); return n; });
        }
      });
    });
    return () => {
      sessionsRef.current.forEach((session) => pusher.unsubscribe(`chat-${session.sessionId}`));
      pusher.disconnect();
    };
  }, [authed, sessions.length]);

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
      selectedSessionRef.current = null;
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

  const handleEditStart = (e, session) => {
    e.stopPropagation();
    setEditingSession(session.sessionId);
    setEditName(session.name);
    setEditEmail(session.email);
  };

  const handleSaveEdit = async (e, sessionId) => {
    e.stopPropagation();
    await fetch("/api/chat?action=update-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, name: editName, email: editEmail, adminPassword: adminPasswordRef.current }),
    });
    setSessions((prev) => prev.map((s) =>
      s.sessionId === sessionId ? { ...s, name: editName, email: editEmail } : s
    ));
    if (selectedSession?.sessionId === sessionId) {
      setSelectedSession((prev) => ({ ...prev, name: editName, email: editEmail }));
    }
    setEditingSession(null);
  };

  const handleReply = async () => {
    if (!replyText.trim() || sending) return;
    const text = replyText.trim();
    setReplyText("");
    setSending(true);
    await fetch("/api/chat?action=send-reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: selectedSession.sessionId,
        text,
        adminPassword: adminPasswordRef.current,
      }),
    });
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
                  {editingSession === session.sessionId ? (
                    <div className="admin-session-edit" onClick={(e) => e.stopPropagation()}>
                      <input className="admin-session-edit-input" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Name" />
                      <input className="admin-session-edit-input" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="Email" />
                      <div className="admin-session-edit-actions">
                        <button className="admin-session-edit-save" onClick={(e) => handleSaveEdit(e, session.sessionId)}>Save</button>
                        <button className="admin-session-edit-cancel" onClick={(e) => { e.stopPropagation(); setEditingSession(null); }}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="admin-session-item-top">
                        <div className="admin-session-name">{session.name}</div>
                        <span className="admin-session-time">{formatTimestamp(session.latestTimestamp)}</span>
                      </div>
                      <div className="admin-session-email">{session.email}</div>
                      <div className="admin-session-preview">
                        {unreadSessions.has(session.sessionId) && <span className="admin-unread-dot" />}
                        <span className="admin-session-preview-text">{session.latestMessage}</span>
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={(e) => handleEditStart(e, session)}
                  className="admin-edit-btn"
                  title="Edit contact"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </button>
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
                <button onClick={() => { setSelectedSession(null); selectedSessionRef.current = null; }} className="admin-back-btn">
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
              <form onSubmit={(e) => { e.preventDefault(); handleReply(); }} className="admin-reply-form">
                <input
                  type="text"
                  placeholder="Type a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="admin-reply-input"
                />
                <div role="button" onTouchStart={(e) => e.preventDefault()} onTouchEnd={(e) => { e.preventDefault(); handleReply(); }} onClick={handleReply} className="chat-send-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 4l-1.41 1.41L17.17 11H4v2h13.17l-6.58 6.59L12 21l9-9z" transform="rotate(-90 12 12)" />
                  </svg>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
