import { CustomLink } from "../components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <h1>AA Tech Tips</h1>
      <hr></hr>
      <h3>
        Need IT help or looking for some tips? Select a category below or choose
        Tech 101 to start with the basics! Select the logo at the top left to
        return here.
      </h3>
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
          <h2>Wearables (like Apple Watch and Fitbit - coming soon)</h2>
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
