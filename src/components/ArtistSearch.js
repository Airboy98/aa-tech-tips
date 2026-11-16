import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function ArtistSearch() {
  const [query, setQuery] = useState("");
  const [dropdownResults, setDropdownResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [EPs, setEPs] = useState(null);
  const [singles, setSingles] = useState(null);
  const [token, setToken] = useState(null);
  const [releaseTab, setReleaseTab] = useState(null);
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
        },
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
      .get(
        `${BASE_URL}search?q=${encodeURIComponent(query)}&type=artist&limit=10`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        const items = res.data.artists?.items || [];
        if (items.length === 0) {
          setDropdownResults([]);
          setShowDropdown(false);
          setSearchResult(null);
          setAlbums(null);
          setEPs(null);
          setSingles(null);
        } else if (items.length === 1) {
          setDropdownResults([]);
          setShowDropdown(false);
          loadArtist(items[0]);
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

  const handleSelect = (artist) => {
    setShowDropdown(false);
    setDropdownResults([]);
    loadArtist(artist);
  };

  const loadArtist = (artist) => {
    setSearchResult(artist);
    setReleaseTab(null);
    fetchAlbums(artist.id);
    fetchEPs(artist.id);
    fetchSingles(artist.id);
  };

  const fetchAlbums = (artistId) => {
    axios
      .get(`${BASE_URL}artists/${artistId}/albums?limit=50`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAlbums(
          res.data?.items
            ? res.data.items.filter((item) => item.album_group === "album")
            : null,
        );
      })
      .catch(() => setAlbums(null));
  };

  const fetchEPs = (artistId) => {
    axios
      .get(`${BASE_URL}artists/${artistId}/albums?limit=50`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setEPs(
          res.data?.items
            ? res.data.items.filter(
                (item) =>
                  item.album_group === "single" && item.total_tracks >= 3,
              )
            : null,
        );
      })
      .catch(() => setEPs(null));
  };

  const fetchSingles = (artistId) => {
    axios
      .get(`${BASE_URL}artists/${artistId}/albums?limit=50`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSingles(
          res.data?.items
            ? res.data.items.filter(
                (item) =>
                  item.album_group === "single" && item.total_tracks < 3,
              )
            : null,
        );
      })
      .catch(() => setSingles(null));
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
                      placeholder="Enter artist name..."
                    />
                  </div>
                  <button type="submit">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px", color: "white" }}
                    >
                      search
                    </span>
                  </button>
                </form>

                {showDropdown && (
                  <div className="search-dropdown">
                    {dropdownResults.map((artist) => (
                      <div
                        key={artist.id}
                        className="search-dropdown-item"
                        onClick={() => handleSelect(artist)}
                      >
                        <img
                          src={
                            artist.images?.length > 0
                              ? artist.images[artist.images.length - 1].url
                              : "nopicture.png"
                          }
                          alt={artist.name}
                        />
                        <div className="search-dropdown-info">
                          <span className="search-dropdown-name">
                            {artist.name}
                          </span>
                          {artist.genres?.length > 0 && (
                            <span className="search-dropdown-year">
                              {artist.genres[0]}
                            </span>
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
                  <a
                    href={`https://open.spotify.com/artist/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={
                        searchResult.images?.length > 0
                          ? searchResult.images[0].url
                          : "nopicture.png"
                      }
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr />
                  <h4>{searchResult.genres.join(", ")}</h4>
                  <div className="media-tabs">
                    {[
                      ["albums", "Albums", albums, "Album"],
                      ["eps", "EPs", EPs, "EP"],
                      ["singles", "Singles", singles, "Single"],
                    ].map(([key, label, list, one]) => (
                      <button
                        key={key}
                        className={releaseTab === key ? "active" : ""}
                        onClick={() =>
                          setReleaseTab(releaseTab === key ? null : key)
                        }
                      >
                        {list
                          ? `${list.length} ${list.length === 1 ? one : label}`
                          : label}
                      </button>
                    ))}
                  </div>
                  {releaseTab &&
                    (() => {
                      const list = { albums, eps: EPs, singles }[releaseTab];
                      const label = {
                        albums: "Albums",
                        eps: "EPs",
                        singles: "Singles",
                      }[releaseTab];
                      return list?.length > 0 ? (
                        <ul style={{ display: "block" }}>
                          {list.map((release) => (
                            <li key={release.id}>
                              <a
                                href={release.external_urls.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {release.name}
                              </a>
                              <br />({release.release_date.substring(0, 4)})
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <h4>No {label}</h4>
                      );
                    })()}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://open.spotify.com/artist/${searchResult.id}`}
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

export default ArtistSearch;
