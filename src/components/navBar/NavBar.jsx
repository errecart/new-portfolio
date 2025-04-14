import React from "react";
import "./NavBar.css";

const NavBar = () => {

  return (
    <div className="navBar">
      <div className="navbar-container">
        <ul className="navbar-items">
          <a href="#main"><li className="navbar-item"><img src="assets/icons/navBar/w-home.svg" alt="home icon"/>Home</li></a>
          <a href="#education"><li className="navbar-item"><img src="assets/icons/navBar/Knowledge.svg" alt="home icon"/>Education</li></a>
          <a href="#experience"><li className="navbar-item"><img src="assets/icons/navBar/Experience.svg" alt="home icon"/>Experience</li></a>
          <a href="#contact"><li className="navbar-item"><img src="assets/icons/navBar/Contact.svg" alt="home icon"/>Contact</li></a>
        </ul>
        <a href="assets/CV/JuanIgnacioErrecartCV.pdf" download="Juan Ignacio Errecart CV"><button><img src="assets/icons/navBar/download.svg" alt="download icon" /> Download CV</button></a>
      </div>
    </div>
  );
};

export default NavBar;
