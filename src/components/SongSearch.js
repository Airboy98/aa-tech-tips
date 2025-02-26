import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = "8c21848c3b8546949fd02cfd34de46cb";
const CLIENT_SECRET = "90aa752b1f7b459c9a18c30d4cb1d731";
const BASE_URL = "https://api.spotify.com/v1/";

function SongSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
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

  const searchSong = (query) => {
    axios
      .get(`${BASE_URL}search?q=${query}&type=track`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.tracks && res.data.tracks.items.length > 0) {
          const songs = res.data.tracks.items;
          setSearchResult(songs);
        } else {
          setSearchResult(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for song:", error);
        setSearchResult(null);
      });
  };

  useEffect(() => {
    if (searchQuery && token) {
      searchSong(searchQuery);
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
                  <h1>Songs</h1>
                  <hr></hr>
                  {searchResult.map((song) => (
                    <div key={song.id}>
                      <h4>
                        <a
                          href={song.external_urls.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {song.name}
                        </a>
                        <br></br>
                        {song.artists.map((artist) => artist.name).join(", ")}
                        <br></br>
                        {song.album.name} (
                        {song.album.release_date.substring(0, 4)})
                      </h4>
                      <h5></h5>
                      <h5></h5>
                    </div>
                  ))}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://open.spotify.com/search?q=${searchQuery}`}
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

export default SongSearch;
