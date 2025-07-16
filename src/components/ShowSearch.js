import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_TMDB;

function ShowSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [certification, setCertification] = useState(null);
  const [numSeasons, setNumSeasons] = useState(null);

  const searchShow = (query) => {
    fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const show = json.results[0];
          setSearchResult(show);
          fetchWatchProviders(show.id);
          fetchCertification(show.id);
          fetchNumSeasons(show.id);
        } else {
          setSearchResult(null);
          setWatchProviders(null);
          setCertification(null);
          setNumSeasons(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for show:", error);
        setSearchResult(null);
        setWatchProviders(null);
        setCertification(null);
        setNumSeasons(null);
      });
  };

  const fetchWatchProviders = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}/watch/providers?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.US) {
          setWatchProviders(json.results.US);
        } else {
          setWatchProviders({ flatrate: [] });
        }
      })
      .catch((error) => {
        console.error("Error fetching watch providers:", error);
        setWatchProviders({ flatrate: [] });
      });
  };

  const fetchCertification = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}/content_ratings?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          const usRating = json.results.find(
            (rating) => rating.iso_3166_1 === "US"
          );
          setCertification(usRating ? usRating.rating : null);
        } else {
          setCertification(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching certification:", error);
        setCertification(null);
      });
  };

  const fetchNumSeasons = (showId) => {
    fetch(`${BASE_URL}/tv/${showId}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setNumSeasons(json.number_of_seasons);
      })
      .catch((error) => {
        console.error("Error fetching number of seasons:", error);
        setNumSeasons(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchShow(searchQuery);
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
                    href={`https://www.themoviedb.org/tv/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                      src={
                        searchResult.poster_path
                          ? `https://image.tmdb.org/t/p/w500${searchResult.poster_path}`
                          : "noposter.png"
                      }
                      alt={searchResult.title}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <hr></hr>
                  {certification && <h4>Rated {certification}</h4>}
                  {console.log(searchResult)}
                  <h4>
                    {numSeasons === 1
                      ? `${numSeasons} Season`
                      : `${numSeasons} Seasons`}
                  </h4>
                  <h4>{searchResult.first_air_date}</h4>

                  <div>
                    {watchProviders?.flatrate?.length > 0 ? (
                      <div>
                        {/* {console.log(searchResult)} */}
                        {watchProviders.flatrate.map((provider) => (
                          <img
                            style={{
                              width: "45px",
                              height: "45px",
                            }}
                            key={provider.provider_id}
                            src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                            alt={provider.provider_name}
                            title={provider.provider_name}
                          />
                        ))}
                      </div>
                    ) : (
                      <h4>Unavailable to Stream</h4>
                    )}
                  </div>
                  <br />
                  {searchResult.overview}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://www.themoviedb.org/tv/${searchResult.id}`}
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

export default ShowSearch;
