import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

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
                  <a
                    href={`https://open.spotify.com/album/${searchResult.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                      src={
                        searchResult.images.length > 0
                          ? searchResult.images[0].url
                          : "noartwork.png"
                      }
                      alt={searchResult.name}
                    />
                  </a>
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
