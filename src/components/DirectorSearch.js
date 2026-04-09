import { useEffect, useRef, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function DirectorSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [tvCredits, setTvCredits] = useState(null);
  const [hoveredCredit, setHoveredCredit] = useState(null);
  const [tappedCredit, setTappedCredit] = useState(null);
  const [selectedCredit, setSelectedCredit] = useState(null);
  const isTouching = useRef(false);
  const swipeTouchStartX = useRef(null);
  const swipeTouchStartY = useRef(null);

  useEffect(() => {
    const lock = selectedCredit ? "hidden" : "";
    document.documentElement.style.overflow = lock;
    document.body.style.overflow = lock;
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [selectedCredit]);

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

  const handleCreditClick = (id, credit, type, index) => {
    if (isTouching.current) {
      isTouching.current = false;
      if (tappedCredit === id) {
        setTappedCredit(null);
        setSelectedCredit({ credit, type, index });
      } else {
        setTappedCredit(id);
      }
    } else {
      setSelectedCredit({ credit, type, index });
    }
  };

  const navigateCredit = (dir) => {
    if (!selectedCredit) return;
    const list =
      selectedCredit.type === "movie" ? sortedMovieCredits : sortedTvCredits;
    const newIndex = selectedCredit.index + dir;
    if (newIndex < 0 || newIndex >= list.length) return;
    setSelectedCredit({ credit: list[newIndex], type: selectedCredit.type, index: newIndex });
  };

  const handleOverlaySwipe = (e) => {
    if (swipeTouchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - swipeTouchStartX.current;
    const deltaY = e.changedTouches[0].clientY - swipeTouchStartY.current;
    swipeTouchStartX.current = null;
    swipeTouchStartY.current = null;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      navigateCredit(deltaX < 0 ? 1 : -1);
    }
  };

  const posterStyle = (id) => ({
    width: "60px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "4px",
    display: "block",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    transform:
      hoveredCredit === id || tappedCredit === id ? "scale(1.5)" : "scale(1)",
    boxShadow:
      hoveredCredit === id || tappedCredit === id
        ? "0 0 0 2px #3c709f, 0 8px 20px rgba(0,0,0,0.5)"
        : "none",
  });

  const sortedMovieCredits = movieCredits
    ? [...movieCredits].sort((a, b) =>
        a.release_date < b.release_date ? -1 : 1,
      )
    : [];
  const sortedTvCredits = tvCredits
    ? [...tvCredits].sort((a, b) =>
        a.first_air_date < b.first_air_date ? -1 : 1,
      )
    : [];

  return (
    <div>
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
                      style={{ width: "200px", height: "300px" }}
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
                      {sortedMovieCredits.map((credit, index) => {
                          const id = `m-${credit.id}`;
                          return (
                            <div
                              key={credit.id}
                              style={{
                                position: "relative",
                                display: "inline-block",
                                cursor: "pointer",
                                zIndex:
                                  hoveredCredit === id || tappedCredit === id
                                    ? 1
                                    : 0,
                              }}
                              onMouseEnter={() => setHoveredCredit(id)}
                              onMouseLeave={() => setHoveredCredit(null)}
                              onTouchStart={() => {
                                isTouching.current = true;
                              }}
                              onClick={() =>
                                handleCreditClick(id, credit, "movie", index)
                              }
                            >
                              <img
                                style={posterStyle(id)}
                                src={
                                  credit.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
                                    : "noposter.png"
                                }
                                alt={credit.title}
                              />
                            </div>
                          );
                        })}
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
                      {sortedTvCredits.map((credit, index) => {
                          const id = `tv-${credit.id}`;
                          return (
                            <div
                              key={credit.id}
                              style={{
                                position: "relative",
                                display: "inline-block",
                                cursor: "pointer",
                                zIndex:
                                  hoveredCredit === id || tappedCredit === id
                                    ? 1
                                    : 0,
                              }}
                              onMouseEnter={() => setHoveredCredit(id)}
                              onMouseLeave={() => setHoveredCredit(null)}
                              onTouchStart={() => {
                                isTouching.current = true;
                              }}
                              onClick={() =>
                                handleCreditClick(id, credit, "tv", index)
                              }
                            >
                              <img
                                style={posterStyle(id)}
                                src={
                                  credit.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
                                    : "noposter.png"
                                }
                                alt={credit.name}
                              />
                            </div>
                          );
                        })}
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
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      )}
      {selectedCredit && (
        <div
          onClick={() => setSelectedCredit(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              swipeTouchStartX.current = e.touches[0].clientX;
              swipeTouchStartY.current = e.touches[0].clientY;
            }}
            onTouchEnd={handleOverlaySwipe}
            style={{
              backgroundColor: "#0f3455",
              border: "1px solid #3c709f",
              borderRadius: "12px",
              width: "280px",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              zIndex: 100,
              boxShadow: "0 24px 64px rgba(0,0,0,0.75)",
              animation: "fadeIn 0.15s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 10px 0",
                flexShrink: 0,
              }}
            >
              <button
                onClick={() => setSelectedCredit(null)}
                style={{
                  background: "#1a4a72",
                  border: "1px solid #3c709f",
                  borderRadius: "50%",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div
              style={{
                overflowY: "auto",
                padding: "10px 20px 20px",
                textAlign: "center",
              }}
            >
              <img
                src={
                  selectedCredit.credit.poster_path
                    ? `https://image.tmdb.org/t/p/w500${selectedCredit.credit.poster_path}`
                    : "noposter.png"
                }
                alt={
                  selectedCredit.type === "movie"
                    ? selectedCredit.credit.title
                    : selectedCredit.credit.name
                }
                style={{
                  width: "180px",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                  margin: "0 auto 14px",
                }}
              />
              <p
                style={{
                  margin: "0 0 6px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#fff",
                }}
              >
                {selectedCredit.type === "movie"
                  ? selectedCredit.credit.title
                  : selectedCredit.credit.name}
              </p>
              {(selectedCredit.type === "movie"
                ? selectedCredit.credit.release_date
                : selectedCredit.credit.first_air_date) && (
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: "13px",
                    color: "#aac4e0",
                  }}
                >
                  {new Date(
                    selectedCredit.type === "movie"
                      ? selectedCredit.credit.release_date
                      : selectedCredit.credit.first_air_date,
                  ).getFullYear()}
                </p>
              )}
              {selectedCredit.credit.vote_average > 0 && (
                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: "13px",
                    color: "#aac4e0",
                  }}
                >
                  ⭐ {(selectedCredit.credit.vote_average * 10).toFixed(1)} /
                  100 ⭐
                </p>
              )}
              {selectedCredit.credit.overview && (
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    color: "#aac4e0",
                    textAlign: "left",
                    lineHeight: "1.5",
                  }}
                >
                  {selectedCredit.credit.overview}
                </p>
              )}
            </div>
            {(() => {
              const creditList =
                selectedCredit.type === "movie"
                  ? sortedMovieCredits
                  : sortedTvCredits;
              const navBtnStyle = (disabled) => ({
                background: disabled ? "#0f3455" : "#1a4a72",
                border: "1px solid #3c709f",
                borderRadius: "50%",
                color: disabled ? "#3c709f" : "#fff",
                fontSize: "22px",
                lineHeight: 1,
                width: "36px",
                height: "36px",
                cursor: disabled ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: disabled ? 0.3 : 1,
                flexShrink: 0,
              });
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 16px 14px",
                    flexShrink: 0,
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateCredit(-1);
                    }}
                    disabled={selectedCredit.index === 0}
                    style={navBtnStyle(selectedCredit.index === 0)}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <span style={{ fontSize: "12px", color: "#aac4e0" }}>
                    {selectedCredit.index + 1} / {creditList.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateCredit(1);
                    }}
                    disabled={selectedCredit.index === creditList.length - 1}
                    style={navBtnStyle(
                      selectedCredit.index === creditList.length - 1,
                    )}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export default DirectorSearch;
