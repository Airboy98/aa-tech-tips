export default async function handler(req, res) {
  const { q } = req.query;
  const BASE_URL = process.env.REACT_APP_BASE_URL_GENIUS;
  const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_GENIUS;

  if (!q) return res.status(400).json({ error: "Missing search query" });
  if (!BASE_URL || !CLIENT_TOKEN)
    return res.status(500).json({ error: "Missing Genius API credentials" });

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
      const errorText = await response.text();
      throw new Error(`Genius API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // Extract relevant results
    const songs = data.response.hits.map((hit) => ({
      id: hit.result.id,
      title: hit.result.title,
      artist: hit.result.primary_artist.name,
      url: hit.result.url,
      image: hit.result.song_art_image_thumbnail_url,
    }));

    res.status(200).json({ songs });
  } catch (error) {
    console.error("Error fetching Genius data:", error);
    res.status(500).json({ error: "Failed to fetch Genius data" });
  }
}
