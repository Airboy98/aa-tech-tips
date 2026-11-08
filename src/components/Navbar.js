import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

export const MENU_PAGES = [
  { to: "/tech-byte", label: "Tech Byte", icon: "chat" },
  { to: "/tech101", label: "Tech 101", icon: "school" },
  { to: "/computer", label: "Computer", icon: "computer" },
  { to: "/television", label: "Television", icon: "tv" },
  { to: "/gaming", label: "Gaming", icon: "sports_esports" },
  { to: "/internet", label: "Internet", icon: "wifi" },
  { to: "/smartphone", label: "Smartphone", icon: "smartphone" },
  { to: "/streaming", label: "Streaming", icon: "live_tv" },
  { to: "/wearable", label: "Wearable", icon: "watch" },
  { to: "/ai", label: "AI / SI", icon: "smart_toy" },
  { to: "/services", label: "Services", icon: "support_agent" },
  { to: "/about", label: "About", icon: "info" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setshowBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the value as needed to determine when to show the button
      setshowBurger(window.innerWidth < 1100);
      if (window.innerWidth >= 1100) {
        setIsOpen(false); // Close the menu if the window width is greater than or equal to 1100
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
          <img src="/site-logo.png" alt="" height="50" width="50" />
        </Link>
        {showBurger && (
          <label className="hamburger-menu">
            <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
          </label>
        )}
        {showBurger ? (
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul>
              {MENU_PAGES.map(({ to, label, icon }) => (
                <CustomLink key={to} to={to} onClick={closeMenu}>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    {icon}
                  </span>
                  {label}
                </CustomLink>
              ))}
            </ul>
          </div>
        ) : (
          <ol>
            <CustomLink to="/tech-byte">Tech Byte</CustomLink>{" "}
            <CustomLink to="/tech101">Tech 101</CustomLink>
            <CustomLink to="/computer">Computer</CustomLink>
            <CustomLink to="/television">Television</CustomLink>
            <CustomLink to="/gaming">Gaming</CustomLink>
            <CustomLink to="/internet">Internet</CustomLink>
            <CustomLink to="/smartphone">Smartphone</CustomLink>
            <CustomLink to="/streaming">Streaming</CustomLink>
            <CustomLink to="/wearable">Wearable</CustomLink>
            <CustomLink to="/ai">AI / SI</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
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
