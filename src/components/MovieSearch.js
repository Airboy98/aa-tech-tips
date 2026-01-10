import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;
function MovieSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [rentProviders, setRentProviders] = useState(null);
  const [purchaseProviders, setPurchaseProviders] = useState(null);
  const [certification, setCertification] = useState(null);
  const [director, setDirector] = useState(null);
  const [actors, setActors] = useState([]);
  const [runtime, setRuntime] = useState(null);
  const [showActors, setShowActors] = useState(false);
  const [showWatchProviders, setShowWatchProviders] = useState(false);
  const [showRentProviders, setShowRentProviders] = useState(false);
  const [showPurchaseProviders, setShowPurchaseProviders] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  const searchMovie = (query) => {
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const movie = json.results[0];
          setSearchResult(movie);
          fetchWatchProviders(movie.id);
          fetchRentProviders(movie.id);
          fetchPurchaseProviders(movie.id);
          fetchCertification(movie.id);
          fetchDirector(movie.id);
          fetchActors(movie.id);
          fetchRuntime(movie.id);
          setFlippedCards({});
        } else {
          setSearchResult(null);
          setWatchProviders(null);
          setRentProviders(null);
          setPurchaseProviders(null);
          setCertification(null);
          setDirector(null);
          setActors(null);
          setRuntime(null);
          setFlippedCards({});
        }
      })
      .catch((error) => {
        console.error("Error searching for movie:", error);
        setSearchResult(null);
        setWatchProviders(null);
        setRentProviders(null);
        setPurchaseProviders(null);
        setCertification(null);
        setDirector(null);
        setActors(null);
        setRuntime(null);
        setFlippedCards({});
      });
  };

  const fetchWatchProviders = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
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

  const fetchRentProviders = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.US) {
          const usProviders = json.results.US;
          setRentProviders(usProviders.rent || []);
        } else {
          setRentProviders([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching rent providers:", error);
        setRentProviders([]);
      });
  };

  const fetchPurchaseProviders = (movieId) =>
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.US) {
          const usProviders = json.results.US;
          setPurchaseProviders(usProviders.buy || []);
        } else {
          setPurchaseProviders([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching purchase providers:", error);
        setPurchaseProviders([]);
      });

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

  const fetchDirector = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.crew) {
          const director = json.crew.find(
            (crewMember) => crewMember.job === "Director"
          );
          setDirector(director ? director.name : null);
        } else {
          setDirector(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching director:", error);
        setDirector(null);
      });
  };

  const fetchActors = async (movieId) => {
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      const json = await res.json();

      if (json.cast) {
        const topActors = json.cast
          .sort((a, b) => a.order - b.order)
          .slice(0, 6);

        // Fetch detailed info for each actor
        const actorsWithDetails = await Promise.all(
          topActors.map(async (actor) => {
            try {
              const detailRes = await fetch(
                `${BASE_URL}/person/${actor.id}?api_key=${API_KEY}`
              );
              const detailJson = await detailRes.json();

              const creditsRes = await fetch(
                `${BASE_URL}/person/${actor.id}/movie_credits?api_key=${API_KEY}`
              );
              const creditsJson = await creditsRes.json();

              // Get top 3 known for movies (by popularity/vote_count)
              const knownFor =
                creditsJson.cast
                  ?.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
                  .slice(0, 4)
                  .map((m) => m.title)
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

  const fetchRuntime = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.runtime) {
          setRuntime(json.runtime);
        } else {
          setRuntime(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching runtime:", error);
        setRuntime(null);
      });
  };

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
                      src={
                        searchResult.poster_path
                          ? `https://image.tmdb.org/t/p/w500${searchResult.poster_path}`
                          : "noposter.png"
                      }
                      alt={searchResult.title}
                    />
                  </a>
                  <h1>{searchResult.title}</h1>
                  <hr></hr>
                  {director && <h4>Directed by {director}</h4>}
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
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
                            flippedCards[index] ? "flipped" : ""
                          }`}
                          onClick={() => toggleFlip(index)}
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
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {certification && <h4>Rated {certification}</h4>}
                  {runtime && (
                    <h4>
                      {runtime >= 60 ? `${Math.floor(runtime / 60)}h ` : ""}
                      {runtime % 60}m
                    </h4>
                  )}
                  <h4>{searchResult.release_date}</h4>
                  <h4>
                    {searchResult.vote_average
                      ? `⭐ ${searchResult.vote_average.toFixed(1)} / 10 ⭐`
                      : "No Rating Available"}
                  </h4>
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowWatchProviders(!showWatchProviders)}
                  >
                    Streaming
                  </button>
                  {showWatchProviders && watchProviders && (
                    <div>
                      <br />
                      {watchProviders.flatrate &&
                      watchProviders.flatrate.length > 0 ? (
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
                  )}

                  <br />
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowRentProviders(!showRentProviders)}
                  >
                    Renting
                  </button>

                  {showRentProviders && rentProviders && (
                    <div>
                      <br />
                      {rentProviders.length > 0 ? (
                        rentProviders.map((provider) => (
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
                        ))
                      ) : (
                        <h4>Unavailable to Rent</h4>
                      )}
                    </div>
                  )}
                  <br />
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() =>
                      setShowPurchaseProviders(!showPurchaseProviders)
                    }
                  >
                    Purchase
                  </button>
                  {showPurchaseProviders && purchaseProviders && (
                    <div>
                      <br />
                      {purchaseProviders.length > 0 ? (
                        purchaseProviders.map((provider) => (
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
                        ))
                      ) : (
                        <h4>Unavailable to Purchase</h4>
                      )}
                    </div>
                  )}
                  <br />
                  <hr></hr>
                  <p>{searchResult.overview}</p>
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
