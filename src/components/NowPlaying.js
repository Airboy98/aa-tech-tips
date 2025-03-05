import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function NowPlaying() {
  const [nowPlayingList, setNowPlayingList] = useState([]);

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
