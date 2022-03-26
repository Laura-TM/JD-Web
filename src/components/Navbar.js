import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const collapseMenu = () => setToggle(false);

  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="navbar-left-side">
            <NavLink to="/" className="navbar-logo">
              <img
                alt="LTM"
                src="/images/LTM-Logo-Design.png"
                className="app-logo"
              />
            </NavLink>
          </div>
          <div className="navbar-right-side">
            <div className="menu-icon" onClick={handleToggle}>
              <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={toggle ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink className="nav-links" to="/" onClick={collapseMenu}>
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/about"
                  onClick={collapseMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/projects"
                  onClick={collapseMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/skills"
                  onClick={collapseMenu}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/contact"
                  onClick={collapseMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
