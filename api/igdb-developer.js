import { igdbFetch } from "./_igdbFetch.js";

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const body = `
    search "${query}";
    fields
      name,
      logo.url,
      description,
      developed.count,
      published.count,
      rating,
      rating_count,
      headquarters.address,
      headquarters.city,
      headquarters.country,
      headquarters.lat,
      headquarters.lng,
      parent.company.name,
      website.url,
      aliases,
      alternative_names,
      changed_company.name,
      changed_company.date,
      changed_company.category;
    limit 10;
  `;

  try {
    const data = await igdbFetch("https://api.igdb.com/v4/companies", body);

    const normalized = data.map((company) => ({
      ...company,
      logo: company.logo
        ? {
            ...company.logo,
            url: `https:${company.logo.url.replace(/t_[^/]+/, "t_720p")}`,
          }
        : null,
    }));

    res.status(200).json({ results: normalized });
  } catch (error) {
    console.error("Error searching IGDB:", error);
    res.status(500).json({ error: "Failed to search companies" });
  }
}
