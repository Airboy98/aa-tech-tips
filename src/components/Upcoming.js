import React, { useEffect, useState } from "react";

function Upcoming() {
  const [upcomingList, setUpcomingList] = useState([]);

  const getUpcoming = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b32ac76c26554d2985c4740b888a60d7&region=US&with_release_type=2|3"
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          setUpcomingList(json.results);
        } else {
          setUpcomingList([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching upcoming movies:", error);
        setUpcomingList([]);
      });
  };

  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <div>
      {upcomingList.map((movie) => (
        <a
          key={movie.id}
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{
              width: "125px",
              height: "200px",
              // marginTop: "10px",
            }}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "noposter.png"
            }
            alt={movie.title}
          />
        </a>
      ))}
      <h5>
        Data provided by{" "}
        <a
          href="https://www.themoviedb.org/movie/upcoming?language=en-US"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDB
        </a>
      </h5>
    </div>
  );
}

export default Upcoming;
