import { useEffect, useRef, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function NowPlaying() {
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [tappedMovie, setTappedMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const isTouching = useRef(false);

  const getNowPlaying = () => {
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=US&with_release_type=2|3`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          setNowPlayingList(json.results);
        } else {
          setNowPlayingList([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching now playing movies:", error);
        setNowPlayingList([]);
      });
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  useEffect(() => {
    const lock = selectedMovie ? "hidden" : "";
    document.documentElement.style.overflow = lock;
    document.body.style.overflow = lock;
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [selectedMovie]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "Unknown";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
        {nowPlayingList.map((movie) =>
          movie.poster_path ? (
            <div
              key={movie.id}
              style={{
                position: "relative",
                display: "inline-block",
                cursor: "pointer",
                zIndex: hoveredMovie === movie.id || tappedMovie === movie.id ? 1 : 0,
              }}
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
              onTouchStart={() => {
                isTouching.current = true;
              }}
              onClick={() => {
                if (isTouching.current) {
                  isTouching.current = false;
                  if (tappedMovie === movie.id) {
                    setTappedMovie(null);
                    setSelectedMovie(movie);
                  } else {
                    setTappedMovie(movie.id);
                  }
                } else {
                  setSelectedMovie(movie);
                }
              }}
            >
              <img
                style={{
                  width: "125px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  display: "block",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  transform:
                    hoveredMovie === movie.id || tappedMovie === movie.id
                      ? "scale(1.08)"
                      : "scale(1)",
                  boxShadow:
                    hoveredMovie === movie.id || tappedMovie === movie.id
                      ? "0 0 0 2px #3c709f, 0 8px 20px rgba(0,0,0,0.5)"
                      : "none",
                }}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ) : (
            <a
              key={movie.id}
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "125px", height: "200px" }}
                src="noposter.png"
                alt={movie.title}
              />
            </a>
          )
        )}
      </div>
      <h5>
        Data provided by{" "}
        <a
          href="https://www.themoviedb.org/movie/now-playing?language=en-US"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDB
        </a>
      </h5>

      {selectedMovie && (
        <div
          onClick={() => setSelectedMovie(null)}
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
                onClick={() => setSelectedMovie(null)}
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
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
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
                {selectedMovie.title}
              </p>
              {selectedMovie.release_date && (
                <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#aac4e0" }}>
                  {formatDate(selectedMovie.release_date)}
                </p>
              )}
              {selectedMovie.vote_average > 0 && (
                <p style={{ margin: "0 0 10px", fontSize: "13px", color: "#aac4e0" }}>
                  ⭐ {(selectedMovie.vote_average * 10).toFixed(1)} / 100 ⭐
                </p>
              )}
              {selectedMovie.overview && (
                <p
                  style={{
                    margin: "0 0 14px",
                    fontSize: "12px",
                    color: "#aac4e0",
                    textAlign: "left",
                    lineHeight: "1.5",
                  }}
                >
                  {selectedMovie.overview}
                </p>
              )}
              <a
                href={`https://www.themoviedb.org/movie/${selectedMovie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  color: "#7ab3d9",
                  textDecoration: "underline",
                }}
              >
                View on TMDB
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NowPlaying;
