import { CustomLink } from "../components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <h1>AA TECH TIPS</h1>
      <hr></hr>
      <h2>
        Need IT help or looking for some tips? Please select a category. Click
        the logo at the top left to return home.
      </h2>
      <br></br>
      <div className="links">
        <ul>
          <h2>
            <CustomLink to="/computer">Computer</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/television">Television</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/smartphone">Smartphone</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/internet">Internet</CustomLink>
          </h2>
          <h2>
            <CustomLink to="/streaming">Streaming</CustomLink>
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
    </>
  );
}
