// server.js
const express = require("express");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
require("dotenv").config();

const app = express();
app.use(express.json());

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

const normalizeLogos = (companies) =>
  companies.map((c) => ({
    ...c,
    logo: c.logo
      ? {
          ...c.logo,
          url: `https:${c.logo.url.replace("t_thumb", "t_720p")}`,
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
    fields name, cover.url, first_release_date, summary, rating, url, platforms.name, involved_companies.company.name, involved_companies.developer;
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
  const { query } = req.query;
  if (!query) return res.json({ results: [] });

  const body = `
  search "${query}";
  fields name, logo.url, description, start_date, websites.*;
  where name ~ *"${query}"*;
  limit 10;
`;

  try {
    const data = await igdbFetch(IGDB_COMPANIES_URL, body);
    res.json({ results: normalizeLogos(data) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "IGDB search failed" });
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

app.listen(3001, () =>
  console.log("Local server running on http://localhost:3001"),
);
