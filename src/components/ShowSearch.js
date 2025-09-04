import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
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
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [episodeOverviews, setEpisodeOverviews] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const [seasonInfo, setSeasonInfo] = useState(null);

  const searchShow = (query) => {
    fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const show = json.results[0];

          setSearchResult(show);
          setWatchProviders(null);
          setCertification(null);
          setNumSeasons(null);
          setEpisodeNames(null);
          setEpisodeStills(null);
          setEpisodeOverviews(null);
          setFlippedCards({});
          setSelectedSeason(null);
          setShowSeasons(false);
          setSeasonInfo(null);

          fetchWatchProviders(show.id);
          fetchCertification(show.id);
          fetchNumSeasons(show.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
          setCertification(null);
          setNumSeasons(null);
          setEpisodeNames(null);
          setEpisodeStills(null);
          setEpisodeOverviews(null);
          setFlippedCards({});
          setSelectedSeason(null);
          setShowSeasons(false);
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

  const fetchEpisodeDetails = (showId, seasonNumber) => {
    fetch(`${BASE_URL}/tv/${showId}/season/${seasonNumber}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        const episodes = json.episodes || [];
        setEpisodeNames(episodes.map((ep) => ep.name));
        setEpisodeStills(episodes.map((ep) => ep.still_path));
        setEpisodeOverviews(episodes.map((ep) => ep.overview));
        setFlippedCards({});

        setSeasonInfo({
          air_date: json.air_date,
        });
      })
      .catch((error) => {
        console.error("Error fetching episode names:", error);
        setEpisodeNames(null);
        setEpisodeStills(null);
        setEpisodeOverviews(null);
        setSeasonInfo(null);
      });
  };

  const seasonOptions = Array.from({ length: numSeasons }, (_, i) => ({
    label: `Season ${i + 1}`,
    value: i + 1,
  }));

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
                  {certification ? (
                    <h4>Rated {certification}</h4>
                  ) : (
                    <h4>Unrated</h4>
                  )}
                  {numSeasons === 1 ? "1 Season" : `${numSeasons} Seasons`}
                  <br></br>
                  <div style={{ margin: "10px 0" }}>
                    <Dropdown
                      value={selectedSeason}
                      options={seasonOptions}
                      onChange={(e) => {
                        setSelectedSeason(e.value);
                        if (e.value) {
                          fetchEpisodeDetails(searchResult.id, e.value);
                          setShowSeasons(true);
                        } else {
                          setShowSeasons(false);
                          setEpisodeNames(null);
                          setEpisodeStills(null);
                          setEpisodeOverviews(null);
                          setSeasonInfo(null);
                        }
                      }}
                      placeholder="Select a season"
                      style={{ minWidth: "200px", margin: "10px 0" }}
                      showClear
                    />
                  </div>
                  {seasonInfo && (
                    <div className="season-info">
                      {seasonInfo.air_date ? (
                        <h4>{seasonInfo.air_date}</h4>
                      ) : (
                        <h4>Release date TBA</h4>
                      )}
                    </div>
                  )}
                  {showSeasons && (
                    <div className="episode-cards">
                      {episodeNames?.map((name, index) => (
                        <div
                          key={index}
                          className={`flip-card ${
                            flippedCards[index] ? "flipped" : ""
                          }`}
                          onClick={() => toggleFlip(index)}
                        >
                          <div className="flip-card-inner">
                            {/* Front */}
                            <div className="flip-card-front">
                              {episodeStills?.[index] ? (
                                <img
                                  src={`https://image.tmdb.org/t/p/w500${episodeStills[index]}`}
                                  alt={name}
                                />
                              ) : (
                                <div className="no-image">No Image</div>
                              )}
                              <div className="episode-title">
                                {index + 1}
                                <br></br> {name}
                              </div>
                            </div>

                            {/* Back */}
                            <div className="flip-card-back">
                              {episodeOverviews?.[index] ||
                                "No description available."}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <br />
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
                  <hr></hr>
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
