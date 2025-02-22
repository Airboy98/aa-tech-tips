import React, { useEffect, useState } from "react";
const API_KEY = "b32ac76c26554d2985c4740b888a60d7";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [certification, setCertification] = useState(null);

  const searchMovie = (query) => {
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const movie = json.results[0];
          setSearchResult(movie);
          fetchWatchProviders(movie.id);
          fetchCertification(movie.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
          setCertification(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for movie:", error);
        setSearchResult(null);
        setWatchProviders(null);
        setCertification(null);
      });
  };

  const fetchWatchProviders = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
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

  const fetchCertification = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/release_dates?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          const usCert = json.results.find(
            (entry) => entry.iso_3166_1 === "US"
          );
          if (usCert && usCert.release_dates) {
            const cert = usCert.release_dates.find(
              (date) => date.certification
            );
            setCertification(cert ? cert.certification : null);
          } else {
            setCertification(null);
          }
        } else {
          setCertification(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching certification:", error);
        setCertification(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchMovie(searchQuery);
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
                    href={`https://www.themoviedb.org/movie/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                      src={`https://image.tmdb.org/t/p/w500${searchResult.poster_path}`}
                      alt={searchResult.title}
                    />
                  </a>
                  <h1>{searchResult.title}</h1>
                  <hr></hr>
                  {certification && <h4>Rated {certification}</h4>}
                  <h4>{searchResult.release_date}</h4>

                  {watchProviders && (
                    <div>
                      {watchProviders && watchProviders.flatrate ? (
                        <div>
                          {watchProviders.flatrate.map((provider) => (
                            <img
                              style={{
                                width: "45px",
                                height: "45px",
                              }}
                              key={provider.provider_id}
                              src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
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
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://www.themoviedb.org/movie/${searchResult.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TMDB
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

export default MovieSearch;
