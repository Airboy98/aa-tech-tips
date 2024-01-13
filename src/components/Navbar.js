import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import { bubble as Menu, right } from "react-burger-menu";
import "./nav.css";
import { BurgerMenu } from "react-burger-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the value as needed to determine when to show the button
      setShowButton(window.innerWidth < 768);
      setIsOpen(false); // Close the menu if the button is hidden
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially

    return () => window.removeEventListener("resize", handleResize);
  }, [showButton]);

  const toggleMenu = () => {
    if (showButton) {
      setIsOpen(!isOpen);
    }
  };

  return (
    // <BurgerMenu items={[
    //   { label: "Computer", href: "/computer" },
    //   { label: "Television", href: "/television" },
    //   { label: "Smartphone", href: "/smartphone" },
    //   { label: "Internet", href: "/internet" },
    //   { label: "Streaming", href: "/streaming" },
    // ]}>
    <nav className="nav">
      <Link to="/" className="site-title">
        AA Tech Tips
      </Link>
      {showButton && (
        <button onClick={toggleMenu} className="hamburger-menu">
          <img src="/images/hamburger.svg" />
        </button>
      )}
      {/* <Menu isOpen={isOpen} right={true}> */}
      {!showButton || isOpen ? (
        <ul className="menu-items">
          <CustomLink to="/computer">Computer</CustomLink>
          <CustomLink to="/television">Television</CustomLink>
          <CustomLink to="/smartphone">Smartphone</CustomLink>
          <CustomLink to="/internet">Internet</CustomLink>
          <CustomLink to="/streaming">Streaming</CustomLink>
          {/* <CustomLink to="/contact">Contact Us</CustomLink> */}
          <CustomLink to="/appointment">Appointment</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      ) : null}
      {/* </Menu> */}
    </nav>
    // </BurgerMenu>
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
