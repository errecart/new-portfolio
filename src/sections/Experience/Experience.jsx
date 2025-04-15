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
      date: "2024",
    },
    {
      id: 2,
      title: "PEPOLA",
      image: "assets/image/PEPOLA.jpg",
      text: "Creation of the page to video game studio",
      link:"https://pepola.in",
      categories: ["React", "CSS", "JavaScript"],
      date: "2024",
    },
    {
      id: 3,
      title: "Visdan Agency",
      image: "assets/image/VISDAN.png",
      text: "Frontend developer position for a digital marketing studio, also developing the studio's website",
      link:"https://www.visdan.agency",
      categories: ["Next.js", "CSS", "JavaScript", "Figma", "Node.js"],
      date: "2024 - Present",
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
                <span className="date">{e.date}</span>
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

    </div>
  );
};

export default Experience;
