import { CustomLink } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <h1>WELCOME TO AA TECH TIPS</h1>
      <hr></hr>
      <h1>Need IT help or looking for some tips? Please select a category.</h1>
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
    </>
  );
}
