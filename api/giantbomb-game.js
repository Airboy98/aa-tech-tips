const fetch = require("node-fetch");

export default async function handler(req, res) {
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
    console.error("Error fetching Giant Bomb API:", error);
    res.status(500).json({ error: "Failed to fetch Giant Bomb data" });
  }
}
