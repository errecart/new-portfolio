import React from "react";
import "./Main.css"

const Main = () => {

  return (
    <div className="container" id="main">
      <div className="main-container">
        <div className="main-title">
          <span>Front-end Developer</span>
          <h1>Juan Ignacio Errecart</h1>
        </div>
        <div className="main-img">
          <img src="assets/image/self.png" alt="my person"/>
        </div>
        <div className="main-data">
          <p>Front-end Developer with experience developing responsive and interactive web applications Further, i'm familiar with HTML, CSS; JavaScript and some modern frameworks such as React, Next.js and much more.</p>
          <a href="assets/CV/JuanIgnacioErrecartCV.pdf" download="Juan Ignacio Errecart CV"><button>Download CV</button></a>
        </div>
      </div>
    </div>
  );
};

export default Main;
