import React, { useEffect, useState } from "react";

function NewReleases() {
  const [newReleases, setNewReleases] = useState(null);

  const fetchNewReleases = () => {
    fetch("/api/igdb-newreleases")
      .then((res) => res.json())
      .then((json) => {
        console.log("New releases response:", json);
        if (json.results && json.results.length > 0) {
          //   const game = json.results[2];
          //   setUpcomingGames(game);
          setNewReleases(json.results);
        } else {
          setNewReleases(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching new releases:", error);
        setNewReleases(null);
      });
  };

  useEffect(() => {
    fetchNewReleases();
  }, []);

  return (
    <div>
      {newReleases ? (
        newReleases.map((game) => (
          <a
            key={game.id}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "125px",
                height: "200px",
                // marginTop: "10px",
              }}
              src={game.cover?.url ? game.cover?.url : "noposter.png"}
              alt={game.name}
            />
          </a>
        ))
      ) : (
        <p>No new releases found.</p>
      )}
      <h5>
        Data provided by{" "}
        <a
          href="https://www.igdb.com/games/recently_released"
          target="_blank"
          rel="noopener noreferrer"
        >
          IGDB
        </a>
      </h5>
    </div>
  );
}

export default NewReleases;
