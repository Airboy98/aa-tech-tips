import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setshowBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the value as needed to determine when to show the button
      setshowBurger(window.innerWidth < 940);
      if (window.innerWidth >= 940) {
        setIsOpen(false); // Close the menu if the window width is greater than or equal to 940
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="site-title" onClick={closeMenu}>
          <img src="site-logo.png" alt="" height="50" width="50" />
        </Link>
        {showBurger && (
          <label className="hamburger-menu">
            <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
          </label>
        )}
        {showBurger ? (
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul>
              <CustomLink to="/tech101" onClick={closeMenu}>
                Tech 101
              </CustomLink>
              <CustomLink to="/computer" onClick={closeMenu}>
                Computer
              </CustomLink>
              <CustomLink to="/television" onClick={closeMenu}>
                Television
              </CustomLink>
              <CustomLink to="/gaming" onClick={closeMenu}>
                Gaming
              </CustomLink>
              <CustomLink to="/internet" onClick={closeMenu}>
                Internet
              </CustomLink>
              <CustomLink to="/smartphone" onClick={closeMenu}>
                Smartphone
              </CustomLink>
              <CustomLink to="/streaming" onClick={closeMenu}>
                Streaming
              </CustomLink>
              <CustomLink to="/wearable" onClick={closeMenu}>
                Wearable
              </CustomLink>
              <CustomLink to="/appointment" onClick={closeMenu}>
                Appointment
              </CustomLink>
              <CustomLink to="/about" onClick={closeMenu}>
                About
              </CustomLink>
            </ul>
          </div>
        ) : (
          <ol>
            <CustomLink to="/tech101">Tech 101</CustomLink>
            <CustomLink to="/computer">Computer</CustomLink>
            <CustomLink to="/television">Television</CustomLink>
            <CustomLink to="/gaming">Gaming</CustomLink>
            <CustomLink to="/internet">Internet</CustomLink>
            <CustomLink to="/smartphone">Smartphone</CustomLink>
            <CustomLink to="/streaming">Streaming</CustomLink>
            <CustomLink to="/wearable">Wearable</CustomLink>
            <CustomLink to="/appointment">Appointment</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </ol>
        )}
      </nav>
    </header>
  );
}

export function CustomLink({ to, children, onClick, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""} onClick={onClick}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
