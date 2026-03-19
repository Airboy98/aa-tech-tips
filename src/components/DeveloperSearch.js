import React, { useEffect, useState } from "react";

function DeveloperSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [cardSide, setCardSide] = useState("right");

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
    // category 1 = official site
    const official = websites.find((w) => w.category === 1);
    return official ? official.url : websites[0].url;
  };

  const searchDeveloper = (query) => {
    fetch(`/api/igdb-developer?query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          setSearchResult(json.results[0]);
        } else {
          setSearchResult(null);
        }
      })
      .catch((error) => {
        console.error("Error searching IGDB:", error);
        setSearchResult(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchDeveloper(searchQuery);
    }
  }, [searchQuery]);

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
  console.log("First game sample:", sortedGames[0]);

  return (
    <div>
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  {searchResult?.logo?.url ? (
                    <img
                      style={{ width: "200px", objectFit: "contain" }}
                      src={searchResult.logo.url}
                      alt={searchResult.name}
                    />
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
                            }}
                            onMouseEnter={(e) => {
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              setCardSide(
                                rect.right + 176 > window.innerWidth
                                  ? "left"
                                  : "right",
                              );
                              setHoveredGame(game.id ?? i);
                            }}
                            onMouseLeave={() => setHoveredGame(null)}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              const touch = e.touches[0];
                              setCardSide(
                                touch.clientX > window.innerWidth / 2
                                  ? "left"
                                  : "right",
                              );
                              setHoveredGame(
                                hoveredGame === (game.id ?? i)
                                  ? null
                                  : (game.id ?? i),
                              );
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
                                  hoveredGame === (game.id ?? i)
                                    ? "scale(1.15)"
                                    : "scale(1)",
                                boxShadow:
                                  hoveredGame === (game.id ?? i)
                                    ? "0 8px 20px rgba(0,0,0,0.5)"
                                    : "none",
                              }}
                              src={`https:${game.cover.url.replace(/t_[^/]+/, "t_cover_big")}`}
                              alt={game.name}
                            />
                            {hoveredGame === (game.id ?? i) && (
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  ...(cardSide === "right"
                                    ? { left: "calc(100% + 8px)" }
                                    : { right: "calc(100% + 8px)" }),
                                  backgroundColor: "#0f3455",
                                  border: "1px solid #3c709f",
                                  borderRadius: "8px",
                                  padding: "10px",
                                  width: "160px",
                                  zIndex: 10,
                                  animation: "fadeIn 0.15s ease",
                                }}
                              >
                                <p
                                  style={{
                                    margin: "0 0 4px",
                                    fontWeight: "bold",
                                    fontSize: "12px",
                                    color: "#fff",
                                  }}
                                >
                                  {game.name}
                                </p>
                                {game.first_release_date && (
                                  <p
                                    style={{
                                      margin: "0 0 4px",
                                      fontSize: "11px",
                                      color: "#aac4e0",
                                    }}
                                  >
                                    {new Date(
                                      game.first_release_date * 1000,
                                    ).getFullYear()}
                                  </p>
                                )}
                                {game.rating && (
                                  <p
                                    style={{
                                      margin: "0 0 4px",
                                      fontSize: "11px",
                                      color: "#aac4e0",
                                    }}
                                  >
                                    ⭐ {game.rating.toFixed(1)} / 100 ⭐
                                  </p>
                                )}
                                {game.summary && (
                                  <p
                                    style={{
                                      margin: "0",
                                      fontSize: "10px",
                                      color: "#aac4e0",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 6,
                                      WebkitBoxOrient: "vertical",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {game.summary}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        ) : null,
                      )}
                    </div>
                  )}

                  <br />
                  <h5>
                    Data provided by{" "}
                    <a
                      href={officialUrl ?? "https://www.igdb.com"}
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

export default DeveloperSearch;
