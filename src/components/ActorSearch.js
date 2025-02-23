import React, { useEffect, useState } from "react";
const API_KEY = "b32ac76c26554d2985c4740b888a60d7";
const BASE_URL = "https://api.themoviedb.org/3";

function ActorSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  const searchActor = (query) => {
    fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const actor = json.results[0];
          setSearchResult(actor);
          fetchMovieCredits(actor.id);
        } else {
          setSearchResult(null);
          setMovieCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for actor:", error);
        setSearchResult(null);
        setMovieCredits(null);
      });
  };

  const fetchMovieCredits = (actorId) => {
    fetch(`${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.cast) {
          setMovieCredits(json.cast);
        } else {
          setMovieCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie credits:", error);
        setMovieCredits(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchActor(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href={`https://www.themoviedb.org/person/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                      src={`https://image.tmdb.org/t/p/w500${searchResult.profile_path}`}
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr></hr>
                  {/* <h4>Birthday: {searchResult.birthday}</h4>
                  {console.log(searchResult.biography)} */}
                  <h4>{movieCredits ? movieCredits.length : 0} credits</h4>
                  {movieCredits && (
                    <div>
                      {movieCredits.map((credit) => (
                        <a
                          key={credit.id}
                          href={`https://www.themoviedb.org/movie/${credit.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            style={{
                              width: "60px",
                              height: "90px",
                            }}
                            src={
                              credit.poster_path
                                ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
                                : "noposter.png"
                            }
                            alt={credit.title}
                            title={credit.title}
                          />
                        </a>
                      ))}
                    </div>
                  )}
                  <br />
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://www.themoviedb.org/person/${searchResult.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TMDB
                    </a>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      )}
    </div>
  );
}

export default ActorSearch;
