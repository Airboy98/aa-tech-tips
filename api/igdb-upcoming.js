const fetch = require("node-fetch");

export default async function handler(req, res) {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_IGDB;
  const ACCESS_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_IGDB;

  const now = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
  const future = 2147483647; // Max Unix timestamp (year 2038)

  // Apicalypse query for upcoming games
  const body = `
    fields name, cover.url, first_release_date, summary, rating, url;
    where first_release_date >= ${now} & first_release_date < ${future};
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
      body: body,
    });

    const data = await response.json();
    res.status(200).json({ results: data });
  } catch (error) {
    console.error("Error fetching upcoming games from IGDB:", error);
    res.status(500).json({ error: "Failed to fetch upcoming games" });
  }
}
