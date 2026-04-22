import React, { useEffect, useRef, useState } from "react";

function GameSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  const formatDate = (unix) => {
    if (!unix) return "Coming Soon";
    return new Date(unix * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getYear = (unix) => {
    if (!unix) return null;
    return new Date(unix * 1000).getFullYear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetch(`/api/igdb-search?query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          if (json.results.length === 1) {
            setSelectedGame(json.results[0]);
            setSearchResults([]);
            setShowDropdown(false);
          } else {
            setSearchResults(json.results);
            setSelectedGame(null);
            setShowDropdown(true);
          }
        } else {
          setSearchResults([]);
          setSelectedGame(null);
          setShowDropdown(false);
        }
      })
      .catch((err) => {
        console.error("Error searching IGDB:", err);
        setSearchResults([]);
        setSelectedGame(null);
        setShowDropdown(false);
      });
  };

  const handleSelect = (game) => {
    setSelectedGame(game);
    setShowDropdown(false);
    setSearchResults([]);
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const platformLocalImages = {
    "PC (Microsoft Windows)": "images/logos/windows.png",
    Mac: "images/logos/apple.png",
    iOS: "images/consoles/ios.png",
    Android: "images/consoles/android.png",
    Linux: "images/logos/linux.png",
    "PlayStation 3": "images/consoles/PS3-square.png",
    "PlayStation 4": "images/consoles/PS4-square.png",
    "PlayStation 5": "images/consoles/PS5-square.png",
    "PlayStation Vita": "images/consoles/psvita.jpg",
    "Xbox One": "images/consoles/XboxOne.png",
    "Xbox Series X|S": "images/consoles/XboxSeries.png",
    "Wii U": "images/consoles/wiiu.png",
    "Nintendo Switch": "images/consoles/NintendoSwitch-square.jpg",
    "Nintendo Switch 2": "images/consoles/NintendoSwitch2.png",
    "Nintendo 3DS": "images/consoles/3ds.png",
    "New Nintendo 3DS": "images/consoles/3ds.png",
    "Game Boy": "images/consoles/gameboy.jpg",
    "Game Boy Advance": "images/consoles/gba.png",
  };

  const getPlatformIcon = (p) => {
    if (platformLocalImages[p.name]) return platformLocalImages[p.name];
    if (p.platform_logo?.url)
      return `https:${p.platform_logo.url.replace(/t_[^/]+/, "t_logo_med")}`;
    return null;
  };

  const getDevelopers = (game) => {
    if (!game.involved_companies) return "Unknown Developer";
    const devs = game.involved_companies
      .filter((c) => c.developer && c.company?.name)
      .map((c) => c.company.name);
    return devs.length ? devs.join(", ") : "Unknown Developer";
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
                      placeholder="Enter game name..."
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
                  <div className="game-search-dropdown">
                    {searchResults.map((game, i) => (
                      <div
                        key={game.id ?? i}
                        className="game-search-dropdown-item"
                        onClick={() => handleSelect(game)}
                      >
                        {game.cover ? (
                          <img
                            src={game.cover.url.replace(
                              /t_[^/]+/,
                              "t_cover_small",
                            )}
                            alt={game.name}
                          />
                        ) : (
                          <div className="game-search-no-cover" />
                        )}
                        <div className="game-search-dropdown-info">
                          <span className="game-search-dropdown-name">
                            {game.name}
                          </span>
                          {getYear(game.first_release_date) && (
                            <span className="game-search-dropdown-year">
                              {getYear(game.first_release_date)}
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

      {selectedGame && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href={selectedGame.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedGame.cover ? (
                      <img
                        style={{ width: "200px", objectFit: "cover" }}
                        src={selectedGame.cover.url}
                        alt={selectedGame.name}
                      />
                    ) : (
                      <div
                        style={{
                          width: "200px",
                          height: "300px",
                          background: "#333",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        No Image
                      </div>
                    )}
                  </a>

                  <h1>{selectedGame.name}</h1>
                  <hr />
                  <h4>Developed by {getDevelopers(selectedGame)}</h4>
                  <h4>{formatDate(selectedGame.first_release_date)}</h4>
                  <h4>
                    {selectedGame.rating
                      ? `⭐ ${selectedGame.rating.toFixed(1)} / 100 ⭐`
                      : "Rating TBD"}
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    {selectedGame.platforms?.length > 0 ? (
                      selectedGame.platforms.map((p, i) => {
                        const icon = getPlatformIcon(p);
                        return icon ? (
                          <div
                            key={p.id ?? i}
                            title={p.name}
                            style={{
                              width: "45px",
                              height: "45px",
                              backgroundColor: "#fff",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "4px",
                            }}
                          >
                            <img
                              src={icon}
                              alt={p.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        ) : null;
                      })
                    ) : (
                      <h4>TBA</h4>
                    )}
                  </div>

                  <hr />
                  {selectedGame.summary && <p>{selectedGame.summary}</p>}

                  <h5>
                    Data provided by{" "}
                    <a
                      href="https://www.igdb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IGDB
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

export default GameSearch;
