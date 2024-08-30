import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    setIsDarkMode(!isDarkMode);
  };

  const btnMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="navBar">
      <FontAwesomeIcon
        icon={isDarkMode ? faMoon : faSun}
        onClick={toggleTheme}
        className="icon-color"
      />
      <div className="navBar-container">
        <h2>Portfolio</h2>
        <div className={`nav-list ${showMenu ? "show" : ""}`} on>
          <FontAwesomeIcon icon={faX} className="icon-x" onClick={closeMenu} />
          <ul>
            <a href="#main" onClick={closeMenu}>
              <li>Home</li>
            </a>
            <a href="#education" onClick={closeMenu}>
              <li>Education</li>
            </a>
            <a href="#experience" onClick={closeMenu}>
              <li>Experience</li>
            </a>
            <a href="#contact" onClick={closeMenu}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <FontAwesomeIcon icon={faBars} className="icon" onClick={btnMenu} />
      </div>
    </div>
  );
};

export default NavBar;
