import Collapsible from "react-collapsible";
import "./streaming.css";
import MovieSearch from "../components/MovieSearch";
import { useState } from "react";
import NowPlaying from "../components/NowPlaying";
import ShowSearch from "../components/ShowSearch";
import AlbumSearch from "../components/AlbumSearch";
import ArtistSearch from "../components/ArtistSearch";
import ActorSearch from "../components/ActorSearch";
import Upcoming from "../components/Upcoming";
import SongSearch from "../components/SongSearch";
import DirectorSearch from "../components/DirectorSearch";
import PodcastSearch from "../components/PodcastSearch";

export default function Streaming() {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchShow, setSearchShow] = useState("");
  const [searchAlbum, setSearchAlbum] = useState("");
  const [searchArtist, setSearchArtist] = useState("");
  const [searchActor, setSearchActor] = useState("");
  const [searchDirector, setSearchDirector] = useState("");
  const [searchSong, setSearchSong] = useState("");
  const [searchPodcast, setSearchPodcast] = useState("");

  const handleSearchMovie = (e) => {
    e.preventDefault();
    const movie = e.target.elements.q.value;
    setSearchMovie(movie);
  };
  const handleSearchShow = (e) => {
    e.preventDefault();
    const show = e.target.elements.q.value;
    setSearchShow(show);
  };
  const handleSearchAlbum = (e) => {
    e.preventDefault();
    const song = e.target.elements.q.value;
    setSearchAlbum(song);
  };

  const handleSearchArtist = (e) => {
    e.preventDefault();
    const artist = e.target.elements.q.value;
    setSearchArtist(artist);
  };

  const handleSearchActor = (e) => {
    e.preventDefault();
    const actor = e.target.elements.q.value;
    setSearchActor(actor);
  };

  const handleSearchDirector = (e) => {
    e.preventDefault();
    const director = e.target.elements.q.value;
    setSearchDirector(director);
  };

  const handleSearchSong = (e) => {
    e.preventDefault();
    const song = e.target.elements.q.value;
    setSearchSong(song);
  };

  const handleSearchPodcast = (e) => {
    e.preventDefault();
    const podcast = e.target.elements.q.value;
    setSearchPodcast(podcast);
  };

  return (
    <>
      <div className="section-header">
        <h1>Streaming</h1>
      </div>
      <h2>Software</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Streaming Services</button>
        }
      >
        <h4>Big Media</h4>
        <div className="streaming1">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/youtube.png"
                      alt="Youtube"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://tv.youtube.com/welcome/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/youtubetv.png"
                      alt="Youtube TV"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://netflix.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/netflix.png"
                      alt="Netflix"
                      width="100"
                      height="30"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/prime.png"
                      alt="Prime Video"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.max.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/hbo.png"
                      alt="HBO Max"
                      width="100"
                      height="35"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.hulu.com/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/hulu.png"
                      alt="Hulu"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.peacocktv.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/peacock.png"
                      alt="Peacock"
                      width="100"
                      height="30"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.disneyplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/disney.png"
                      alt="Disney+"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.paramountplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/paramount.png"
                      alt="Paramount+"
                      width="100"
                      height="30"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.discoveryplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/discovery.png"
                      alt="Discovery+"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://tv.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/appletvplus.png"
                      alt="Apple TV+"
                      width="100"
                      height="40"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://plus.espn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/espnplus.png"
                      alt="ESPN+"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Alternative Media</h4>
        <div className="streaming1">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.pureflix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/pureflix.png"
                      alt="PureFlix"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://cuebroadcast.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/cue.png"
                      alt="Cue"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.yippee.tv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/yippee.png"
                      alt="Yippee"
                      width="85"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://watch.redeemtv.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/redeem.png"
                      alt="Redeem TV"
                      width="100"
                      height="30"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.christiancinema.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/christian-cinema.jpg"
                      alt="Christian Cinema"
                      width="100"
                      height="25"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.rightnowmedia.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/right-now-media.png"
                      alt="RightNow Media"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://rumble.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/rumble.png"
                      alt="Rumble"
                      width="100"
                      height="25"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.brighteon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/streaming/brighteon.svg"
                      alt="Brighteon"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <h2>Hardware</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Streaming Devices</button>
        }
      >
        <div className="television">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GHH5TUHA7677G4HJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/devices/amazon-fire-tv-stick.png"
                      alt="Amazon Fire TV Stick"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://support.roku.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/devices/roku.png"
                      alt="Roku"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://support.google.com/chromecast/chromecast/?hl=en&sjid=890919833032057258-NC#topic=3058948"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/devices/chromecast1.png"
                      alt="Chromecast"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://support.apple.com/apple-tv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/devices/appletv.png"
                      alt="Apple TV"
                      width="100"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <h2>Movies and Shows</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Movie Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchMovie}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter movie name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <MovieSearch searchQuery={searchMovie} />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Show Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchShow}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter show name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ShowSearch searchQuery={searchShow} />
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Director Search</button>
        }
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchDirector}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter director name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <DirectorSearch searchQuery={searchDirector} />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Actor Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchActor}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter actor name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ActorSearch searchQuery={searchActor} />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Now Playing</button>}
      >
        <br></br>
        <NowPlaying />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Upcoming</button>}
      >
        <br></br>
        <Upcoming />
      </Collapsible>
      <h2>Music</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Artist Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchArtist}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter artist name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ArtistSearch searchQuery={searchArtist} />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Album Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchAlbum}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter album name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AlbumSearch searchQuery={searchAlbum} />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Song Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchSong}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter song name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SongSearch searchQuery={searchSong} />
      </Collapsible>
      <h2>Podcasts</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Podcast Search</button>
        }
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchPodcast}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter podcast name..."
                      />
                    </div>
                    <button>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <PodcastSearch searchQuery={searchPodcast} />
      </Collapsible>
    </>
  );
}
