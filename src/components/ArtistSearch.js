import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_SPOTIFY;
const BASE_URL = process.env.REACT_APP_BASE_URL_SPOTIFY;

function ArtistSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [EPs, setEPs] = useState(null);
  const [singles, setSingles] = useState(null);
  const [token, setToken] = useState(null);
  const [showAlbums, setShowAlbums] = useState(false);
  const [showEPs, setShowEPs] = useState(false);
  const [showSingles, setShowSingles] = useState(false);

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
        // console.log(
        //   "Artist search response:",
        //   JSON.stringify(res.data, null, 2)
        // );
        if (res.data.artists && res.data.artists.items.length > 0) {
          const artist = res.data.artists.items[0];
          setSearchResult(artist);
          fetchAlbums(artist.id);
          fetchEPs(artist.id);
          fetchSingles(artist.id);
        } else {
          setSearchResult(null);
          setAlbums(null);
          setEPs(null);
          setSingles(null);
        }
      })
      .catch((error) => {
        console.error("Error searching for artist:", error);
        setSearchResult(null);
        setAlbums(null);
        setEPs(null);
        setSingles(null);
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
        // console.log("Albums response:", JSON.stringify(res.data, null, 2));
        if (res.data && res.data.items) {
          setAlbums(
            // res.data.items
            res.data.items.filter((item) => item.album_group === "album")
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
        // console.log("EPs response:", JSON.stringify(res.data, null, 2));
        if (res.data && res.data.items) {
          setEPs(
            // res.data.items.filter((item) => item.album_group == "single")
            res.data.items.filter(
              (item) => item.album_group === "single" && item.total_tracks >= 3
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

  const fetchSingles = (artistId) => {
    axios
      .get(`${BASE_URL}artists/${artistId}/albums?limit=50`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("Singles response:", JSON.stringify(res.data, null, 2));
        if (res.data && res.data.items) {
          setSingles(
            // res.data.items.filter((item) => item.album_group == "single")
            res.data.items.filter(
              (item) => item.album_group === "single" && item.total_tracks < 3
            )
          );
        } else {
          setSingles(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching artist singles:", error);
        setSingles(null);
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
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowAlbums(!showAlbums)}
                  >
                    {albums && albums.length > 0 ? "Albums" : "No Albums"}
                  </button>
                  <br />
                  {showAlbums && albums && (
                    <ul style={{ display: "block" }}>
                      {albums.map((album) => (
                        <li key={album.id}>
                          <a
                            href={album.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {album.name}
                          </a>
                          <br></br>({album.release_date.substring(0, 4)})
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* <br /> */}
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowEPs(!showEPs)}
                  >
                    {EPs && EPs.length > 0 ? "EPs" : "No EPs"}
                  </button>
                  <br />
                  {showEPs && EPs && (
                    <ul style={{ display: "block" }}>
                      {EPs.map((EP) => (
                        <li key={EP.id}>
                          <a
                            href={EP.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {EP.name}
                          </a>
                          <br></br>({EP.release_date.substring(0, 4)})
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "16px",
                      padding: "5px 10px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowSingles(!showSingles)}
                  >
                    {singles && singles.length > 0 ? "Singles" : "No Singles"}
                  </button>
                  <br />
                  {showSingles && singles && (
                    <ul style={{ display: "block" }}>
                      {singles.map((single) => (
                        <li key={single.id}>
                          <a
                            href={single.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {single.name}
                          </a>
                          <br></br>
                          {` (${single.release_date.substring(0, 4)})`}
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
