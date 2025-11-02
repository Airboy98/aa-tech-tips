export default async function handler(req, res) {
  const { q } = req.query;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GENIUS;
  const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_GENIUS;

  if (!q) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const response = await fetch(
      `${BASE_URL}search?q=${encodeURIComponent(q)}`,
      {
        headers: {
          Authorization: `Bearer ${CLIENT_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Genius API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Genius API:", error);
    res.status(500).json({ error: "Failed to fetch Genius data" });
  }
}
