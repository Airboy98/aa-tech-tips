import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = "8c21848c3b8546949fd02cfd34de46cb";
const CLIENT_SECRET = "90aa752b1f7b459c9a18c30d4cb1d731";
const BASE_URL = "https://api.spotify.com/v1/";

function AlbumSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [albums, setAlbums] = useState(null);
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

  const searchAlbum = (query) => {
    axios
      .get(`${BASE_URL}search?q=${query}&type=album`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.albums && res.data.albums.items.length > 0) {
          const album = res.data.albums.items[0];
          setSearchResult(album);
          fetchAlbums(album.id);
        } else {
          setSearchResult(null);
          setAlbums(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for album:", error);
        setSearchResult(null);
        setAlbums(null);
      });
  };

  const fetchAlbums = (albumId) => {
    axios
      .get(`${BASE_URL}albums/${albumId}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && res.data.items) {
          setAlbums(res.data.items);
        } else {
          setAlbums(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching album tracks:", error);
        setAlbums(null);
      });
  };

  useEffect(() => {
    if (searchQuery && token) {
      searchAlbum(searchQuery);
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
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                    src={searchResult.images[0].url}
                    alt={searchResult.name}
                  />
                  <h1>{searchResult.name}</h1>
                  <hr></hr>
                  <h4>{searchResult.artists[0].name}</h4>
                  <h4>{searchResult.release_date}</h4>

                  {albums && (
                    <ol>
                      {albums.map((track) => (
                        <li key={track.id}>
                          <a
                            href={`https://open.spotify.com/track/${track.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {track.name}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://open.spotify.com/album/${searchResult.id}`}
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

export default AlbumSearch;
