import React, { useEffect, useState } from "react";

function NowPlaying() {
  const [nowPlayingList, setNowPlayingList] = useState([]);

  const getNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b32ac76c26554d2985c4740b888a60d7&region=US&with_release_type=2|3"
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

  return (
    <div>
      {nowPlayingList.map((movie) => (
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
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </a>
      ))}
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
    </div>
  );
}

export default NowPlaying;
