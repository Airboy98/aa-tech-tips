import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function ShowSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [certification, setCertification] = useState(null);
  const [numSeasons, setNumSeasons] = useState(null);
  const [episodeNames, setEpisodeNames] = useState(null);
  const [episodeStills, setEpisodeStills] = useState(null);
  const [showSeasons, setShowSeasons] = useState(false);

  const searchShow = (query) => {
    fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const show = json.results[0];
          setSearchResult(show);
          fetchWatchProviders(show.id);
          fetchCertification(show.id);
          fetchNumSeasons(show.id);
          fetchEpisodeDetails(show.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
          setCertification(null);
          setNumSeasons(null);
          setEpisodeNames(null);
          setEpisodeStills(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for show:", error);
        setSearchResult(null);
        setWatchProviders(null);
        setCertification(null);
        setNumSeasons(null);
        setEpisodeNames(null);
        setEpisodeStills(null);
      });
  };

  const fetchWatchProviders = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.US) {
          setWatchProviders(json.results.US);
        } else {
          setWatchProviders({ flatrate: [] });
        }
      })
      .catch((error) => {
        console.error("Error fetching watch providers:", error);
        setWatchProviders({ flatrate: [] });
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

  const fetchNumSeasons = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setNumSeasons(json.number_of_seasons);
      })
      .catch((error) => {
        console.error("Error fetching number of seasons:", error);
        setNumSeasons(null);
      });
  };

  const fetchEpisodeDetails = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}/season/1?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        const episodeNames = json.episodes
          ? json.episodes.map((episode) => episode.name)
          : [];
        const episodeStills = json.episodes
          ? json.episodes.map((episode) => episode.still_path)
          : [];
        setEpisodeNames(episodeNames);
        setEpisodeStills(episodeStills);
      })
      .catch((error) => {
        console.error("Error fetching episode names:", error);
        setEpisodeNames(null);
        setEpisodeStills(null);
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
                      src={
                        searchResult.poster_path
                          ? `https://image.tmdb.org/t/p/w500${searchResult.poster_path}`
                          : "noposter.png"
                      }
                      alt={searchResult.title}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr></hr>
                  {certification && <h4>Rated {certification}</h4>}
                  {numSeasons === 1 ? "1 Season" : `${numSeasons} Seasons`}
                  <br></br>
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowSeasons(!showSeasons)}
                  >
                    Season 1
                  </button>
                  {showSeasons && (
                    <div
                      className="episode-cards"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "5px",
                      }}
                    >
                      {episodeNames?.map((name, index) => (
                        <Card
                          key={index}
                          title={
                            <span style={{ fontSize: "10px" }}>
                              <b>{index + 1}</b> - {name}
                            </span>
                          }
                          header={
                            <img
                              src={`https://image.tmdb.org/t/p/w500${episodeStills[index]}`}
                              alt={name}
                              style={{
                                width: "100%",
                                height: "80px",
                                objectFit: "cover",
                              }}
                            />
                          }
                          style={{ marginBottom: "10px" }}
                        />
                      ))}
                    </div>
                  )}
                  <h4>{searchResult.first_air_date}</h4>

                  <div>
                    {watchProviders?.flatrate?.length > 0 ? (
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
                      <h4>Unavailable to Stream</h4>
                    )}
                  </div>
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
