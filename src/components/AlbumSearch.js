import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function AlbumSearch() {
  const [query, setQuery] = useState("");
  const [dropdownResults, setDropdownResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [tracks, setTracks] = useState(null);
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
      .get(`${BASE_URL}search?q=${encodeURIComponent(query)}&type=album&limit=10`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const items = res.data.albums?.items || [];
        if (items.length === 0) {
          setDropdownResults([]);
          setShowDropdown(false);
          setSearchResult(null);
          setTracks(null);
        } else if (items.length === 1) {
          setDropdownResults([]);
          setShowDropdown(false);
          loadAlbum(items[0]);
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

  const handleSelect = (album) => {
    setShowDropdown(false);
    setDropdownResults([]);
    loadAlbum(album);
  };

  const loadAlbum = (album) => {
    setSearchResult(album);
    axios
      .get(`${BASE_URL}albums/${album.id}/tracks`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTracks(res.data?.items || null))
      .catch(() => setTracks(null));
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
                      placeholder="Enter album name..."
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
                    {dropdownResults.map((album) => (
                      <div
                        key={album.id}
                        className="search-dropdown-item"
                        onClick={() => handleSelect(album)}
                      >
                        <img
                          src={album.images?.length > 0 ? album.images[album.images.length - 1].url : "noposter.png"}
                          alt={album.name}
                        />
                        <div className="search-dropdown-info">
                          <span className="search-dropdown-name">{album.name}</span>
                          <span className="search-dropdown-year">
                            {album.artists?.[0]?.name}
                            {album.release_date ? ` · ${album.release_date.substring(0, 4)}` : ""}
                          </span>
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
                    href={`https://open.spotify.com/album/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={searchResult.images?.length > 0 ? searchResult.images[0].url : "noposter.png"}
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr />
                  <h4>{searchResult.artists[0].name}</h4>
                  <h4>{searchResult.release_date}</h4>
                  {tracks && (
                    <ol>
                      {tracks.map((track) => (
                        <li key={track.id}>
                          <a href={`https://open.spotify.com/track/${track.id}`} target="_blank" rel="noopener noreferrer">
                            {track.name}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                  <h5>
                    Data provided by{" "}
                    <a href={`https://open.spotify.com/album/${searchResult.id}`} target="_blank" rel="noopener noreferrer">
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

export default AlbumSearch;
