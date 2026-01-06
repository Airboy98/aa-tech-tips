export default async function handler(req, res) {
  const { query } = req.query;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_IGDB;
  const ACCESS_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_IGDB;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const body = `
    search "${query}";
    fields
      name,
      cover.url,
      first_release_date,
      summary,
      rating,
      url,
      platforms.name,
      involved_companies.company.name,
      involved_companies.developer;
    limit 10;
  `;

  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": CLIENT_ID,
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "text/plain",
      },
      body,
    });

    const data = await response.json();

    const normalized = data.map((game) => ({
      ...game,
      cover: game.cover
        ? {
            ...game.cover,
            url: `https:${game.cover.url.replace(/t_[^/]+/, "t_720p")}`,
          }
        : null,
    }));

    res.status(200).json({ results: normalized });
  } catch (error) {
    console.error("Error searching IGDB:", error);
    res.status(500).json({ error: "Failed to search games" });
  }
}
