import React, { useEffect, useRef, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [dropdownResults, setDropdownResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
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
  const wrapperRef = useRef(null);

  const clearDetails = () => {
    setSearchResult(null);
    setWatchProviders(null);
    setRentProviders(null);
    setPurchaseProviders(null);
    setCertification(null);
    setDirector(null);
    setActors([]);
    setRuntime(null);
    setFlippedCards({});
    setShowActors(false);
    setShowWatchProviders(false);
    setShowRentProviders(false);
    setShowPurchaseProviders(false);
  };

  const loadMovieById = (movie) => {
    setSearchResult(movie);
    setFlippedCards({});
    setShowActors(false);
    setShowWatchProviders(false);
    setShowRentProviders(false);
    setShowPurchaseProviders(false);
    fetchWatchProviders(movie.id);
    fetchRentProviders(movie.id);
    fetchPurchaseProviders(movie.id);
    fetchCertification(movie.id);
    fetchDirector(movie.id);
    fetchActors(movie.id);
    fetchRuntime(movie.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((json) => {
        const results = json.results || [];
        if (results.length === 0) {
          setDropdownResults([]);
          setShowDropdown(false);
          clearDetails();
        } else if (results.length === 1) {
          setDropdownResults([]);
          setShowDropdown(false);
          loadMovieById(results[0]);
        } else {
          setDropdownResults(results.slice(0, 10));
          setShowDropdown(true);
          setSearchResult(null);
        }
      })
      .catch((err) => {
        console.error("Error searching for movie:", err);
        clearDetails();
        setShowDropdown(false);
      });
  };

  const handleSelect = (movie) => {
    setShowDropdown(false);
    setDropdownResults([]);
    loadMovieById(movie);
  };

  const fetchWatchProviders = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setWatchProviders(json.results?.US ?? { flatrate: [] });
      })
      .catch(() => setWatchProviders({ flatrate: [] }));
  };

  const fetchRentProviders = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setRentProviders(json.results?.US?.rent ?? []);
      })
      .catch(() => setRentProviders([]));
  };

  const fetchPurchaseProviders = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setPurchaseProviders(json.results?.US?.buy ?? []);
      })
      .catch(() => setPurchaseProviders([]));
  };

  const fetchCertification = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/release_dates?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        const usCert = json.results?.find((e) => e.iso_3166_1 === "US");
        const cert = usCert?.release_dates?.find((d) => d.certification);
        setCertification(cert ? cert.certification : null);
      })
      .catch(() => setCertification(null));
  };

  const fetchDirector = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        const dir = json.crew?.find((c) => c.job === "Director");
        setDirector(dir ? dir.name : null);
      })
      .catch(() => setDirector(null));
  };

  const fetchActors = async (movieId) => {
    try {
      const res = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
      const json = await res.json();
      if (!json.cast) return setActors([]);
      const topActors = json.cast.sort((a, b) => a.order - b.order).slice(0, 6);
      const actorsWithDetails = await Promise.all(
        topActors.map(async (actor) => {
          try {
            const [detailRes, creditsRes] = await Promise.all([
              fetch(`${BASE_URL}/person/${actor.id}?api_key=${API_KEY}`),
              fetch(`${BASE_URL}/person/${actor.id}/movie_credits?api_key=${API_KEY}`),
            ]);
            const detailJson = await detailRes.json();
            const creditsJson = await creditsRes.json();
            const knownFor =
              creditsJson.cast
                ?.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
                .slice(0, 4)
                .map((m) => m.title)
                .filter(Boolean) ?? [];
            return { ...actor, birthday: detailJson.birthday, deathday: detailJson.deathday, knownFor };
          } catch {
            return { ...actor, birthday: null, knownFor: [] };
          }
        })
      );
      setActors(actorsWithDetails);
    } catch {
      setActors([]);
    }
  };

  const fetchRuntime = (movieId) => {
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => setRuntime(json.runtime ?? null))
      .catch(() => setRuntime(null));
  };

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={wrapperRef}>
      <div className="internet" style={{ textAlign: "center" }}>
        <table style={{ textAlign: "left" }}>
          <tbody>
            <tr>
              <td>
                <form onSubmit={handleSubmit}>
                  <div className="search">
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Enter movie name..."
                    />
                  </div>
                  <button type="submit">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px", color: "white" }}
                    >
                      search
                    </span>
                  </button>
                </form>

                {showDropdown && (
                  <div className="search-dropdown">
                    {dropdownResults.map((movie) => (
                      <div
                        key={movie.id}
                        className="search-dropdown-item"
                        onClick={() => handleSelect(movie)}
                      >
                        {movie.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                            alt={movie.title}
                          />
                        ) : (
                          <div className="search-no-cover" />
                        )}
                        <div className="search-dropdown-info">
                          <span className="search-dropdown-name">{movie.title}</span>
                          {movie.release_date && (
                            <span className="search-dropdown-year">
                              {movie.release_date.slice(0, 4)}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
                      style={{ width: "200px", height: "300px" }}
                      src={
                        searchResult.poster_path
                          ? `https://image.tmdb.org/t/p/w500${searchResult.poster_path}`
                          : "noposter.png"
                      }
                      alt={searchResult.title}
                    />
                  </a>
                  <h1>{searchResult.title}</h1>
                  <hr />
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
                          className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
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
                                <div className="no-image">No Profile Picture</div>
                              )}
                              <div className="episode-title">
                                {actor.name}
                                <br />as<br />
                                {actor.character}
                              </div>
                            </div>
                            <div className="flip-card-back">
                              <div style={{ padding: "0px", fontSize: "14px" }}>
                                <strong>Age: </strong>
                                {actor.deathday
                                  ? `${Math.floor((new Date(actor.deathday) - new Date(actor.birthday)) / (1000 * 60 * 60 * 24 * 365.25))} (d)`
                                  : actor.birthday
                                  ? `${Math.floor((new Date() - new Date(actor.birthday)) / (1000 * 60 * 60 * 24 * 365.25))}`
                                  : "unknown"}
                                <br /><br />
                                {actor.knownFor?.length > 0 && (
                                  <>
                                    <strong>Known for:</strong>
                                    <ul style={{ textAlign: "left", paddingLeft: "0px", margin: "0px 0" }}>
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
                    style={{ backgroundColor: "#ddd", color: "black", borderRadius: "20px", fontSize: "16px", padding: "5px 10px", fontWeight: "bold" }}
                    onClick={() => setShowWatchProviders(!showWatchProviders)}
                  >
                    Streaming
                  </button>
                  {showWatchProviders && watchProviders && (
                    <div>
                      <br />
                      {watchProviders.flatrate?.length > 0 ? (
                        <div>
                          {watchProviders.flatrate.map((p) => (
                            <img
                              key={p.provider_id}
                              style={{ width: "45px", height: "45px" }}
                              src={`https://image.tmdb.org/t/p/w500${p.logo_path}`}
                              alt={p.provider_name}
                              title={p.provider_name}
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
                    style={{ backgroundColor: "#ddd", color: "black", borderRadius: "20px", fontSize: "16px", padding: "5px 10px", fontWeight: "bold" }}
                    onClick={() => setShowRentProviders(!showRentProviders)}
                  >
                    Renting
                  </button>
                  {showRentProviders && rentProviders && (
                    <div>
                      <br />
                      {rentProviders.length > 0 ? (
                        rentProviders.map((p) => (
                          <img
                            key={p.provider_id}
                            style={{ width: "45px", height: "45px" }}
                            src={`https://image.tmdb.org/t/p/w500${p.logo_path}`}
                            alt={p.provider_name}
                            title={p.provider_name}
                          />
                        ))
                      ) : (
                        <h4>Unavailable to Rent</h4>
                      )}
                    </div>
                  )}
                  <br />
                  <button
                    style={{ backgroundColor: "#ddd", color: "black", borderRadius: "20px", fontSize: "16px", padding: "5px 10px", fontWeight: "bold" }}
                    onClick={() => setShowPurchaseProviders(!showPurchaseProviders)}
                  >
                    Purchase
                  </button>
                  {showPurchaseProviders && purchaseProviders && (
                    <div>
                      <br />
                      {purchaseProviders.length > 0 ? (
                        purchaseProviders.map((p) => (
                          <img
                            key={p.provider_id}
                            style={{ width: "45px", height: "45px" }}
                            src={`https://image.tmdb.org/t/p/w500${p.logo_path}`}
                            alt={p.provider_name}
                            title={p.provider_name}
                          />
                        ))
                      ) : (
                        <h4>Unavailable to Purchase</h4>
                      )}
                    </div>
                  )}
                  <br />
                  <hr />
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
          <br /><br />
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
