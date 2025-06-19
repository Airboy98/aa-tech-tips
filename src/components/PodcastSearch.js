/*************  ✨ Windsurf Command 🌟  *************/
import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function PodcastSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams("grant_type=client_credentials"),
        {
          headers: {
            Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setToken(res.data.access_token);
      })
      .catch((error) => {
        console.error("Error getting token:", error);
        setToken(null);
      });
  }, []);

  const searchPodcast = (query) => {
    axios
      .get(`${BASE_URL}search?q=${query}&type=show`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.shows && res.data.shows.items.length > 0) {
          const podcast = res.data.shows.items[0];
          setSearchResult(podcast);
          fetchEpisodes(podcast.id);
        } else {
          setSearchResult(null);
          setEpisodes(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for podcast:", error);
        setSearchResult(null);
        setEpisodes(null);
      });
  };

  const fetchEpisodes = (podcastId) => {
    axios
      .get(`${BASE_URL}shows/${podcastId}/episodes?limit=10&market=US`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data && res.data.items) {
          setEpisodes(res.data.items);
        } else {
          setEpisodes(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching podcast episodes:", error);
        setEpisodes(null);
      });
  };

  useEffect(() => {
    if (searchQuery && token) {
      searchPodcast(searchQuery);
    }
  }, [searchQuery, token]);

  return (
    <div>
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href={`https://open.spotify.com/show/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                      src={searchResult.images[0].url}
                      alt={searchResult.name}
                    />
                  </a>
                  <h1>{searchResult.name}</h1>
                  <h4>{searchResult.total_episodes} Episodes</h4>
                  <hr></hr>
                  <h4>
                    {(() => {
                      const sentences =
                        searchResult.description.split(/(?<=[.!?])\s/);
                      return sentences.length > 2
                        ? sentences.slice(0, 2).join(" ")
                        : searchResult.description;
                    })()}
                  </h4>
                  <h3>Latest Episodes</h3>
                  {episodes &&
                  Array.isArray(episodes) &&
                  episodes.length > 0 ? (
                    <ul>
                      {episodes
                        .filter(
                          (ep) =>
                            ep && ep.external_urls && ep.external_urls.spotify
                        )
                        .map((episode) => (
                          <li key={episode.id}>
                            <a
                              href={episode.external_urls.spotify}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {episode.name}
                            </a>
                            <br />(
                            {new Intl.DateTimeFormat("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }).format(new Date(episode.release_date))}
                            )
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p>No episodes available.</p>
                  )}

                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://open.spotify.com/show/${searchResult.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify
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

export default PodcastSearch;

/*******  77a80c83-f3ec-42dd-97b8-1cc20ddc0366  *******/
