import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = "8c21848c3b8546949fd02cfd34de46cb";
const CLIENT_SECRET = "90aa752b1f7b459c9a18c30d4cb1d731";
const BASE_URL = "https://api.spotify.com/v1/";

function ArtistSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [EPs, setEPs] = useState(null);
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

  const searchArtist = (query) => {
    axios
      .get(`${BASE_URL}search?q=${query}&type=artist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.artists && res.data.artists.items.length > 0) {
          const artist = res.data.artists.items[0];
          setSearchResult(artist);
          fetchAlbums(artist.id);
          fetchEPs(artist.id);
        } else {
          setSearchResult(null);
          setAlbums(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for artist:", error);
        setSearchResult(null);
        setAlbums(null);
      });
  };

  const fetchAlbums = (artistId) => {
    axios
      .get(`${BASE_URL}artists/${artistId}/albums?limit=50`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && res.data.items) {
          setAlbums(
            // res.data.items
            res.data.items.filter((item) => item.album_group == "album")
          );
        } else {
          setAlbums(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching artist albums:", error);
        setAlbums(null);
      });
  };

  const fetchEPs = (artistId) => {
    axios
      .get(`${BASE_URL}artists/${artistId}/albums?limit=50`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && res.data.items) {
          setEPs(
            // res.data.items.filter((item) => item.album_group == "single")
            res.data.items.filter(
              (item) => item.total_tracks >= 3 && item.total_tracks <= 6
            )
          );
        } else {
          setEPs(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching artist EPs:", error);
        setEPs(null);
      });
  };

  useEffect(() => {
    if (searchQuery && token) {
      searchArtist(searchQuery);
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
                    href={`https://open.spotify.com/artist/${searchResult.id}`}
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
                  <hr></hr>
                  <h4>{searchResult.genres.join(", ")}</h4>
                  <h3>Albums</h3>
                  {albums && (
                    <ul>
                      {albums.map((album) => (
                        <li key={album.id}>
                          <a
                            href={album.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {album.name}
                          </a>
                          <br></br>
                          {` (${album.release_date.substring(0, 4)})`}
                        </li>
                      ))}
                    </ul>
                  )}
                  <h3>EPs</h3>
                  {EPs && (
                    <ul>
                      {EPs.map((EP) => (
                        <li key={EP.id}>
                          <a
                            href={EP.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {EP.name}
                          </a>
                          <br></br>
                          {` (${EP.release_date.substring(0, 4)})`}
                        </li>
                      ))}
                    </ul>
                  )}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://open.spotify.com/artist/${searchResult.id}`}
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

export default ArtistSearch;
