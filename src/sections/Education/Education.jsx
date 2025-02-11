import React from "react";
import "./Education.css";

const Education = () => {
  const change = [
    {
      id: 1,
      title: "HMTL",
      icon: "assets/icons/knowledge/html5.svg",
      color: "#f8a307"
    },
    {
      id: 2,
      title: "CSS",
      icon: "assets/icons/knowledge/css.svg",
      color: "#6b1ca0"
    },
    {
      id: 3,
      title: "JavaScript",
      icon: "assets/icons/knowledge/javascript.svg",
      color: "#eef923"
    },
    {
      id: 4,
      title: "React",
      icon: "assets/icons/knowledge/react.svg",
      color: "#369bf4"
    },
    {
      id: 5,
      title: "Next.js",
      icon: "assets/icons/knowledge/nextdotjs.svg",
      color: "#3c3d3e"
    },
    {
      id: 6,
      title: "Node.js",
      icon: "assets/icons/knowledge/nodedotjs.svg",
      color: "#04cc12"
    },
    {
      id: 7,
      title: "Git",
      icon: "assets/icons/knowledge/git.svg",
      color: "#f88007"
    },
    {
      id: 8,
      title: "Github",
      icon: "assets/icons/knowledge/github.svg",
      color: "#ffffff"
    },
    {
      id: 9,
      title: "Bootstrap",
      icon: "assets/icons/knowledge/bootstrap.svg",
      color: "#7a097b"
    },
    {
      id: 10,
      title: "SASS",
      icon: "assets/icons/knowledge/sass.svg",
      color: "#f533d8"
    },
    {
      id: 11,
      title: "Tailwind",
      icon: "assets/icons/knowledge/tailwindcss.svg",
      color: "#45efff"
    },
    {
      id: 12,
      title: "Figma",
      icon: "assets/icons/knowledge/figma.svg",
      color: "#a17fff"
    },
    {
      id: 13,
      title: "Canvas",
      icon: "assets/icons/knowledge/canva.svg",
      color: "#0044e4"
    },
    {
      id: 14,
      title: "UX/UI Design",
      icon: "assets/icons/knowledge/design.svg",
      state: "NEW!!",
      color: "#c1c1c1"
    }
  ];

  return (
    <div className="container" id="education">
      <h2> Knowledge</h2>
      <div className="knowledge-container">
        {change.map((e) => (
          <div className="knowledge-item" key={e.id} style={{ "--hover-color": e.color }}>
            {e.state && <span className="new">{e.state}</span>}
            <img src={e.icon} alt={`${e.title} icon`} />
            <h4>{e.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;