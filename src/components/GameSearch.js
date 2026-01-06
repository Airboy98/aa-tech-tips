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

  const getDevelopers = (game) => {
    if (!game.involved_companies) return "Unknown Developer";

    const devs = game.involved_companies
      .filter((c) => c.developer && c.company?.name)
      .map((c) => c.company.name);

    return devs.length ? devs.join(", ") : "Unknown Developer";
  };

  const getPlatforms = (game) => {
    if (!game.platforms || game.platforms.length === 0) return "TBA";
    return game.platforms.map((p) => p.name).join(", ");
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
                      ? `Rating: ${searchResult.rating.toFixed(1)} / 100`
                      : "Rating TBD"}
                  </h4>

                  <h4>{getPlatforms(searchResult)}</h4>

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
