import { CustomLink } from "../components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <h1>AA Tech Tips</h1>
      <hr></hr>
      <h4>
        Need IT help or looking for some tips? Start with the basics and tap
        Tech 101 below or select another category! Tap the buttons on each page
        to expand and collapse the tips.<br></br>
        <br></br>Tap the logo in the top left corner to return here and navigate
        the site with the{" "}
        <img src="images/hamburger.png" height="20" width="20" /> menu (on
        smartphones) in the top right corner.
      </h4>
      <div className="links">
        <ul>
          <h2>
            <CustomLink to="/tech101">Tech 101</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/computer">Computer</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/television">Television</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/internet">Internet</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/smartphone">Smartphone</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/streaming">Streaming</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/wearable">Wearable</CustomLink>
          </h2>
          {/* <CustomLink to="/contact">Contact Us</CustomLink> */}
          {/* <h2>
          <CustomLink to="/appointment">Appointment</CustomLink>
        </h2> */}
          <h2>
            <CustomLink to="/about">About</CustomLink>
          </h2>
        </ul>
      </div>
      <h5>
        Need more help or have feedback? Send an email to{" "}
        <a href="mailto:feedback@aatechtips.com">feedback@aatechtips.com</a>
      </h5>
    </>
  );
}
