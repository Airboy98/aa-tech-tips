import React, { useEffect, useState } from "react";

function ShowSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);

  const searchShow = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=b32ac76c26554d2985c4740b888a60d7&query=${query}&include_adult=false&watch_region=US`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const show = json.results[0];
          setSearchResult(show);
          fetchWatchProviders(show.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for show:", error);
        setSearchResult(null);
        setWatchProviders(null);
      });
  };

  const fetchWatchProviders = (showId) => {
    fetch(
      `https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=b32ac76c26554d2985c4740b888a60d7`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.US) {
          setWatchProviders(json.results.US);
        } else {
          setWatchProviders(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching watch providers:", error);
        setWatchProviders(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchShow(searchQuery);
    }
  }, [searchQuery]);
  // console.log(searchResult);
  return (
    <div>
      {searchResult && (
        <div className="tech">
          <table style={{ margin: "0 auto", width: "230px" }}>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <img
                    style={{
                      width: "200px",
                      height: "300px",
                    }}
                    src={`https://image.tmdb.org/t/p/w500${searchResult.poster_path}`}
                    alt={searchResult.title}
                  />
                  <h1>{searchResult.name}</h1>
                  <h4>{searchResult.first_air_date}</h4>
                  {watchProviders && (
                    <div>
                      {watchProviders && watchProviders.flatrate ? (
                        <div>
                          {watchProviders.flatrate.map((provider) => (
                            <img
                              key={provider.provider_id}
                              src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                              alt={provider.provider_name}
                              title={provider.provider_name}
                            />
                          ))}
                        </div>
                      ) : (
                        <h5>Streaming Unavailable</h5>
                      )}
                    </div>
                  )}
                  <br />
                  {searchResult.overview}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ShowSearch;
