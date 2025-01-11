import React, { useEffect, useState } from "react";
import { use } from "react";

function MovieSearch() {
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b32ac76c26554d2985c4740b888a60d7"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);
  return (
    <div>
      {movieList.map((movie) => (
        <img
          style={{ width: "125px", height: "200px" }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

export default MovieSearch;
