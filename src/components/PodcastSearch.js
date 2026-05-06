import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function PodcastSearch() {
  const [query, setQuery] = useState("");
  const [dropdownResults, setDropdownResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [episodes, setEpisodes] = useState(null);
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
      .get(`${BASE_URL}search?q=${encodeURIComponent(query)}&type=show&limit=10`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const items = res.data.shows?.items || [];
        if (items.length === 0) {
          setDropdownResults([]);
          setShowDropdown(false);
          setSearchResult(null);
          setEpisodes(null);
        } else if (items.length === 1) {
          setDropdownResults([]);
          setShowDropdown(false);
          loadPodcast(items[0]);
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

  const handleSelect = (podcast) => {
    setShowDropdown(false);
    setDropdownResults([]);
    loadPodcast(podcast);
  };

  const loadPodcast = (podcast) => {
    setSearchResult(podcast);
    axios
      .get(`${BASE_URL}shows/${podcast.id}/episodes?limit=10&market=US`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setEpisodes(res.data?.items || null))
      .catch(() => setEpisodes(null));
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
                      placeholder="Enter podcast name..."
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
                    {dropdownResults.map((podcast) => (
                      <div
                        key={podcast.id}
                        className="search-dropdown-item"
                        onClick={() => handleSelect(podcast)}
                      >
                        <img
                          src={podcast.images?.[podcast.images.length - 1]?.url ?? "noposter.png"}
                          alt={podcast.name}
                        />
                        <div className="search-dropdown-info">
                          <span className="search-dropdown-name">{podcast.name}</span>
                          {podcast.publisher && (
                            <span className="search-dropdown-year">{podcast.publisher}</span>
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
                  <a href={`https://open.spotify.com/show/${searchResult.id}`} target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={searchResult.images?.[0]?.url ?? "noposter.png"}
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <h4>{searchResult.total_episodes} Episodes</h4>
                  <hr />
                  <h3>Latest Episodes</h3>
                  {episodes && Array.isArray(episodes) && episodes.length > 0 ? (
                    <ul>
                      {episodes
                        .filter((ep) => ep && ep.external_urls && ep.external_urls.spotify)
                        .map((episode) => (
                          <li key={episode.id}>
                            <a href={episode.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                              {episode.name}
                            </a>
                            <br />(
                            {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(episode.release_date))}
                            )
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p>No episodes available.</p>
                  )}
                  <hr />
                  <p>
                    {(() => {
                      const sentences = searchResult.description.split(/(?<=[.!?])\s/);
                      return sentences.length > 2 ? sentences.slice(0, 2).join(" ") : searchResult.description;
                    })()}
                  </p>
                  <h5>
                    Data provided by{" "}
                    <a href={`https://open.spotify.com/show/${searchResult.id}`} target="_blank" rel="noopener noreferrer">
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

export default PodcastSearch;
