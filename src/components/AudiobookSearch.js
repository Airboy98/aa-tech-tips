import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function AudiobookSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [audiobookDetails, setAudiobookDetails] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams("grant_type=client_credentials"),
        {
          headers: {
            Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then((res) => {
        setToken(res.data.access_token);
      })
      .catch((error) => {
        console.error("Error getting token:", error);
        setToken(null);
      });
  }, []);

  const searchAudiobook = (query) => {
    axios
      .get(`${BASE_URL}search?q=${query}&type=audiobook`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.audiobooks && res.data.audiobooks.items.length > 0) {
          const audiobook = res.data.audiobooks.items[0];
          setSearchResult(audiobook);
          fetchAudiobookDetails(audiobook.id);
          } else {
          setSearchResult(null);
          setAudiobookDetails(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for audiobook:", error);
        setSearchResult(null);
        setAudiobookDetails(null);
      });
  };

  const fetchAudiobookDetails = (audiobookId) => {
    axios
      .get(`${BASE_URL}audiobooks/${audiobookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAudiobookDetails(res.data);
      })
      .catch((error) => {
        console.error("Error fetching audiobook details:", error);
        setAudiobookDetails(null);
      });
  };

  const formatDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const getSummary = (description) => {
    if (!description) return "";

    // Try splitting by actual newlines first
    let cleanText = description;

    // Check if description starts with Author/Narrator info
    if (
      description.includes("Author(s):") ||
      description.includes("Narrator(s):")
    ) {
      // Find where the actual description starts (after the narrator line)
      const lines = description.split(/\n+/); // Split by one or more newlines

      // Find the index where the actual description starts (first non-Author/Narrator line)
      let descStartIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (
          !lines[i].startsWith("Author(s):") &&
          !lines[i].startsWith("Narrator(s):") &&
          lines[i].trim().length > 0
        ) {
          descStartIndex = i;
          break;
        }
      }

      cleanText = lines.slice(descStartIndex).join(" ");
    }

    // Remove HTML tags if any
    cleanText = cleanText.replace(/<[^>]*>/g, "");

    // Split by sentences (. ! ?)
    const sentences = cleanText.split(/(?<=[.!?])\s+/);

    // Take first 3 sentences, or up to 250 characters
    let summary = sentences.slice(0, 3).join(" ");

    return summary.trim();
  };

  useEffect(() => {
    if (searchQuery && token) {
      searchAudiobook(searchQuery);
    }
  }, [searchQuery, token]);

  return (
    <div>
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href={`${searchResult.external_urls?.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                      src={
                        searchResult.images && searchResult.images.length > 0
                          ? searchResult.images[0].url
                          : "noposter.png"
                      }
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr></hr>

                  <h4>
                    By{" "}
                    {searchResult.authors?.map((a) => a.name).join(", ") ||
                      "Unknown Author"}
                  </h4>
                  {searchResult.narrators &&
                    searchResult.narrators.length > 0 && (
                      <h4>
                        Narrated by{" "}
                        {searchResult.narrators.map((n) => n.name).join(", ")}
                      </h4>
                    )}
                  {audiobookDetails?.total_chapters && (
                    <h4>{audiobookDetails.total_chapters} Chapters</h4>
                  )}
                  {audiobookDetails?.chapters?.items && (
                    <h4>
                      {formatDuration(
                        audiobookDetails.chapters.items.reduce(
                          (total, chapter) =>
                            total + (chapter.duration_ms || 0),
                          0,
                        ),
                      )}
                    </h4>
                  )}
                  {audiobookDetails?.chapters?.items?.[0]?.release_date && (
                    <h4>{audiobookDetails.chapters.items[0].release_date}</h4>
                  )}
                  <hr></hr>
                  {searchResult.description && (
                    <p>{getSummary(searchResult.description)}</p>
                  )}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={searchResult.external_urls?.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify
                    </a>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      )}
    </div>
  );
}

export default AudiobookSearch;
