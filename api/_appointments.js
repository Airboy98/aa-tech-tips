import { connectDB, AppointmentNote } from "./_db.js";

const CALENDLY_API = "https://api.calendly.com";

const CONCURRENCY = 5;
const inviteeCache = new Map();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function calendly(path, body, attempt = 0) {
  const res = await fetch(path.startsWith("http") ? path : `${CALENDLY_API}${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${process.env.CALENDLY_TOKEN}`,
      ...(body && { "Content-Type": "application/json" }),
    },
    body: body && JSON.stringify(body),
  });
  if (res.status === 429 && attempt < 3) {
    const wait = Number(res.headers.get("x-ratelimit-reset")) || 2;
    await sleep(Math.min(wait, 10) * 1000);
    return calendly(path, body, attempt + 1);
  }
  if (!res.ok) throw new Error(`Calendly ${res.status}: ${await res.text()}`);
  return res.json();
}

async function mapLimit(items, fn) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return results;
}

async function getInvitee(eventUri) {
  if (!inviteeCache.has(eventUri)) {
    const { collection } = await calendly(
      `/scheduled_events/${eventUri.split("/").pop()}/invitees`,
    );
    inviteeCache.set(eventUri, collection[0] || {});
  }
  return inviteeCache.get(eventUri);
}

const ADDRESS_LOCATION_TYPES = ["physical", "ask_invitee", "custom"];

function findAddress(location, questions) {
  const q = questions.find((q) => /address|location/i.test(q.question));
  if (q?.answer) return q.answer;
  return ADDRESS_LOCATION_TYPES.includes(location?.type)
    ? location.location || ""
    : "";
}

async function listAppointments(year) {
  const { resource: user } = await calendly("/users/me");
  const events = [];
  let path =
    `/scheduled_events?user=${encodeURIComponent(user.uri)}&status=active` +
    `&min_start_time=${year}-01-01T00:00:00Z&max_start_time=${year + 1}-01-01T00:00:00Z` +
    `&sort=start_time:asc&count=100`;
  while (path) {
    const page = await calendly(path);
    events.push(...page.collection);
    path = page.pagination?.next_page;
  }

  const [invitees, notes] = await Promise.all([
    mapLimit(events, (e) => getInvitee(e.uri)),
    AppointmentNote.find({ eventUri: { $in: events.map((e) => e.uri) } }),
  ]);
  const noteMap = Object.fromEntries(notes.map((n) => [n.eventUri, n.notes]));

  return events.map((e, i) => {
    const invitee = invitees[i];
    const questions = (invitee.questions_and_answers || []).map(
      ({ question, answer }) => ({ question, answer }),
    );
    return {
      uri: e.uri,
      eventName: e.name,
      start: e.start_time,
      end: e.end_time,
      address: findAddress(e.location, questions),
      joinUrl: e.location?.join_url || "",
      name: invitee.name || "",
      email: invitee.email || "",
      phone: invitee.text_reminder_number || "",
      rescheduleUrl: invitee.reschedule_url || "",
      questions,
      notes: noteMap[e.uri] || "",
    };
  });
}

// Served via /api/admin?resource=appointments
// GET  &action=list&year=2026
// POST &action=save-notes  { uri, notes }
// POST &action=cancel      { uri, reason }
export default async function handler(req, res) {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Unauthorized" });
  if (!process.env.CALENDLY_TOKEN)
    return res.status(500).json({ error: "CALENDLY_TOKEN is not set" });

  const { action } = req.query;
  try {
    await connectDB();

    if (action === "list") {
      if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
      const year = Number(req.query.year) || new Date().getFullYear();
      return res.json({ appointments: await listAppointments(year) });
    }

    if (action === "save-notes") {
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      const { uri, notes } = req.body;
      if (!uri) return res.status(400).json({ error: "Missing uri" });
      await AppointmentNote.findOneAndUpdate(
        { eventUri: uri },
        { notes: notes || "", updatedAt: new Date() },
        { upsert: true },
      );
      return res.json({ ok: true });
    }

    if (action === "cancel") {
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      const { uri, reason } = req.body;
      if (!uri) return res.status(400).json({ error: "Missing uri" });
      await calendly(`/scheduled_events/${uri.split("/").pop()}/cancellation`, {
        reason: reason || "",
      });
      return res.json({ ok: true });
    }

    return res.status(400).json({ error: "Unknown action" });
  } catch (err) {
    console.error("Appointments error:", err);
    return res.status(500).json({ error: "Failed to load appointments" });
  }
}
