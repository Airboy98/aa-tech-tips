import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setshowBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the value as needed to determine when to show the button
      setshowBurger(window.innerWidth < 768);
      // setIsOpen(false); // Close the menu if the button is hidden
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially

    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="nav">
        {/* add home to the below path="/" to point the site-title to /home if enabled in App.js */}
        <Link to="/" className="site-title">
          <img src="site-logo.png" alt="" height="50" width="50" />
        </Link>
        {showBurger && (
          <label className="hamburger-menu">
            <input type="checkbox" />
          </label>
        )}
        {showBurger ? (
          <div className="sidebar">
            <ul>
              <CustomLink to="/tech101">Tech 101</CustomLink>
              <CustomLink to="/computer">Computer</CustomLink>
              <CustomLink to="/television">Television</CustomLink>
              <CustomLink to="/internet">Internet</CustomLink>
              <CustomLink to="/smartphone">Smartphone</CustomLink>
              <CustomLink to="/streaming">Streaming</CustomLink>
              <CustomLink to="/wearable">Wearable</CustomLink>
              <CustomLink to="/appointment">Appointment</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </ul>
          </div>
        ) : (
          // <div className="menu-items">
          <ol>
            <CustomLink to="/tech101">Tech 101</CustomLink>
            <CustomLink to="/computer">Computer</CustomLink>
            <CustomLink to="/television">Television</CustomLink>
            <CustomLink to="/internet">Internet</CustomLink>
            <CustomLink to="/smartphone">Smartphone</CustomLink>
            <CustomLink to="/streaming">Streaming</CustomLink>
            <CustomLink to="/wearable">Wearable</CustomLink>
            <CustomLink to="/appointment">Appointment</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </ol>
          // </div>
        )}
      </nav>
    </header>
  );
}

export function CustomLink({ to, children, ...props }) {
  const toggleMenu = () => {
    console.log("this should close menu");
  };

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""} onClick={toggleMenu}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
