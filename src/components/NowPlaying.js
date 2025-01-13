import React, { useEffect, useState } from "react";

function NowPlaying() {
  const [nowPlayingList, setNowPlayingList] = useState([]);

  const getNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b32ac76c26554d2985c4740b888a60d7"
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
        <img
          key={movie.id}
          style={{
            width: "125px",
            height: "200px",
            // marginTop: "10px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </div>
  );
}

export default NowPlaying;
