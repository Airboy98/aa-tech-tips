import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function AudiobookSearch() {
  const [query, setQuery] = useState("");
  const [dropdownResults, setDropdownResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [audiobookDetails, setAudiobookDetails] = useState(null);
  const [token, setToken] = useState(null);
  const wrapperRef = useRef(null);

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
        }
      )
      .then((res) => setToken(res.data.access_token))
      .catch(() => setToken(null));
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim() || !token) return;
    axios
      .get(`${BASE_URL}search?q=${encodeURIComponent(query)}&type=audiobook&limit=10`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const items = res.data.audiobooks?.items || [];
        if (items.length === 0) {
          setDropdownResults([]);
          setShowDropdown(false);
          setSearchResult(null);
          setAudiobookDetails(null);
        } else if (items.length === 1) {
          setDropdownResults([]);
          setShowDropdown(false);
          loadAudiobook(items[0]);
        } else {
          setDropdownResults(items);
          setShowDropdown(true);
          setSearchResult(null);
        }
      })
      .catch(() => {
        setSearchResult(null);
        setShowDropdown(false);
      });
  };

  const handleSelect = (audiobook) => {
    setShowDropdown(false);
    setDropdownResults([]);
    loadAudiobook(audiobook);
  };

  const loadAudiobook = (audiobook) => {
    setSearchResult(audiobook);
    axios
      .get(`${BASE_URL}audiobooks/${audiobook.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAudiobookDetails(res.data))
      .catch(() => setAudiobookDetails(null));
  };

  const formatDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const getSummary = (description) => {
    if (!description) return "";
    let cleanText = description;
    if (description.includes("Author(s):") || description.includes("Narrator(s):")) {
      const lines = description.split(/\n+/);
      let descStartIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (!lines[i].startsWith("Author(s):") && !lines[i].startsWith("Narrator(s):") && lines[i].trim().length > 0) {
          descStartIndex = i;
          break;
        }
      }
      cleanText = lines.slice(descStartIndex).join(" ");
    }
    cleanText = cleanText.replace(/<[^>]*>/g, "");
    const sentences = cleanText.split(/(?<=[.!?])\s+/);
    return sentences.slice(0, 3).join(" ").trim();
  };

  return (
    <div ref={wrapperRef}>
      <div className="internet" style={{ textAlign: "center" }}>
        <table style={{ textAlign: "left" }}>
          <tbody>
            <tr>
              <td>
                <form onSubmit={handleSubmit}>
                  <div className="search">
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Enter audiobook name..."
                    />
                  </div>
                  <button type="submit">
                    <span className="material-symbols-outlined" style={{ fontSize: "24px", color: "white" }}>
                      search
                    </span>
                  </button>
                </form>

                {showDropdown && (
                  <div className="search-dropdown">
                    {dropdownResults.map((audiobook) => (
                      <div
                        key={audiobook.id}
                        className="search-dropdown-item"
                        onClick={() => handleSelect(audiobook)}
                      >
                        <img
                          src={audiobook.images?.length > 0 ? audiobook.images[audiobook.images.length - 1].url : "noposter.png"}
                          alt={audiobook.name}
                        />
                        <div className="search-dropdown-info">
                          <span className="search-dropdown-name">{audiobook.name}</span>
                          {audiobook.authors?.length > 0 && (
                            <span className="search-dropdown-year">{audiobook.authors.map((a) => a.name).join(", ")}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a href={searchResult.external_urls?.spotify} target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={searchResult.images?.length > 0 ? searchResult.images[0].url : "noposter.png"}
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr />
                  <h4>By {searchResult.authors?.map((a) => a.name).join(", ") || "Unknown Author"}</h4>
                  {searchResult.narrators?.length > 0 && (
                    <h4>Narrated by {searchResult.narrators.map((n) => n.name).join(", ")}</h4>
                  )}
                  {audiobookDetails?.total_chapters && (
                    <h4>{audiobookDetails.total_chapters} Chapters</h4>
                  )}
                  {audiobookDetails?.chapters?.items && (
                    <h4>
                      {formatDuration(
                        audiobookDetails.chapters.items.reduce((total, chapter) => total + (chapter.duration_ms || 0), 0)
                      )}
                    </h4>
                  )}
                  {audiobookDetails?.chapters?.items?.[0]?.release_date && (
                    <h4>{audiobookDetails.chapters.items[0].release_date}</h4>
                  )}
                  <hr />
                  {searchResult.description && <p>{getSummary(searchResult.description)}</p>}
                  <h5>
                    Data provided by{" "}
                    <a href={searchResult.external_urls?.spotify} target="_blank" rel="noopener noreferrer">
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
