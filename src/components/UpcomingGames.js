import { useEffect, useRef, useState } from "react";

function UpcomingGames() {
  const [upcomingGames, setUpcomingGames] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [tappedGame, setTappedGame] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const isTouching = useRef(false);

  const fetchUpcomingGames = () => {
    fetch("/api/igdb-upcoming")
      .then((res) => res.json())
      .then((json) => {
        console.log("Upcoming games response:", json);
        if (json.results && json.results.length > 0) {
          setUpcomingGames(json.results);
        } else {
          setUpcomingGames(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching upcoming games:", error);
        setUpcomingGames(null);
      });
  };

  useEffect(() => {
    fetchUpcomingGames();
  }, []);

  useEffect(() => {
    const lock = selectedGame ? "hidden" : "";
    document.documentElement.style.overflow = lock;
    document.body.style.overflow = lock;
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [selectedGame]);

  const formatDate = (unix) => {
    if (!unix) return "Unknown";
    return new Date(unix * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {upcomingGames ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
          {upcomingGames.map((game) =>
            game.cover?.url ? (
              <div
                key={game.id}
                style={{
                  position: "relative",
                  display: "inline-block",
                  cursor: "pointer",
                  zIndex: hoveredGame === game.id || tappedGame === game.id ? 1 : 0,
                }}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
                onTouchStart={() => {
                  isTouching.current = true;
                }}
                onClick={() => {
                  if (isTouching.current) {
                    isTouching.current = false;
                    if (tappedGame === game.id) {
                      setTappedGame(null);
                      setSelectedGame(game);
                    } else {
                      setTappedGame(game.id);
                    }
                  } else {
                    setSelectedGame(game);
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
                      hoveredGame === game.id || tappedGame === game.id
                        ? "scale(1.08)"
                        : "scale(1)",
                    boxShadow:
                      hoveredGame === game.id || tappedGame === game.id
                        ? "0 0 0 2px #3c709f, 0 8px 20px rgba(0,0,0,0.5)"
                        : "none",
                  }}
                  src={game.cover.url}
                  alt={game.name}
                />
              </div>
            ) : (
              <a
                key={game.id}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "125px", height: "200px" }}
                  src="noposter.png"
                  alt={game.name}
                />
              </a>
            )
          )}
        </div>
      ) : (
        <p>No upcoming games found.</p>
      )}
      <h5>
        Data provided by{" "}
        <a
          href="https://www.igdb.com/games/coming_soon"
          target="_blank"
          rel="noopener noreferrer"
        >
          IGDB
        </a>
      </h5>

      {selectedGame && (
        <div
          onClick={() => setSelectedGame(null)}
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
                onClick={() => setSelectedGame(null)}
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
                src={selectedGame.cover.url}
                alt={selectedGame.name}
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
                {selectedGame.name}
              </p>
              {selectedGame.first_release_date && (
                <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#aac4e0" }}>
                  {formatDate(selectedGame.first_release_date)}
                </p>
              )}
              {selectedGame.hypes && (
                <p style={{ margin: "0 0 10px", fontSize: "13px", color: "#aac4e0" }}>
                  🔥 {selectedGame.hypes} hypes
                </p>
              )}
              {selectedGame.summary && (
                <p
                  style={{
                    margin: "0 0 14px",
                    fontSize: "12px",
                    color: "#aac4e0",
                    textAlign: "left",
                    lineHeight: "1.5",
                  }}
                >
                  {selectedGame.summary}
                </p>
              )}
              <a
                href={selectedGame.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  color: "#7ab3d9",
                  textDecoration: "underline",
                }}
              >
                View on IGDB
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpcomingGames;
