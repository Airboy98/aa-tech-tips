import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function DirectorSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  const searchDirector = (query) => {
    fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const directorId = json.results[0].id;
          fetch(`${BASE_URL}/person/${directorId}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((json) => {
              setSearchResult(json);
              fetchMovieCredits(directorId);
            });
        } else {
          // console.log(
          //   "No director found with that name. Maybe you misspelled it?"
          // );

          setSearchResult(null);
          setMovieCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for director:", error);
        setSearchResult(null);
        setMovieCredits(null);
      });
  };

  const fetchMovieCredits = (directorId) => {
    fetch(`${BASE_URL}/person/${directorId}/movie_credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.crew) {
          setMovieCredits(
            json.crew.filter((credit) => credit.job === "Director")
          );
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
      searchDirector(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      {/* {console.log(searchResult)} */}
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
                      src={
                        searchResult.profile_path
                          ? `https://image.tmdb.org/t/p/w500${searchResult.profile_path}`
                          : "nopicture.png"
                      }
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <h4>
                    {/* {console.log(searchResult)} */}
                    {searchResult.deathday
                      ? `${Math.floor(
                          (new Date(searchResult.deathday) -
                            new Date(searchResult.birthday)) /
                            (1000 * 60 * 60 * 24 * 365.25)
                        )} years old (deceased)`
                      : searchResult.birthday
                      ? `${Math.floor(
                          (new Date() - new Date(searchResult.birthday)) /
                            (1000 * 60 * 60 * 24 * 365.25)
                        )} years old`
                      : "Age unknown"}
                  </h4>
                  <hr />
                  <h4>Movies</h4>
                  <h4>{movieCredits ? movieCredits.length : 0} Credits</h4>
                  {movieCredits && (
                    <div>
                      {movieCredits
                        .sort((a, b) =>
                          a.release_date < b.release_date ? -1 : 1
                        )
                        .map((credit) => (
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
                  {/* ) // : ( //{" "}
                  <h3>
                    // No results found. <br></br>
                    // <br></br>Check spelling and try again. //{" "}
                  </h3>
                  // ) } */}
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

export default DirectorSearch;
