import React, { useEffect, useState } from "react";

function UpcomingGames() {
  const [upcomingGames, setUpcomingGames] = useState(null);

  const fetchUpcomingGames = () => {
    fetch("/api/giantbomb-upcoming")
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

  return (
    <div>
      {upcomingGames ? (
        upcomingGames.map((game) => (
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
              }}
              src={game.image?.screen_url}
              alt={game.name}
            />
          </a>
        ))
      ) : (
        <p>No upcoming games found.</p>
      )}
      <h5>
        Data provided by{" "}
        <a
          href="https://www.giantbomb.com/new-games/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giant Bomb
        </a>
      </h5>
    </div>
  );
}

export default UpcomingGames;
