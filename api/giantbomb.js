const fetch = require("node-fetch");

export default async function handler(req, res) {
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
}
