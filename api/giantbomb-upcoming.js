const fetch = require("node-fetch");

export default async function handler(req, res) {
  const API_KEY = process.env.REACT_APP_API_KEY_GIANT;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GIANT;
  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date (e.g., "2025-03-27")
  const futureDate = "2100-12-31"; // Far future date to capture all upcoming releases
  const url = `${BASE_URL}games/?api_key=${API_KEY}&format=json&filter=original_release_date:${currentDate}|${futureDate}&sort=popularity:desc&field_list=id,name,image,site_detail_url,original_game_rating,original_release_date,deck&limit=30`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching upcoming games from Giant Bomb API:", error);
    res.status(500).json({ error: "Failed to fetch upcoming games" });
  }
}
