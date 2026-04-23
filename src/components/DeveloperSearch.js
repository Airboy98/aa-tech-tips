import React, { useEffect, useRef, useState } from "react";

function DeveloperSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [tappedGame, setTappedGame] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const isTouching = useRef(false);
  const wrapperRef = useRef(null);

  const formatDate = (unix) => {
    if (!unix) return "Unknown";
    return new Date(unix * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getOfficialWebsite = (websites) => {
    if (!websites || websites.length === 0) return null;
    const official = websites.find((w) => w.category === 1);
    return official ? official.url : websites[0].url;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetch(`/api/igdb-developer?query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          if (json.results.length === 1) {
            fetchDeveloperById(json.results[0].id);
            setSearchResults([]);
            setShowDropdown(false);
          } else {
            setSearchResults(json.results);
            setSearchResult(null);
            setShowDropdown(true);
          }
        } else {
          setSearchResults([]);
          setSearchResult(null);
          setShowDropdown(false);
        }
      })
      .catch((err) => {
        console.error("Error searching IGDB:", err);
        setSearchResults([]);
        setSearchResult(null);
        setShowDropdown(false);
      });
  };

  const fetchDeveloperById = (id) => {
    fetch(`/api/igdb-developer?id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          setSearchResult(json.results[0]);
        } else {
          setSearchResult(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching developer:", err);
        setSearchResult(null);
      });
  };

  const handleSelect = (company) => {
    fetchDeveloperById(company.id);
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

  useEffect(() => {
    const lock = selectedGame ? "hidden" : "";
    document.documentElement.style.overflow = lock;
    document.body.style.overflow = lock;
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [selectedGame]);

  const officialUrl = searchResult
    ? getOfficialWebsite(searchResult.websites)
    : null;

  const developedGames =
    searchResult?.developed?.filter((g) => g.first_release_date) ?? [];
  const publishedGames =
    searchResult?.published?.filter((g) => g.first_release_date) ?? [];
  const games = developedGames.length > 0 ? developedGames : publishedGames;
  const gamesLabel =
    developedGames.length > 0 ? "Games Developed" : "Games Published";
  const sortedGames = [...games].sort(
    (a, b) => a.first_release_date - b.first_release_date,
  );

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
                      placeholder="Enter developer name..."
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
                    {searchResults.map((company, i) => (
                      <div
                        key={company.id ?? i}
                        className="game-search-dropdown-item"
                        onClick={() => handleSelect(company)}
                      >
                        {company.logo ? (
                          <img
                            src={company.logo.url}
                            alt={company.name}
                            style={{ background: "#fff", borderRadius: "4px" }}
                          />
                        ) : (
                          <div className="game-search-no-cover" />
                        )}
                        <div className="game-search-dropdown-info">
                          <span className="game-search-dropdown-name">
                            {company.name}
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
                  {searchResult?.logo?.url ? (
                    officialUrl ? (
                      <a
                        href={officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "200px", objectFit: "contain" }}
                          src={searchResult.logo.url}
                          alt={searchResult.name}
                        />
                      </a>
                    ) : (
                      <img
                        style={{ width: "200px", objectFit: "contain" }}
                        src={searchResult.logo.url}
                        alt={searchResult.name}
                      />
                    )
                  ) : null}

                  <h1>{searchResult.name}</h1>

                  <h4>Founded: {formatDate(searchResult.start_date)}</h4>
                  <hr />
                  {searchResult.description && (
                    <p>{searchResult.description}</p>
                  )}

                  <hr />
                  <h4>{gamesLabel}</h4>
                  <h4>{sortedGames.length} Credits</h4>

                  {sortedGames.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center",
                      }}
                    >
                      {sortedGames.map((game, i) =>
                        game.cover?.url ? (
                          <div
                            key={game.id ?? i}
                            style={{
                              position: "relative",
                              display: "inline-block",
                              cursor: "pointer",
                              zIndex:
                                hoveredGame === (game.id ?? i) ||
                                tappedGame === (game.id ?? i)
                                  ? 1
                                  : 0,
                            }}
                            onMouseEnter={() => setHoveredGame(game.id ?? i)}
                            onMouseLeave={() => setHoveredGame(null)}
                            onTouchStart={() => {
                              isTouching.current = true;
                            }}
                            onClick={() => {
                              const id = game.id ?? i;
                              if (isTouching.current) {
                                isTouching.current = false;
                                if (tappedGame === id) {
                                  setTappedGame(null);
                                  setSelectedGame(game);
                                } else {
                                  setTappedGame(id);
                                }
                              } else {
                                setSelectedGame(game);
                              }
                            }}
                          >
                            <img
                              style={{
                                width: "60px",
                                height: "90px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                display: "block",
                                transition:
                                  "transform 0.2s ease, box-shadow 0.2s ease",
                                transform:
                                  hoveredGame === (game.id ?? i) ||
                                  tappedGame === (game.id ?? i)
                                    ? "scale(1.5)"
                                    : "scale(1)",
                                boxShadow:
                                  hoveredGame === (game.id ?? i) ||
                                  tappedGame === (game.id ?? i)
                                    ? "0 0 0 2px #3c709f, 0 8px 20px rgba(0,0,0,0.5)"
                                    : "none",
                              }}
                              src={`https:${game.cover.url.replace(/t_[^/]+/, "t_cover_big")}`}
                              alt={game.name}
                            />
                          </div>
                        ) : null,
                      )}
                    </div>
                  )}

                  <br />
                  <h5>
                    Data provided by{" "}
                    <a
                      href={
                        searchResult.slug
                          ? `https://www.igdb.com/companies/${searchResult.slug}`
                          : "https://www.igdb.com"
                      }
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
      {selectedGame && (
        <div
          onClick={() => setSelectedGame(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#0f3455",
              border: "1px solid #3c709f",
              borderRadius: "12px",
              width: "280px",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              zIndex: 100,
              boxShadow: "0 24px 64px rgba(0,0,0,0.75)",
              animation: "fadeIn 0.15s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 10px 0",
                flexShrink: 0,
              }}
            >
              <button
                onClick={() => setSelectedGame(null)}
                style={{
                  background: "#1a4a72",
                  border: "1px solid #3c709f",
                  borderRadius: "50%",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div
              style={{
                overflowY: "auto",
                padding: "10px 20px 20px",
                textAlign: "center",
              }}
            >
              <img
                src={`https:${selectedGame.cover.url.replace(/t_[^/]+/, "t_cover_big")}`}
                alt={selectedGame.name}
                style={{
                  width: "180px",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                  margin: "0 auto 14px",
                }}
              />
              <p
                style={{
                  margin: "0 0 6px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#fff",
                }}
              >
                {selectedGame.name}
              </p>
              {selectedGame.first_release_date && (
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: "13px",
                    color: "#aac4e0",
                  }}
                >
                  {new Date(
                    selectedGame.first_release_date * 1000,
                  ).getFullYear()}
                </p>
              )}
              {selectedGame.rating && (
                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: "13px",
                    color: "#aac4e0",
                  }}
                >
                  ⭐ {selectedGame.rating.toFixed(1)} / 100 ⭐
                </p>
              )}
              {selectedGame.summary && (
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    color: "#aac4e0",
                    textAlign: "left",
                    lineHeight: "1.5",
                  }}
                >
                  {selectedGame.summary}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeveloperSearch;
