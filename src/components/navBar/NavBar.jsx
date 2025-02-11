import React, { useState } from "react";
import "./NavBar.css";

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
      <img src={isDarkMode ? "assets/icons/navBar/moon.svg" : "assets/icons/navBar/sun.svg"} alt="color change icons" onClick={toggleTheme} className="icon-color"/>
      <div className="navBar-container">
        <a href="#main" onClick={closeMenu}>
          <h2>Portfolio</h2>
        </a>
        <div className={`nav-list ${showMenu ? "show" : ""}`} on>
          <img src="assets/icons/navBar/cross.svg" className="icon-x" onClick={closeMenu} alt="close icon" />
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
        <img src="assets/icons/navBar/bars.svg" className="icon" onClick={btnMenu} alt="open menu icon" />
      </div>
      <button className="changeLan">En</button>
    </div>
  );
};

export default NavBar;
