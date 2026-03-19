import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function DirectorSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [tvCredits, setTvCredits] = useState(null);
  const [hoveredCredit, setHoveredCredit] = useState(null);
  const [cardSide, setCardSide] = useState("right");

  const handleMouseEnter = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardSide(rect.right + 176 > window.innerWidth ? "left" : "right");
    setHoveredCredit(id);
  };

  const handleTouchStart = (e, id) => {
    e.preventDefault();
    const touch = e.touches[0];
    setCardSide(touch.clientX > window.innerWidth / 2 ? "left" : "right");
    setHoveredCredit(hoveredCredit === id ? null : id);
  };

  const InfoCard = ({ title, year, rating, overview }) => (
    <div
      style={{
        position: "absolute",
        top: 0,
        ...(cardSide === "right"
          ? { left: "calc(100% + 8px)" }
          : { right: "calc(100% + 8px)" }),
        backgroundColor: "#0f3455",
        border: "1px solid #3c709f",
        borderRadius: "8px",
        padding: "10px",
        width: "160px",
        zIndex: 10,
        animation: "fadeIn 0.15s ease",
      }}
    >
      <p
        style={{
          margin: "0 0 4px",
          fontWeight: "bold",
          fontSize: "12px",
          color: "#fff",
        }}
      >
        {title}
      </p>
      {year && (
        <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#aac4e0" }}>
          {year}
        </p>
      )}
      {rating > 0 && (
        <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#aac4e0" }}>
          ⭐ {(rating * 10).toFixed(1)} / 100 ⭐
        </p>
      )}
      {overview && (
        <p
          style={{
            margin: "0",
            fontSize: "10px",
            color: "#aac4e0",
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {overview}
        </p>
      )}
    </div>
  );

  const searchDirector = (query) => {
    fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const directorId = json.results[0].id;
          fetch(`${BASE_URL}/person/${directorId}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((json) => {
              setSearchResult(json);
              fetchMovieCredits(directorId);
              fetchTvCredits(directorId);
            });
        } else {
          // console.log(
          //   "No director found with that name. Maybe you misspelled it?"
          // );

          setSearchResult(null);
          setMovieCredits(null);
          setTvCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for director:", error);
        setSearchResult(null);
        setMovieCredits(null);
        setTvCredits(null);
      });
  };

  const fetchMovieCredits = (directorId) => {
    fetch(`${BASE_URL}/person/${directorId}/movie_credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.crew) {
          setMovieCredits(
            json.crew.filter((credit) => credit.job === "Director"),
          );
        } else {
          setMovieCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie credits:", error);
        setMovieCredits(null);
      });
  };

  const fetchTvCredits = (directorId) => {
    fetch(`${BASE_URL}/person/${directorId}/tv_credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.crew) {
          setTvCredits(json.crew.filter((credit) => credit.job === "Director"));
        } else {
          setTvCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching TV credits:", error);
        setTvCredits(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchDirector(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      {/* {console.log(searchResult)} */}
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href={`https://www.themoviedb.org/person/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                      src={
                        searchResult.profile_path
                          ? `https://image.tmdb.org/t/p/w500${searchResult.profile_path}`
                          : "nopicture.png"
                      }
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <h4>
                    {/* {console.log(searchResult)} */}
                    {searchResult.deathday
                      ? `${Math.floor(
                          (new Date(searchResult.deathday) -
                            new Date(searchResult.birthday)) /
                            (1000 * 60 * 60 * 24 * 365.25),
                        )} years old (deceased)`
                      : searchResult.birthday
                        ? `${Math.floor(
                            (new Date() - new Date(searchResult.birthday)) /
                              (1000 * 60 * 60 * 24 * 365.25),
                          )} years old`
                        : "Age unknown"}
                  </h4>
                  <hr />
                  <h4>Movies</h4>
                  <h4>{movieCredits ? movieCredits.length : 0} Credits</h4>
                  {movieCredits && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center",
                      }}
                    >
                      {movieCredits
                        .sort((a, b) =>
                          a.release_date < b.release_date ? -1 : 1,
                        )
                        .map((credit) => (
                          <div
                            key={credit.id}
                            style={{
                              position: "relative",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) =>
                              handleMouseEnter(e, `m-${credit.id}`)
                            }
                            onMouseLeave={() => setHoveredCredit(null)}
                            onTouchStart={(e) =>
                              handleTouchStart(e, `m-${credit.id}`)
                            }
                          >
                            <img
                              style={{
                                width: "60px",
                                height: "90px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                display: "block",
                                transition:
                                  "transform 0.2s ease, box-shadow 0.2s ease",
                                transform:
                                  hoveredCredit === `m-${credit.id}`
                                    ? "scale(1.15)"
                                    : "scale(1)",
                                boxShadow:
                                  hoveredCredit === `m-${credit.id}`
                                    ? "0 8px 20px rgba(0,0,0,0.5)"
                                    : "none",
                              }}
                              src={
                                credit.poster_path
                                  ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
                                  : "noposter.png"
                              }
                              alt={credit.title}
                            />
                            {hoveredCredit === `m-${credit.id}` && (
                              <InfoCard
                                title={credit.title}
                                year={
                                  credit.release_date
                                    ? new Date(
                                        credit.release_date,
                                      ).getFullYear()
                                    : null
                                }
                                rating={credit.vote_average}
                                overview={credit.overview}
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                  <h4>Shows</h4>
                  <h4>{tvCredits ? tvCredits.length : 0} Credits</h4>
                  {tvCredits && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center",
                      }}
                    >
                      {tvCredits
                        .sort((a, b) =>
                          a.first_air_date < b.first_air_date ? -1 : 1,
                        )
                        .map((credit) => (
                          <div
                            key={credit.id}
                            style={{
                              position: "relative",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) =>
                              handleMouseEnter(e, `tv-${credit.id}`)
                            }
                            onMouseLeave={() => setHoveredCredit(null)}
                            onTouchStart={(e) =>
                              handleTouchStart(e, `tv-${credit.id}`)
                            }
                          >
                            <img
                              style={{
                                width: "60px",
                                height: "90px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                display: "block",
                                transition:
                                  "transform 0.2s ease, box-shadow 0.2s ease",
                                transform:
                                  hoveredCredit === `tv-${credit.id}`
                                    ? "scale(1.15)"
                                    : "scale(1)",
                                boxShadow:
                                  hoveredCredit === `tv-${credit.id}`
                                    ? "0 8px 20px rgba(0,0,0,0.5)"
                                    : "none",
                              }}
                              src={
                                credit.poster_path
                                  ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
                                  : "noposter.png"
                              }
                              alt={credit.name}
                            />
                            {hoveredCredit === `tv-${credit.id}` && (
                              <InfoCard
                                title={credit.name}
                                year={
                                  credit.first_air_date
                                    ? new Date(
                                        credit.first_air_date,
                                      ).getFullYear()
                                    : null
                                }
                                rating={credit.vote_average}
                                overview={credit.overview}
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                  <br />
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://www.themoviedb.org/person/${searchResult.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TMDB
                    </a>
                  </h5>
                  {/* ) // : ( //{" "}
                  <h3>
                    // No results found. <br></br>
                    // <br></br>Check spelling and try again. //{" "}
                  </h3>
                  // ) } */}
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

export default DirectorSearch;
