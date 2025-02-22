import React, { useEffect, useState } from "react";
const API_KEY = "b32ac76c26554d2985c4740b888a60d7";
const BASE_URL = "https://api.themoviedb.org/3";

function ShowSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [certification, setCertification] = useState(null);

  const searchShow = (query) => {
    fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const show = json.results[0];
          setSearchResult(show);
          fetchWatchProviders(show.id);
          fetchCertification(show.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
          setCertification(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for show:", error);
        setSearchResult(null);
        setWatchProviders(null);
        setCertification(null);
      });
  };

  const fetchWatchProviders = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}/watch/providers?api_key=${API_KEY}`)
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

  const fetchCertification = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}/content_ratings?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          const usRating = json.results.find(
            (rating) => rating.iso_3166_1 === "US"
          );
          setCertification(usRating ? usRating.rating : null);
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
      searchShow(searchQuery);
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
                    href={`https://www.themoviedb.org/tv/${searchResult.id}`}
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
                  <h1>{searchResult.name}</h1>
                  <hr></hr>
                  {certification && <h4>Rated {certification}</h4>}
                  <h4>{searchResult.first_air_date}</h4>

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
                      href={`https://www.themoviedb.org/tv/${searchResult.id}`}
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

export default ShowSearch;
