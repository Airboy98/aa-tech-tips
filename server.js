// server.js
const express = require("express");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/api/giantbomb", async (req, res) => {
  const { query } = req.query;
  const API_KEY = process.env.REACT_APP_API_KEY_GIANT;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GIANT;
  const url = `${BASE_URL}search/?api_key=${API_KEY}&format=json&query=${
    query || ""
  }&resources=game&field_list=id,name,image,site_detail_url,original_game_rating,original_release_date,deck`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "aa-tech-tips/1.0",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Giant Bomb API:", error);
    res.status(500).json({ error: "Failed to fetch Giant Bomb data" });
  }
});

app.get("/api/giantbomb-game", async (req, res) => {
  const { id, field_list } = req.query;
  const API_KEY = process.env.REACT_APP_API_KEY_GIANT;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GIANT;
  const url = `${BASE_URL}game/${id}/?api_key=${API_KEY}&format=json${
    field_list ? `&field_list=${field_list}` : ""
  }`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "aa-tech-tips/1.0",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Giant Bomb game details:", error);
    res.status(500).json({ error: "Failed to fetch game details" });
  }
});

app.get("/api/giantbomb-upcoming", async (req, res) => {
  const API_KEY = process.env.REACT_APP_API_KEY_GIANT;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GIANT;
  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date (e.g., "2025-03-27")
  const futureDate = "2100-12-31"; // Far future date to capture all upcoming releases
  const url = `${BASE_URL}releases/?api_key=${API_KEY}&format=json&filter=original_release_date:${currentDate}|${futureDate}&sort=original_release_date:asc&field_list=id,name,image,site_detail_url,original_game_rating,original_release_date,deck&limit=30`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "aa-tech-tips/1.0",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching upcoming games from Giant Bomb API:", error);
    res.status(500).json({ error: "Failed to fetch upcoming games" });
  }
});

app.get("/api/giantbomb-newreleases", async (req, res) => {
  const API_KEY = process.env.REACT_APP_API_KEY_GIANT;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GIANT;
  const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]; // releases from the last month
  const endDate = new Date().toISOString().split("T")[0]; // Get today's date (e.g., "2025-03-27")
  const url = `${BASE_URL}releases/?api_key=${API_KEY}&format=json&filter=original_release_date:${startDate}|${endDate}&sort=original_release_date:desc&field_list=id,name,image,site_detail_url,original_game_rating,original_release_date,deck&limit=30`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "aa-tech-tips/1.0",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching new releases from Giant Bomb API:", error);
    res.status(500).json({ error: "Failed to fetch new releases" });
  }
});

app.get("/api/genius", async (req, res) => {
  const { q } = req.query;
  const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_GENIUS;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GENIUS;

  if (!q) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const url = `${BASE_URL}search?q=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${CLIENT_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Genius API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Genius API:", error);
    res.status(500).json({ error: "Failed to fetch Genius data" });
  }
});

app.get("/api/lyrics", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing Genius song URL" });

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // Only select real lyric blocks, skip other divs
    const lyricDivs = $("div[data-lyrics-container='true']");
    let lyrics = "";

    lyricDivs.each((_, el) => {
      // Keep <br> as line breaks and italic/bold tags for readability
      $(el).find("br").replaceWith("\n");
      $(el)
        .find("i, em")
        .each((_, el) => {
          const text = $(el).text();
          $(el).replaceWith(`_${text}_`);
        });
      $(el)
        .find("b, strong")
        .each((_, el) => {
          const text = $(el).text();
          $(el).replaceWith(`**${text}**`);
        });

      lyrics += $(el).text().trim() + "\n\n";
    });

    // Clean unwanted stuff and normalize whitespace
    lyrics = lyrics
      // Remove "Embed" junk and non-lyrics sections
      .replace(/\d*Embed$/gm, "")
      .replace(/You might also like.*/gi, "")
      .replace(/See.*Lyrics/gi, "")
      .replace(/About This Song.*/gi, "")
      .replace(/Produced by.*/gi, "")
      .replace(/Written by.*/gi, "")
      .replace(/Translations.*/gi, "")
      .replace(/Contributors.*/gi, "")
      .replace(/\b\d+\s*Contributors?\b/gi, "")
      // Remove all [Verse 1], [Chorus], [Bridge], [Intro], [Outro] style tags
      .replace(/\[[^\]]+\]/g, "")
      // Normalize multiple spaces/newlines
      .replace(/\u00A0/g, " ")
      .replace(/[ \t]{2,}/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    // If no valid lyrics found
    if (!lyrics || lyrics.length < 10) {
      lyrics = "Lyrics not found or unable to cleanly extract.";
    }

    res.json({ lyrics });
  } catch (error) {
    console.error("Error fetching Genius lyrics:", error);
    res.status(500).json({ error: "Failed to fetch Genius lyrics" });
  }
});

app.listen(3001, () => {
  console.log("Local server running on http://localhost:3001");
});
