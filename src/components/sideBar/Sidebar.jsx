import React, { useState } from "react";
import "./sideBar.css"

export const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        if (isDarkMode) {
          document.body.classList.add("light-theme");
        } else {
          document.body.classList.remove("light-theme");
        }
        setIsDarkMode(!isDarkMode);
      };

  return (
    <div className="sideBar">
        <ul className="sideBar-items">
          <li className="sideBar-item"><img src="assets/icons/navBar/w-home.svg" alt="home icon"/></li>
          <li className="sideBar-item"><img src="assets/icons/navBar/Experience.svg" alt="Experience icon"/></li>
          <li className="sideBar-item"><img src="assets/icons/navBar/Knowledge.svg" alt="knowledge icon"/></li>
          <li className="sideBar-item"><img src="assets/icons/navBar/Contact.svg" alt="contact icon"/></li>
        </ul>
      <div className="sideBar-options">
        <img src="assets/icons/navBar/language.svg" alt="language icon" />
        <img src={isDarkMode ? "assets/icons/navBar/moon.svg" : "assets/icons/navBar/sun.svg"} onClick={toggleTheme} alt="color icon" />
      </div>
    </div>
  );
};
