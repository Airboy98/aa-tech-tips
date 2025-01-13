import React, { useEffect, useState } from "react";

function MovieSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);

  const searchMovie = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b32ac76c26554d2985c4740b888a60d7&query=${query}&include_adult=false&watch_region=US`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const movie = json.results[0];
          setSearchResult(movie);
          fetchWatchProviders(movie.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for movie:", error);
        setSearchResult(null);
        setWatchProviders(null);
      });
  };

  const fetchWatchProviders = (movieId) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=b32ac76c26554d2985c4740b888a60d7`
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
      searchMovie(searchQuery);
    }
  }, [searchQuery]);
  console.log(searchResult);
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
                  <h1>{searchResult.title}</h1>
                  <h4>{searchResult.release_date}</h4>
                  {watchProviders && (
                    <div>
                      {watchProviders.flatrate && (
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

export default MovieSearch;
