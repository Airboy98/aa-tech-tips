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
  const [episodeRatings, setEpisodeRatings] = useState(null);
  const [episodeOverviews, setEpisodeOverviews] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const [seasonInfo, setSeasonInfo] = useState(null);
  const [creators, setCreators] = useState(null);
  const [actors, setActors] = useState([]);
  const [showActors, setShowActors] = useState(false);
  const [flippedActorCards, setFlippedActorCards] = useState({});

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
          setActors([]);
          setShowActors(false);
          setFlippedActorCards({});

          fetchWatchProviders(show.id);
          fetchCertification(show.id);
          fetchNumSeasons(show.id);
          fetchActors(show.id);
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
          setActors([]);
          setShowActors(false);
          setFlippedActorCards({});
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
        setActors([]);
        setShowActors(false);
        setFlippedActorCards({});
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
        setCreators(json.created_by || []);
      })
      .catch((error) => {
        console.error("Error fetching number of seasons:", error);
        setNumSeasons(null);
        setCreators(null);
      });
  };

  const fetchActors = async (showId) => {
    try {
      const res = await fetch(
        `${BASE_URL}/tv/${showId}/credits?api_key=${API_KEY}`
      );
      const json = await res.json();

      if (json.cast) {
        const topActors = json.cast.slice(0, 6);

        // Fetch detailed info for each actor
        const actorsWithDetails = await Promise.all(
          topActors.map(async (actor) => {
            try {
              const detailRes = await fetch(
                `${BASE_URL}/person/${actor.id}?api_key=${API_KEY}`
              );
              const detailJson = await detailRes.json();

              const creditsRes = await fetch(
                `${BASE_URL}/person/${actor.id}/combined_credits?api_key=${API_KEY}`
              );
              const creditsJson = await creditsRes.json();

              // Get top 3 known for (TV shows and movies)
              const knownFor =
                creditsJson.cast
                  ?.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
                  .slice(0, 4)
                  .map((m) => m.title || m.name)
                  .filter(Boolean) || [];

              return {
                ...actor,
                birthday: detailJson.birthday,
                deathday: detailJson.deathday,
                knownFor: knownFor,
              };
            } catch (error) {
              console.error(
                `Error fetching details for actor ${actor.id}:`,
                error
              );
              return { ...actor, birthday: null, knownFor: [] };
            }
          })
        );

        setActors(actorsWithDetails);
      } else {
        setActors([]);
      }
    } catch (error) {
      console.error("Error fetching actors:", error);
      setActors([]);
    }
  };

  const fetchEpisodeDetails = (showId, seasonNumber) => {
    fetch(`${BASE_URL}/tv/${showId}/season/${seasonNumber}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        const episodes = json.episodes || [];
        setEpisodeNames(episodes.map((ep) => ep.name));
        setEpisodeStills(episodes.map((ep) => ep.still_path));
        setEpisodeOverviews(episodes.map((ep) => ep.overview));
        setEpisodeRatings(episodes.map((ep) => ep.vote_average));
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
        setEpisodeRatings(null);
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

  const toggleActorFlip = (index) => {
    setFlippedActorCards((prev) => ({
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
                  {creators && creators.length > 0 && (
                    <div className="creators">
                      <h4>
                        Created by{" "}
                        {creators.map((creator) => creator.name).join(", ")}
                      </h4>
                    </div>
                  )}

                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                      // marginBottom: "10px",
                    }}
                    onClick={() => setShowActors(!showActors)}
                  >
                    Top Actors
                  </button>

                  {showActors && actors.length > 0 && (
                    <div className="episode-cards">
                      {actors.map((actor, index) => (
                        <div
                          key={actor.id}
                          className={`flip-card ${
                            flippedActorCards[index] ? "flipped" : ""
                          }`}
                          onClick={() => toggleActorFlip(index)}
                        >
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              {actor.profile_path ? (
                                <img
                                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                  alt={actor.name}
                                />
                              ) : (
                                <div className="no-image">
                                  No Profile Picture
                                </div>
                              )}
                              <div className="episode-title">
                                {actor.name}
                                <br />
                                as
                                <br />
                                {actor.character}
                              </div>
                            </div>
                            <div className="flip-card-back">
                              <div style={{ padding: "0px", fontSize: "14px" }}>
                                <strong>Age: </strong>
                                {actor.deathday
                                  ? `${Math.floor(
                                      (new Date(actor.deathday) -
                                        new Date(actor.birthday)) /
                                        (1000 * 60 * 60 * 24 * 365.25)
                                    )} (d)`
                                  : actor.birthday
                                  ? `${Math.floor(
                                      (new Date() - new Date(actor.birthday)) /
                                        (1000 * 60 * 60 * 24 * 365.25)
                                    )}`
                                  : "unknown"}
                                <br />
                                <br />
                                {actor.knownFor &&
                                  actor.knownFor.length > 0 && (
                                    <>
                                      <strong>Known for:</strong>

                                      <ul
                                        style={{
                                          textAlign: "left",
                                          paddingLeft: "0px",
                                          margin: "0px 0",
                                        }}
                                      >
                                        {actor.knownFor.map((title, i) => (
                                          <li key={i}>{title}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                {!actor.birthday &&
                                  actor.knownFor.length === 0 && (
                                    <p>No additional info available</p>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {certification ? (
                    <h4>Rated {certification}</h4>
                  ) : (
                    <h4>Unrated</h4>
                  )}
                  <h4>
                    {searchResult.vote_average
                      ? `⭐ ${searchResult.vote_average.toFixed(1)} / 10 ⭐`
                      : "No Rating Available"}
                  </h4>
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
                              {episodeRatings?.[index] === 0 ? (
                                <div
                                  style={{
                                    fontWeight: "bold",
                                    marginBottom: "8px",
                                  }}
                                ></div>
                              ) : (
                                <div
                                  style={{
                                    fontWeight: "bold",
                                    marginBottom: "8px",
                                  }}
                                >
                                  ⭐{" "}
                                  {` ${episodeRatings?.[index]?.toFixed(
                                    1
                                  )} / 10 ⭐` || ""}
                                </div>
                              )}
                              {episodeOverviews?.[index] ||
                                "No description available."}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <br />
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
                  <br />
                  <hr></hr>
                  <p>{searchResult.overview}</p>
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
