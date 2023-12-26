import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import { BurgerMenu } from 'react-burger-menu';


export default function Navbar() {
  return (
  // <BurgerMenu items={[
  //   { label: "Computer", href: "/computer" },
  //   { label: "Television", href: "/television" },
  //   { label: "Smartphone", href: "/smartphone" },
  //   { label: "Internet", href: "/internet" },
  //   { label: "Streaming", href: "/streaming" },
  // ]}>
    <nav className="nav">
      
      <Link to="/home" className="site-title">
        AA Tech Support
      </Link>
      
      <ul className="menu-items">
        <CustomLink to="/computer">Computer</CustomLink>
        <CustomLink to="/television">Television</CustomLink>
        <CustomLink to="/smartphone">Smartphone</CustomLink>
        <CustomLink to="/internet">Internet</CustomLink>
        <CustomLink to="/streaming">Streaming</CustomLink>
        {/* <CustomLink to="/contact">Contact Us</CustomLink> */}
        <CustomLink to="/about">About</CustomLink>
      </ul>
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
