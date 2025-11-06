import React, { useState, useEffect } from "react";
import axios from "axios";

function LyricSearch({ searchQuery }) {
  const [searchResult, setSearchResult] = useState(null);
  const [lyricsMap, setLyricsMap] = useState({}); // store lyrics per song id
  const [loadingId, setLoadingId] = useState(null);

  const searchLyric = (query) => {
    axios
      .get(`/api/genius?q=${query}`)
      .then((res) => {
        if (res.data.response && res.data.response.hits.length > 0) {
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

  // Fetch lyrics for a single song
  const handleShowLyrics = async (song) => {
    if (lyricsMap[song.id]) {
      // already fetched — toggle off
      setLyricsMap((prev) => {
        const newMap = { ...prev };
        delete newMap[song.id];
        return newMap;
      });
      return;
    }

    setLoadingId(song.id);
    try {
      const res = await axios.get(
        `/api/lyrics?url=${encodeURIComponent(song.url)}`
      );

      if (res.data.lyrics) {
        setLyricsMap((prev) => ({
          ...prev,
          [song.id]: res.data.lyrics,
        }));
      } else {
        setLyricsMap((prev) => ({
          ...prev,
          [song.id]: "Lyrics not found.",
        }));
      }
    } catch (err) {
      console.error("Error fetching lyrics:", err);
      setLyricsMap((prev) => ({
        ...prev,
        [song.id]: "Failed to load lyrics.",
      }));
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      {searchResult && (
        <div className="streaming2">
          <table>
            <tbody>
              <tr>
                <td>
                  <h1>Lyrics found in...</h1>
                  <hr />
                  {searchResult.map((song) => (
                    <div key={song.id} style={{ marginBottom: "1.5rem" }}>
                      <h4>
                        <a
                          href={song.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {song.title}
                        </a>
                        <br />
                        {song.primary_artist.name}
                        <br />
                        {song.album && song.album.name && (
                          <>
                            {song.album.name}
                            <br />
                          </>
                        )}
                      </h4>

                      {/* <button
                        onClick={() => handleShowLyrics(song)}
                        disabled={loadingId === song.id}
                        style={{
                          backgroundColor: "#ddd",
                          color: "black",
                          borderRadius: "20px",
                          fontSize: "16px",
                          padding: "5px 10px",
                          fontWeight: "bold",
                        }}
                      >
                        {lyricsMap[song.id]
                          ? "Hide Lyrics"
                          : loadingId === song.id
                          ? "Loading..."
                          : "Show Lyrics"}
                      </button> */}

                      {lyricsMap[song.id] && (
                        <blockquote
                          style={{
                            whiteSpace: "pre-wrap",
                            marginTop: "0.5rem",
                            background: "#222",
                            color: "#eee",
                            padding: "10px",
                            borderRadius: "8px",
                            lineHeight: "1.5",
                          }}
                        >
                          {lyricsMap[song.id]}
                        </blockquote>
                      )}
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
