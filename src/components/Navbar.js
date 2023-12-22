import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./nav.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        AA Tech Support
      </Link>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {<img src="./images/hamburger.svg" height="50" width="50" />}
      </button>
      {isMenuOpen && (
        <ul className="menu-items">
          <CustomLink to="/computer">Computer</CustomLink>
          <CustomLink to="/television">Television</CustomLink>
          <CustomLink to="/smartphone">Smartphone</CustomLink>
          <CustomLink to="/internet">Internet</CustomLink>
          <CustomLink to="/streaming">Streaming</CustomLink>
        </ul>
      )}
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
