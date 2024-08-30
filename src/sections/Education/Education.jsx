import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

const Education = () => {
  const level = [
    {
      id: 1,
      title: "HTML",
      points: 9,
    },
    {
      id: 2,
      title: "CSS",
      points: 8,
    },
    {
      id: 3,
      title: "JavaScript",
      points: 7,
    },
    {
      id: 4,
      title: "SASS",
      points: 6,
    },
    {
      id: 5,
      title: "React",
      points: 6,
    },
    {
      id: 6,
      title: "Git",
      points: 7,
    }
  ];

  const renderIcons = (points) => {
    const totalIcons = 10;
    const visibleIcons = Array.from({ length: points }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faBolt}
        className="icon-visible"
        style={{ width: "15px", height: "15px", padding: "0 5px 0 0" }}
      />
    ));
    const fadedIcons = Array.from({ length: totalIcons - points }, (_, i) => (
      <FontAwesomeIcon
        key={i + points}
        icon={faBolt}
        className="icon-faded"
        style={{ width: "15px", height: "15px", padding: "0 5px 0 0" }}
      />
    ));
    return [...visibleIcons, ...fadedIcons];
  };

  return (
    <div className="container" id="education">
      <h2>Education & Knowledge</h2>
      <div className="knowledge-container">
        <div className="education">
          <h3>Education</h3>
          <div className="education-main">
            <div className="item">
              <FontAwesomeIcon
                icon={faCode}
                className="education-icon"
              />
              <h4>Web Developer</h4>
              <p>
                Complete course for web developers that includes basic knowledge
                of HTML - CSS, also SASS GIT and SEO bases
              </p>
            </div>
            <div className="item">
              <FontAwesomeIcon
                icon={faSquareJs}
                className="education-icon"
              />
              <h4>JavaScript</h4>
              <p>
                Includes basic knowledge of JavaScript, arrays basic knowledge,
                use of promises, async promises and API
              </p>
            </div>
            <div className="item">
              <FontAwesomeIcon
                icon={faReact}
                className="education-icon"
              />
              <h4>React</h4>
              <p>
                Basic knowledge of React, including all info about components,
                context and the use of this ones.
              </p>
            </div>
          </div>
          <div className="education-new">
            <h3>New Knowledge</h3>
            <div className="education-newC">
              <div className="item-new">
                <FontAwesomeIcon icon={faFigma} className="education-icon" />
                <h4>Figma</h4>
              </div>
              <div className="item-new">
                <h4>Canvas</h4>
              </div>
              <div className="item-new">
                <h4>Next.js</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-container">
            {level.map((l) => (
              <div className="progress" key={l.id}>
                <h4>
                  {l.title} {l.points}/10
                </h4>
                <span>{renderIcons(l.points)}</span>
              </div>
            ))}
            <span>Cooming soon Next.js...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
