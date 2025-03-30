import React, { useEffect, useState } from "react";

function NewReleases() {
  const [newReleases, setNewReleases] = useState(null);

  const fetchNewReleases = () => {
    fetch("/api/giantbomb-newreleases")
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
            href={game.site_detail_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "186px",
                height: "105px",
                // marginTop: "10px",
              }}
              src={game.image?.screen_url}
              alt={game.name}
            />
          </a>
        ))
      ) : (
        <p>No new releases found.</p>
      )}
    </div>
  );
}

export default NewReleases;
