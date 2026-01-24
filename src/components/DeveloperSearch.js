import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY_IGDB;
const BASE_URL = process.env.REACT_APP_BASE_URL_IGDB;

function DeveloperSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [gameCredits, setGameCredits] = useState(null);

  const searchDeveloper = (query) => {
    fetch(`${BASE_URL}/search/developer?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const developerId = json.results[0].id;
          fetch(`${BASE_URL}/developer/${developerId}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((json) => {
              setSearchResult(json);
              fetchGameCredits(developerId);
            });
        } else {
          // console.log(
          //   "No developer found with that name. Maybe you misspelled it?"
          // );

          setSearchResult(null);
          setGameCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for developer:", error);
        setSearchResult(null);
        setGameCredits(null);
      });
  };

  const fetchGameCredits = (developerId) => {
    fetch(`${BASE_URL}/developer/${developerId}/games?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          setGameCredits(json.results);
        } else {
          setGameCredits(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching game credits:", error);
        setGameCredits(null);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      searchDeveloper(searchQuery);
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
                    href={`https://www.igdb.com/developer/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                      src={
                        searchResult.image
                          ? `${BASE_URL}/developer/${searchResult.id}/image`
                          : "nopicture.png"
                      }
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <h4>{searchResult.developer_type}</h4>
                  <h4>{searchResult.country}</h4>
                  <hr />
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

export default DeveloperSearch;
