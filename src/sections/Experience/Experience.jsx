import React from "react";
import "./experience.css";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "GETOUT STUDIO",
      text: "creation of the page to video game studio",
      image: "assets/image/GETOUT.jpg",
      link:"https://getout-studio.com",
      categories: ["React", "CSS", "JavaScript" ,"Tailwind", "Figma", "API"],
    },
    {
      id: 2,
      title: "Visdan Agnecy",
      image: "assets/image/VISDAN.png",
      text: "Creaction of a App to make truco tournoments",
      link:"https://www.visdan.agency",
      categories: ["Next.js", "CSS", "JavaScript", "Figma", "Node.js"],
    },
    {
      id: 3,
      title: "PEPOLA",
      image: "assets/image/PEPOLA.jpg",
      text: "Creation of the page to video game studio",
      link:"https://pepola.in",
      categories: ["React", "CSS", "JavaScript", "API"],
    },
  ];

  return (
    <div className="container" id="experience">
      <h2>Experience</h2>
        <div className="experience">
          <div className="experience-container">
            {experience.map((e) => (
              <div className="item-e" key={e.id}>
                <a href={e.link} target="_blanck"><img src={e.image} alt="" /></a>
                <h4>{e.title}</h4>
                <p>{e.text}</p>
                <div style={{ display: "flex", flexWrap:"wrap", alignItems: "center", justifyContent: "center" }}>
                  {e.categories.map((category, index) => (
                    <span key={index} className="category">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="someProjects">
          <h2>Some Projects</h2>
          <div className="someProjects-container">
            <span>There are also some final projects from my studies and self creation</span>
            <ul>
              <a
                href="https://errecart.github.io/ImagineDragons-myProject/"
                target="_blanck"
                className="projects"
              >
                {" "}
                <li>Imagine Dragons Fanbase</li>
              </a>
              <a
                href="https://errecart.github.io/portfolio-web/"
                target="_blanck"
                className="projects"
              >
                <li>Last Portfolio</li>
              </a>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Experience;
