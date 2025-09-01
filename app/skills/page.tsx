"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

import "../../components/Skills.css";

export default function Skills() {
  return (
    <div className="skills-page">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">My Skills</h1>
      <div className="skills-grid">
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} style={{ color: "#e34c26", fontSize: "3rem" }} />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#264de4", fontSize: "3rem" }} />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e", fontSize: "3rem" }} />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb", fontSize: "3rem" }} />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faGithub} style={{ color: "white", fontSize: "3rem" }} />
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faGitAlt} style={{ color: "#f1502f", fontSize: "3rem" }} />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faMobile} style={{ color: "#02569B", fontSize: "3rem" }} />
          <p>Flutter</p>
        </div>
      </div>
    </div>
  );
}
