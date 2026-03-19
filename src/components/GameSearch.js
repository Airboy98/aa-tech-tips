import React, { useEffect, useState } from "react";

function GameSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);

  const formatDate = (unix) => {
    if (!unix) return "Coming Soon";
    return new Date(unix * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const searchGame = (query) => {
    fetch(`/api/igdb-search?query=${encodeURIComponent(query)}`)
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

  const platformLocalImages = {
    "PC (Microsoft Windows)": "images/logos/windows.png",
    "Mac": "images/logos/apple.png",
    "iOS": "images/logos/apple.png",
    "Linux": "images/logos/linux.png",
    "Nintendo 3DS": "images/consoles/3ds.png",
    "New Nintendo 3DS": "images/consoles/3ds.png",
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

  useEffect(() => {
    if (searchQuery) {
      searchGame(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href={searchResult.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {searchResult.cover ? (
                      <img
                        style={{ width: "200px", objectFit: "cover" }}
                        src={searchResult.cover.url}
                        alt={searchResult.name}
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

                  <h1>{searchResult.name}</h1>
                  <hr />

                  <h4>Developed by {getDevelopers(searchResult)}</h4>

                  <h4>{formatDate(searchResult.first_release_date)}</h4>

                  <h4>
                    {searchResult.rating
                      ? `⭐ ${searchResult.rating.toFixed(1)} / 100 ⭐`
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
                    {searchResult.platforms &&
                    searchResult.platforms.length > 0 ? (
                      searchResult.platforms.map((p, i) => {
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
                              style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                          </div>
                        ) : null;
                      })
                    ) : (
                      <h4>TBA</h4>
                    )}
                  </div>

                  <hr></hr>
                  {searchResult.summary && <p>{searchResult.summary}</p>}

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
