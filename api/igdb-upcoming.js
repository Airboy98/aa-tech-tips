export default async function handler(req, res) {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_IGDB;
  const ACCESS_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_IGDB;

  const now = Math.floor(Date.now() / 1000);
  const future = 2147483647;

  const body = `
  fields name, cover.url, first_release_date, summary, hypes, url;
  where first_release_date >= ${now} & first_release_date < ${future} & hypes > 50;
  sort first_release_date asc;
  limit 30;
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

    const normalized = data.map((g) => ({
      ...g,
      cover: g.cover
        ? {
            ...g.cover,
            url: `https:${g.cover.url.replace(/t_[^/]+/, "t_cover_big")}`,
          }
        : null,
    }));

    res.status(200).json({ results: normalized });
  } catch (error) {
    console.error("IGDB upcoming error:", error);
    res.status(500).json({ error: "Failed to fetch upcoming games" });
  }
}
