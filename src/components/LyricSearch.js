import React, { useState, useEffect } from "react";
import axios from "axios";
const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN_GENIUS;

function LyricSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);

  const searchLyric = (query) => {
    axios
      .get(`/api/genius?q=${query}`, {
        headers: { Authorization: `Bearer ${CLIENT_TOKEN}` },
      })

      .then((res) => {
        if (res.data.response.hits.length > 0) {
          const songs = res.data.response.hits.map((hit) => hit.result);
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
    if (searchQuery) {
      searchLyric(searchQuery);
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
                  <h1>Songs</h1>
                  <hr></hr>
                  {searchResult.map((song) => (
                    <div key={song.id}>
                      <h4>
                        <a
                          href={song.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {song.title}
                        </a>
                        <br></br>
                        {song.primary_artist.name}
                        <br></br>
                        {song.album && song.album.name ? (
                          <>
                            {song.album.name}
                            <br></br>
                            {song.lyrics && song.lyrics.length > 0 ? (
                              <blockquote>test</blockquote>
                            ) : null}
                          </>
                        ) : null}
                      </h4>
                      <h5></h5>
                      <h5></h5>
                    </div>
                  ))}
                  <h5>
                    Data provided by{" "}
                    <a
                      href={`https://genius.com/search?q=${searchQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Genius
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

export default LyricSearch;
