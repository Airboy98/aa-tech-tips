import React, { useEffect, useState } from "react";

function GameSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [platforms, setPlatforms] = useState(null);
  const [developers, setDevelopers] = useState(null);
  const [publishers, setPublishers] = useState(null);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const searchGame = (query) => {
    fetch(`/api/giantbomb${query ? `?query=${encodeURIComponent(query)}` : ""}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const game = json.results[0];
          setSearchResult(game);
        } else {
          setSearchResult(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for game:", error);
        setSearchResult(null);
      });
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
                    href={`${searchResult.site_detail_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                      src={`${searchResult.image.super_url}`}
                      alt={searchResult.name}
                    />
                  </a>

                  <h1>{searchResult.name}</h1>
                  <hr />

                  {searchResult.original_game_rating ? (
                    <h4>
                      Rated{" "}
                      {searchResult.original_game_rating
                        .find((rating) => rating.name.startsWith("ESRB:"))
                        ?.name.replace("ESRB: ", "") || "Not rated"}
                    </h4>
                  ) : (
                    <h4>Rating TBD</h4>
                  )}

                  <h4>
                    {searchResult.original_release_date
                      ? searchResult.original_release_date
                      : "Coming Soon"}
                  </h4>
                  {stripHtml(searchResult.deck)}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`${searchResult.site_detail_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Giant Bomb
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
