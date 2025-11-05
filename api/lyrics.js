import cheerio from "cheerio";

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing Genius song URL" });

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    // Only select real lyric blocks, skip other divs
    const lyricDivs = $("div[data-lyrics-container='true']");
    let lyrics = "";

    lyricDivs.each((_, el) => {
      // Keep <br> as line breaks and italic/bold tags for readability
      $(el).find("br").replaceWith("\n");
      $(el)
        .find("i, em")
        .each((_, el) => {
          const text = $(el).text();
          $(el).replaceWith(`_${text}_`);
        });
      $(el)
        .find("b, strong")
        .each((_, el) => {
          const text = $(el).text();
          $(el).replaceWith(`**${text}**`);
        });

      lyrics += $(el).text().trim() + "\n\n";
    });

    // Clean unwanted stuff and normalize whitespace
    lyrics = lyrics
      // Remove "Embed" junk and non-lyrics sections
      .replace(/\d*Embed$/gm, "")
      .replace(/You might also like.*/gi, "")
      .replace(/See.*Lyrics/gi, "")
      .replace(/About This Song.*/gi, "")
      .replace(/Produced by.*/gi, "")
      .replace(/Written by.*/gi, "")
      .replace(/Translations.*/gi, "")
      .replace(/Contributors.*/gi, "")
      .replace(/\b\d+\s*Contributors?\b/gi, "")
      // Remove all [Verse 1], [Chorus], [Bridge], [Intro], [Outro] style tags
      .replace(/\[[^\]]+\]/g, "")
      // Normalize multiple spaces/newlines
      .replace(/\u00A0/g, " ")
      .replace(/[ \t]{2,}/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    // If no valid lyrics found
    if (!lyrics || lyrics.length < 10) {
      lyrics = "Lyrics not found or unable to cleanly extract.";
    }

    res.json({ lyrics });
  } catch (error) {
    console.error("Error fetching Genius lyrics:", error);
    res.status(500).json({ error: "Failed to fetch Genius lyrics" });
  }
}
