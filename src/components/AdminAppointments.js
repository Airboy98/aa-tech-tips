import React, { useEffect, useState } from "react";

const FIRST_YEAR = 2024;
const THIS_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: THIS_YEAR + 2 - FIRST_YEAR },
  (_, i) => THIS_YEAR + 1 - i,
);

const isAddressQuestion = (q) => /address|location/i.test(q.question);
const isPhoneQuestion = (q) => /phone/i.test(q.question);
const isPackageQuestion = (q) => /package/i.test(q.question);

function Field({ label, children }) {
  return (
    <div className="admin-appt-field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function formatWhen(start) {
  return new Date(start).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AdminAppointments({ adminPassword, hidden }) {
  const [year, setYear] = useState(THIS_YEAR);
  const [byYear, setByYear] = useState({});
  const [status, setStatus] = useState("loading");
  const appointments = byYear[year] || [];
  const setAppointments = (update) =>
    setByYear((prev) => ({ ...prev, [year]: update(prev[year] || []) }));
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState("");
  const [saveState, setSaveState] = useState("");
  const [cancelOpen, setCancelOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [cancelState, setCancelState] = useState("");

  useEffect(() => {
    if (byYear[year]) {
      setStatus("done");
      return;
    }
    setStatus("loading");
    const controller = new AbortController();
    fetch(`/api/admin?resource=appointments&action=list&year=${year}`, {
      headers: { "x-admin-password": adminPassword },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setByYear((prev) => ({ ...prev, [year]: data.appointments }));
        setStatus("done");
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setStatus("error");
      });
    return () => controller.abort();
  }, [adminPassword, year, byYear]);

  const now = new Date();
  const upcoming = appointments.filter((a) => new Date(a.end) >= now);
  const past = appointments.filter((a) => new Date(a.end) < now).reverse();
  const list = [...upcoming, ...past];
  const phone =
    selected?.phone || selected?.questions.find(isPhoneQuestion)?.answer;
  const packageQuestion = selected?.questions.find(isPackageQuestion);
  const otherQuestions = (selected?.questions || []).filter(
    (q) => !isAddressQuestion(q) && !isPhoneQuestion(q) && !isPackageQuestion(q),
  );

  const select = (appt) => {
    setSelected(appt);
    setNotes(appt.notes);
    setSaveState("");
    setCancelOpen(false);
    setCancelReason("");
    setCancelState("");
  };

  const cancelAppointment = async () => {
    setCancelState("cancelling");
    const res = await fetch("/api/admin?resource=appointments&action=cancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": adminPassword,
      },
      body: JSON.stringify({ uri: selected.uri, reason: cancelReason }),
    });
    if (!res.ok) return setCancelState("error");
    setAppointments((prev) => prev.filter((a) => a.uri !== selected.uri));
    setSelected(null);
  };

  const saveNotes = async () => {
    setSaveState("saving");
    const res = await fetch("/api/admin?resource=appointments&action=save-notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": adminPassword,
      },
      body: JSON.stringify({ uri: selected.uri, notes }),
    });
    if (!res.ok) return setSaveState("error");
    setAppointments((prev) =>
      prev.map((a) => (a.uri === selected.uri ? { ...a, notes } : a)),
    );
    setSaveState("saved");
  };

  return (
    <div
      className={`admin-panels${selected ? " admin-panels--chat-active" : ""}`}
      style={hidden ? { display: "none" } : undefined}
    >
      <div className="admin-session-list">
        <div className="admin-session-header">
          <span className="admin-session-header-title">Appointments</span>
          <select
            className="admin-appt-year"
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
              setSelected(null);
            }}
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="admin-session-items">
          {status === "loading" && (
            <p className="admin-session-empty">Loading appointments...</p>
          )}
          {status === "error" && (
            <p className="admin-session-empty">
              Couldn't load appointments from Calendly.
            </p>
          )}
          {status === "done" && list.length === 0 && (
            <p className="admin-session-empty">No appointments.</p>
          )}
          {list.map((appt) => (
            <div
              key={appt.uri}
              onClick={() => select(appt)}
              className={`admin-session-item${new Date(appt.end) >= now ? " admin-appt-item--upcoming" : ""}${selected?.uri === appt.uri ? " admin-session-item--selected" : ""}`}
            >
              <div className="admin-session-item-content">
                <div className="admin-session-item-top">
                  <div className="admin-session-name">{appt.name}</div>
                  {appt.notes && <span className="admin-unread-dot" />}
                </div>
                <div className="admin-session-email">
                  {formatWhen(appt.start)}
                </div>
                <div className="admin-session-preview">
                  <span className="admin-session-preview-text">
                    {appt.email}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-chat-panel">
        {!selected ? (
          <p className="admin-chat-empty">
            Select an appointment to view details.
          </p>
        ) : (
          <div className="admin-appt">
            <div className="admin-chat-header">
              <button
                onClick={() => setSelected(null)}
                className="admin-back-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="admin-chat-header-center">
                <h3 className="admin-chat-header-name">{selected.name}</h3>
                <span className="admin-chat-header-email">
                  <a href={`mailto:${selected.email}`}>{selected.email}</a>
                </span>
              </div>
            </div>

            <dl className="admin-appt-details">
              <Field label="When">
                {formatWhen(selected.start)}
              </Field>
              <Field label="Address">
                {/^zoom$/i.test(selected.address.trim()) ? (
                  "Zoom (virtual)"
                ) : selected.address ? (
                  <a
                    href={`https://maps.apple.com/?q=${encodeURIComponent(selected.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selected.address}
                  </a>
                ) : selected.joinUrl ? (
                  <a
                    href={selected.joinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video call link
                  </a>
                ) : (
                  "None given"
                )}
              </Field>
              {packageQuestion && (
                <Field label={packageQuestion.question}>
                  {packageQuestion.answer}
                </Field>
              )}
              <Field label="Phone">
                {phone ? <a href={`tel:${phone}`}>{phone}</a> : "None given"}
              </Field>
              {otherQuestions.map((q) => (
                <Field key={q.question} label={q.question}>
                  {q.answer}
                </Field>
              ))}
            </dl>

            {new Date(selected.end) >= now && (
              <div className="admin-appt-actions">
                {selected.rescheduleUrl && (
                  <a
                    href={selected.rescheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-session-edit-save"
                  >
                    Reschedule
                  </a>
                )}
                {!cancelOpen && (
                  <button
                    className="admin-appt-cancel-btn"
                    onClick={() => setCancelOpen(true)}
                  >
                    Cancel appointment
                  </button>
                )}
              </div>
            )}

            {cancelOpen && (
              <div className="admin-appt-cancel">
                <label htmlFor="appt-cancel-reason">
                  Reason (Calendly emails this to {selected.name || "them"})
                </label>
                <textarea
                  id="appt-cancel-reason"
                  className="admin-appt-notes"
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="Optional"
                />
                <div className="admin-session-edit-actions">
                  <button
                    className="admin-appt-cancel-btn"
                    onClick={cancelAppointment}
                    disabled={cancelState === "cancelling"}
                  >
                    {cancelState === "cancelling"
                      ? "Cancelling..."
                      : "Confirm cancellation"}
                  </button>
                  <button
                    className="admin-session-edit-cancel"
                    onClick={() => setCancelOpen(false)}
                  >
                    Keep appointment
                  </button>
                  {cancelState === "error" && (
                    <span className="admin-appt-save-msg">Couldn't cancel</span>
                  )}
                </div>
              </div>
            )}

            <label className="admin-appt-notes-label" htmlFor="appt-notes">
              Notes
            </label>
            <textarea
              id="appt-notes"
              className="admin-appt-notes"
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
                setSaveState("");
              }}
              placeholder="Type notes about this appointment..."
            />
            <div className="admin-session-edit-actions">
              <button
                className="admin-session-edit-save"
                onClick={saveNotes}
                disabled={saveState === "saving"}
              >
                {saveState === "saving" ? "Saving..." : "Save notes"}
              </button>
              {saveState === "saved" && (
                <span className="admin-appt-save-msg">Saved</span>
              )}
              {saveState === "error" && (
                <span className="admin-appt-save-msg">Couldn't save</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
