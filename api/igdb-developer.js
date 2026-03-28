import { igdbFetch } from "./_igdbFetch.js";

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const body = `
    fields
      name,
      slug,
      logo.url,
      description,
      start_date,
      country,
      websites.url,
      websites.category,
      developed.name,
      developed.cover.url,
      developed.first_release_date,
      developed.url,
      developed.rating,
      developed.summary,
      published.name,
      published.cover.url,
      published.first_release_date,
      published.url,
      published.rating,
      published.summary;
    where name ~ *"${query}"*;
    limit 10;
  `;

  try {
    const data = await igdbFetch("https://api.igdb.com/v4/companies", body);

    const q = query.toLowerCase();
    const sorted = [...data].sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      if (aName === q && bName !== q) return -1;
      if (bName === q && aName !== q) return 1;
      if (aName.startsWith(q) && !bName.startsWith(q)) return -1;
      if (bName.startsWith(q) && !aName.startsWith(q)) return 1;
      return aName.length - bName.length;
    });

    const company = sorted[0];

    const gameIds = [
      ...(company.developed || []),
      ...(company.published || []),
    ].map((g) => g.id).filter(Boolean);

    let gameDetailsMap = {};
    if (gameIds.length > 0) {
      const gameDetails = await igdbFetch(
        "https://api.igdb.com/v4/games",
        `fields summary, rating; where id = (${gameIds.join(",")}); limit 500;`
      );
      gameDetails.forEach((g) => { gameDetailsMap[g.id] = g; });
    }

    const enrichGames = (games) =>
      (games || []).map((g) => ({ ...g, ...gameDetailsMap[g.id] }));

    const normalized = {
      ...company,
      logo: company.logo
        ? { ...company.logo, url: `https:${company.logo.url.replace(/t_[^/]+/, "t_720p")}` }
        : null,
      developed: enrichGames(company.developed),
      published: enrichGames(company.published),
    };

    res.status(200).json({ results: [normalized] });
  } catch (error) {
    console.error("Error searching IGDB:", error);
    res.status(500).json({ error: "Failed to search companies" });
  }
}
