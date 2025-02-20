import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = "8c21848c3b8546949fd02cfd34de46cb";
const CLIENT_SECRET = "90aa752b1f7b459c9a18c30d4cb1d731";
const BASE_URL = "https://api.spotify.com/v1/";

function ArtistSearch({ searchQuery }) {
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
      .get(`${BASE_URL}artists/${artistId}/albums`, {
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

  useEffect(() => {
    if (searchQuery && token) {
      searchArtist(searchQuery);
    }
  }, [searchQuery, token]);

  return (
    <div>
      {searchResult && (
        <div className="tech">
          <table style={{ margin: "0 auto", width: "230px" }}>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                    src={searchResult.images[0].url}
                    alt={searchResult.name}
                  />
                  <h1>{searchResult.name}</h1>
                  <h4>{searchResult.genres.join(", ")}</h4>

                  {albums && (
                    <ol style={{ listStyleType: "none", padding: 0 }}>
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
                          {` (${new Date(album.release_date).getFullYear()})`}
                        </li>
                      ))}
                    </ol>
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
