import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const collapseMenu = () => setToggle(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            alt="LTM"
            src="/images/LTM-small.png"
            className="app-logo"
          />
        </Link>
        <div className="menu-icon" onClick={handleToggle}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={collapseMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={collapseMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-links" onClick={collapseMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={collapseMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={collapseMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
