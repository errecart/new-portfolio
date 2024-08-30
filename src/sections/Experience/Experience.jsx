import React from "react";
import "./experience.css";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: "creation of the page to video game studio",
      image: "/assets/image/PEPOLA.jpg",
      categories: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "TEGANEDEMANO",
      image: "/assets/image/TRUCO.jpg",
      text: "Creaction of a App to make truco tournoments",
      categories: ["Next.js", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "PEPOLA",
      image: "/assets/image//PEPOLA.jpg",
      text: "Creation of the page to video game studio",
      categories: ["React", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="container" id="experience">
      <h2>Experience</h2>
      <div className="container2">
        <div className="experience">
          <h3>Works</h3>
          <div className="experience-container">
            {experience.map((e) => (
              <div
                className="item-e"
                key={e.id}
                style={{ backgroundImage: `url(${e.image})` }}
              >
                <div className="item-data">
                  <h4>{e.title}</h4>
                  <p>{e.text}</p>
                  <span>{e.categories.join("-")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="someProjects">
          <h3>Some Projects</h3>
          <div className="someProjects-container">
            <span>There are also some final projects from my studies</span>
            <ul>
              <a
                href="https://errecart.github.io/ImagineDragons-myProject/"
                target="_blanck"
              >
                {" "}
                <li>Imagine Dragons Fanbase</li>
              </a>
              <a
                href="https://errecart.github.io/ecommerce--project/build"
                target="_blanck"
              >
                <li>E-commerce</li>
              </a>
              <a
                href="https://errecart.github.io/portfolio-web/"
                target="_blanck"
              >
                <li>Last Portfolio</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
