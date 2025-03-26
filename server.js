// server.js
const express = require("express");
const fetch = require("node-fetch");
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
    const response = await fetch(url);
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
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Giant Bomb game details:", error);
    res.status(500).json({ error: "Failed to fetch game details" });
  }
});

app.listen(3001, () => {
  console.log("Local server running on http://localhost:3001");
});
