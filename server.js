// server.js
const express = require("express");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const Stripe = require("stripe");
const Anthropic = require("@anthropic-ai/sdk");
const Pusher = require("pusher");
const webpush = require("web-push");
const mongoose = require("mongoose");
require("dotenv").config();

webpush.setVapidDetails(
  "mailto:aaron.turner117@gmail.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

// MongoDB connection
let dbPromise = null;
async function connectDB() {
  if (!dbPromise) dbPromise = mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  await dbPromise;
}

const messageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  sender: { type: String, enum: ["visitor", "admin"], required: true },
  name: String,
  email: String,
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  lastReadAt: { type: Date },
  visitorLastReadAt: { type: Date },
});
const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);

const pushSubscriptionSchema = new mongoose.Schema({
  endpoint: { type: String, required: true, unique: true },
  keys: { p256dh: String, auth: String },
  createdAt: { type: Date, default: Date.now },
});
const PushSubscription =
  mongoose.models.PushSubscription ||
  mongoose.model("PushSubscription", pushSubscriptionSchema);

function makePusher() {
  return new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: true,
  });
}

const app = express();
app.use(express.json({ limit: "5mb" }));

const IGDB_GAMES_URL = "https://api.igdb.com/v4/games";
const IGDB_COMPANIES_URL = "https://api.igdb.com/v4/companies";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_IGDB;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_IGDB;
const TWITCH_AUTH_URL = process.env.REACT_APP_AUTH_URL_TWITCH;

let igdbAccessToken = null;
let igdbTokenExpiresAt = 0;

const getIgdbAccessToken = async () => {
  const now = Date.now();

  if (igdbAccessToken && now < igdbTokenExpiresAt - 60 * 1000) {
    return igdbAccessToken;
  }

  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", CLIENT_SECRET);
  params.append("grant_type", "client_credentials");

  const response = await fetch(TWITCH_AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    throw new Error(
      `Failed to obtain IGDB access token: ${response.status} ${JSON.stringify(
        data,
      )}`,
    );
  }

  igdbAccessToken = data.access_token;
  igdbTokenExpiresAt = now + (data.expires_in || 0) * 1000;

  return igdbAccessToken;
};

const igdbFetch = async (url, body) => {
  const accessToken = await getIgdbAccessToken();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Client-ID": CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
    body,
  });

  return response.json();
};

const normalizeCovers = (games) =>
  games.map((g) => ({
    ...g,
    cover: g.cover
      ? {
          ...g.cover,
          url: `https:${g.cover.url.replace("t_thumb", "t_720p")}`,
        }
      : null,
  }));

// UPCOMING GAMES
app.get("/api/igdb-upcoming", async (req, res) => {
  const now = Math.floor(Date.now() / 1000);
  const future = 2147483647;

  const body = `
  fields name, cover.url, first_release_date, summary, hypes, url;
  where first_release_date >= ${now} & first_release_date < ${future} & hypes > 50;
  sort first_release_date asc;
  limit 30;
`;

  try {
    const data = await igdbFetch(IGDB_GAMES_URL, body);
    res.json({ results: normalizeCovers(data) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch upcoming games" });
  }
});

// NEW RELEASES
app.get("/api/igdb-newreleases", async (req, res) => {
  const now = Math.floor(Date.now() / 1000);
  const recent = now - 90 * 24 * 60 * 60; // 90 days ago

  const body = `
    fields name, cover.url, first_release_date, summary, rating, url;
    where first_release_date >= ${recent} & first_release_date <= ${now} & rating > 50;
    sort first_release_date desc;
    limit 30;
  `;

  try {
    const data = await igdbFetch(IGDB_GAMES_URL, body);
    res.json({ results: normalizeCovers(data) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch new releases" });
  }
});

// SEARCH GAMES
app.get("/api/igdb-search", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.json({ results: [] });

  const body = `
    search "${query}";
    fields name, cover.url, first_release_date, summary, rating, url, platforms.name, platforms.platform_logo.url, involved_companies.company.name, involved_companies.developer;
    limit 10;
  `;

  try {
    const data = await igdbFetch(IGDB_GAMES_URL, body);
    res.json({ results: normalizeCovers(data) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "IGDB search failed" });
  }
});

// SEARCH DEVELOPERS
app.get("/api/igdb-developer", async (req, res) => {
  const { query, id } = req.query;

  if (id) {
    const body = `
      fields
        name,
        slug,
        logo.url,
        description,
        start_date,
        country,
        websites.url,
        websites.category,
        developed.name,
        developed.cover.url,
        developed.first_release_date,
        developed.url,
        published.name,
        published.cover.url,
        published.first_release_date,
        published.url;
      where id = ${id};
      limit 1;
    `;

    try {
      const data = await igdbFetch(IGDB_COMPANIES_URL, body);
      if (!data || data.length === 0)
        return res.status(404).json({ error: "Company not found" });

      const company = data[0];
      const gameIds = [
        ...(company.developed || []),
        ...(company.published || []),
      ]
        .map((g) => g.id)
        .filter(Boolean);

      let gameDetailsMap = {};
      if (gameIds.length > 0) {
        const gameDetails = await igdbFetch(
          IGDB_GAMES_URL,
          `fields summary, rating; where id = (${gameIds.join(",")}); limit 500;`,
        );
        gameDetails.forEach((g) => {
          gameDetailsMap[g.id] = g;
        });
      }

      const enrichGames = (games) =>
        (games || []).map((g) => ({ ...g, ...gameDetailsMap[g.id] }));

      const normalized = {
        ...company,
        logo: company.logo
          ? {
              ...company.logo,
              url: `https:${company.logo.url.replace("t_thumb", "t_720p")}`,
            }
          : null,
        developed: enrichGames(company.developed),
        published: enrichGames(company.published),
      };

      return res.json({ results: [normalized] });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "IGDB company fetch failed" });
    }
  }

  if (!query) return res.json({ results: [] });

  const body = `
    fields name, slug, logo.url;
    where name ~ *"${query}"*;
    limit 10;
  `;

  try {
    const data = await igdbFetch(IGDB_COMPANIES_URL, body);
    const q = query.toLowerCase();
    const sorted = [...data].sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      if (aName === q && bName !== q) return -1;
      if (bName === q && aName !== q) return 1;
      if (aName.startsWith(q) && !bName.startsWith(q)) return -1;
      if (bName.startsWith(q) && !aName.startsWith(q)) return 1;
      return aName.length - bName.length;
    });

    const results = sorted.map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      logo: c.logo
        ? {
            ...c.logo,
            url: `https:${c.logo.url.replace("t_thumb", "t_logo_med")}`,
          }
        : null,
    }));

    res.json({ results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "IGDB developer search failed" });
  }
});

// GENIUS + LYRICS (unchanged — good as-is)
app.get("/api/genius", async (req, res) => {
  const { q } = req.query;
  const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_GENIUS;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GENIUS;

  if (!q) return res.status(400).json({ error: "Missing search query" });

  try {
    const response = await fetch(
      `${BASE_URL}search?q=${encodeURIComponent(q)}`,
      {
        headers: { Authorization: `Bearer ${CLIENT_TOKEN}` },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Genius data" });
  }
});

app.get("/api/lyrics", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing Genius song URL" });

  try {
    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);
    let lyrics = "";

    $("div[data-lyrics-container='true']").each((_, el) => {
      $(el).find("br").replaceWith("\n");
      lyrics += $(el).text().trim() + "\n\n";
    });

    lyrics = lyrics.replace(/\[[^\]]+\]/g, "").trim();
    res.json({ lyrics: lyrics || "Lyrics not found." });
  } catch {
    res.status(500).json({ error: "Failed to fetch lyrics" });
  }
});

// TECH BYTE — create Payment Intent
app.post("/api/create-payment-intent", async (req, res) => {
  const { question, model } = req.body;
  if (!question || question.trim().length === 0) {
    return res.status(400).json({ error: "Question is required" });
  }

  const allowedModels = {
    "claude-sonnet-4-6": { amount: 200, label: "Claude Sonnet 4.6" },
    "claude-opus-4-8": { amount: 300, label: "Claude Opus 4.7" },
  };
  const tier = allowedModels[model] || allowedModels["claude-sonnet-4-6"];

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const q = question.trim();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: tier.amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        model: model || "claude-sonnet-4-6",
        question_1: q.substring(0, 500),
        question_2: q.substring(500, 1000),
      },
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
});

// TECH BYTE — verify payment and return Claude answer
app.post("/api/tech-byte-answer", async (req, res) => {
  const { payment_intent_id, image_base64, image_media_type } = req.body;
  if (!payment_intent_id)
    return res.status(400).json({ error: "Missing payment_intent_id" });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const paymentIntent =
      await stripe.paymentIntents.retrieve(payment_intent_id);
    if (paymentIntent.status !== "succeeded") {
      return res.status(402).json({ error: "Payment not completed" });
    }

    const question =
      (paymentIntent.metadata.question_1 || "") +
      (paymentIntent.metadata.question_2 || "");
    const model = paymentIntent.metadata.model || "claude-sonnet-4-6";

    const userContent =
      image_base64 && image_media_type
        ? [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: image_media_type,
                data: image_base64,
              },
            },
            { type: "text", text: question },
          ]
        : question;

    const message = await anthropic.messages.create({
      model,
      max_tokens: 2048,
      system:
        "You are a thorough and knowledgeable tech expert. A user has paid for a premium, detailed answer to their tech question. Provide a comprehensive, well-structured, and accurate response. Use headings, bullet points, or numbered steps where it improves clarity. Cover root causes, step-by-step solutions, and any relevant tips or caveats. Be thorough but clear. Do not ask follow-up questions or invite the user to ask more — end with your complete answer only.",
      messages: [{ role: "user", content: userContent }],
    });

    const answer = message.content[0].text;
    res.json({ question, answer });
  } catch (err) {
    console.error("Tech Byte error:", err);
    res.status(500).json({ error: "Failed to generate answer" });
  }
});

// CHAT
app.all("/api/chat", async (req, res) => {
  const { action } = req.query;
  try {
    await connectDB();

    if (action === "get-messages") {
      const { sessionId } = req.query;
      if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
      const [messages, sessionRecord] = await Promise.all([
        Message.find({ sessionId }).sort({ timestamp: 1 }),
        Session.findOne({ sessionId }),
      ]);
      return res.json({ messages, visitorLastReadAt: sessionRecord?.visitorLastReadAt || null });
    }

    if (action === "get-sessions") {
      const { adminPassword } = req.query;
      if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
      const sessionGroups = await Message.aggregate([
        { $sort: { timestamp: -1 } },
        { $group: { _id: "$sessionId", latestMessage: { $first: "$text" }, latestTimestamp: { $first: "$timestamp" }, latestSender: { $first: "$sender" } } },
        { $sort: { latestTimestamp: -1 } },
      ]);
      const sessionIds = sessionGroups.map(s => s._id);
      const [firstVisitors, readRecords] = await Promise.all([
        Promise.all(sessionIds.map(id => Message.findOne({ sessionId: id, sender: "visitor" }).sort({ timestamp: 1 }))),
        Session.find({ sessionId: { $in: sessionIds } }),
      ]);
      const readMap = Object.fromEntries(readRecords.map(r => [r.sessionId, r.lastReadAt]));
      const sessions = sessionGroups.map((s, i) => {
        const firstVisitor = firstVisitors[i];
        const lastReadAt = readMap[s._id] || null;
        const unread = s.latestSender === "visitor" && (!lastReadAt || s.latestTimestamp > lastReadAt);
        return {
          sessionId: s._id,
          name: firstVisitor?.name || "Unknown",
          email: firstVisitor?.email || "",
          latestMessage: s.latestMessage,
          latestTimestamp: s.latestTimestamp,
          latestSender: s.latestSender,
          unread,
        };
      });
      return res.json({ sessions });
    }

    if (action === "subscribe-push") {
      const { adminPassword, subscription } = req.body;
      if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
      if (!subscription?.endpoint) return res.status(400).json({ error: "Missing subscription" });
      await PushSubscription.findOneAndUpdate(
        { endpoint: subscription.endpoint },
        { endpoint: subscription.endpoint, keys: subscription.keys },
        { upsert: true }
      );
      return res.json({ success: true });
    }

    if (action === "unsubscribe-push") {
      const { endpoint } = req.body;
      if (endpoint) await PushSubscription.deleteOne({ endpoint });
      return res.json({ success: true });
    }

    if (action === "send-message") {
      const { sessionId, name, email, text } = req.body;
      if (!sessionId || !text) return res.status(400).json({ error: "Missing required fields" });
      const message = await Message.create({ sessionId, sender: "visitor", name, email, text });
      const [, subs] = await Promise.all([
        makePusher().trigger(`chat-${sessionId}`, "new-message", { sender: "visitor", text, timestamp: message.timestamp }),
        PushSubscription.find(),
      ]);
      if (subs.length > 0) {
        const payload = JSON.stringify({ title: `Message from ${name || "visitor"}`, body: text, url: "/admin" });
        await Promise.allSettled(subs.map(async sub => {
          try {
            await webpush.sendNotification({ endpoint: sub.endpoint, keys: sub.keys }, payload);
          } catch (err) {
            if (err.statusCode === 410) await PushSubscription.deleteOne({ endpoint: sub.endpoint });
          }
        }));
      }
      return res.json({ success: true, message });
    }

    if (action === "send-reply") {
      const { sessionId, text, adminPassword } = req.body;
      if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
      if (!sessionId || !text) return res.status(400).json({ error: "Missing required fields" });
      const message = await Message.create({ sessionId, sender: "admin", text });
      await makePusher().trigger(`chat-${sessionId}`, "new-message", { sender: "admin", text, timestamp: message.timestamp });
      return res.json({ success: true, message });
    }

    if (action === "mark-read") {
      const { sessionId, adminPassword } = req.body;
      if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
      if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
      await Session.findOneAndUpdate({ sessionId }, { lastReadAt: new Date() }, { upsert: true });
      return res.json({ success: true });
    }

    if (action === "mark-visitor-read") {
      const { sessionId } = req.body;
      if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
      await Session.findOneAndUpdate({ sessionId }, { visitorLastReadAt: new Date() }, { upsert: true });
      await makePusher().trigger(`chat-${sessionId}`, "visitor-read-receipt", {});
      return res.json({ success: true });
    }

    if (action === "update-session") {
      const { sessionId, name, email, adminPassword } = req.body;
      if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
      if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
      await Message.updateMany({ sessionId, sender: "visitor" }, { $set: { name, email } });
      await makePusher().trigger(`chat-${sessionId}`, "visitor-info-update", { name, email });
      return res.json({ success: true });
    }

    if (action === "delete-session") {
      const { sessionId, adminPassword } = req.body;
      if (adminPassword !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });
      if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
      await Promise.all([
        Message.deleteMany({ sessionId }),
        Session.deleteOne({ sessionId }),
      ]);
      return res.json({ success: true });
    }

    res.status(400).json({ error: "Unknown action" });
  } catch (err) {
    console.error("chat error:", err);
    res.status(500).json({ error: "Chat error" });
  }
});

app.listen(3001, () =>
  console.log("Local server running on http://localhost:3001"),
);
