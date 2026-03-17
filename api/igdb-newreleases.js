import { igdbFetch } from "./_igdbFetch.js";

export default async function handler(req, res) {
  const recent = Math.floor((Date.now() - 90 * 24 * 60 * 60 * 1000) / 1000);
  const now = Math.floor(Date.now() / 1000);

  const body = `
    fields name, cover.url, first_release_date, summary, rating, url;
    where first_release_date >= ${recent} & first_release_date <= ${now} & rating > 50;
    sort first_release_date desc;
    limit 30;
  `;

  try {
    const data = await igdbFetch("https://api.igdb.com/v4/games", body);

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
    console.error("Error fetching new releases from IGDB:", error);
    res.status(500).json({ error: "Failed to fetch new releases" });
  }
}
