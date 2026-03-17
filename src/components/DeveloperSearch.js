import React, { useEffect, useState } from "react";

function DeveloperSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);

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
                    <div>
                      {sortedGames.map((game, i) =>
                        game.cover?.url ? (
                          <a
                            key={game.id ?? i}
                            href={game.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              style={{ width: "60px", height: "90px" }}
                              src={`https:${game.cover.url.replace(/t_[^/]+/, "t_cover_big")}`}
                              alt={game.name}
                              title={game.name}
                            />
                          </a>
                        ) : (
                          <a
                            key={game.id ?? i}
                            href={game.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={game.name}
                            style={{ marginRight: "8px", fontSize: "12px" }}
                          >
                            {game.name}
                          </a>
                        ),
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
