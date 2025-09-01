import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Portofolio Website",
    description: "Website portofolio sederhana dengan React.",
    github: "https://github.com/awa/portofolio", 
    deploy: "https://portofolioawa.netlify.app",  
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black pt-12 px-6">
      <h1 className="text-4xl font-bold text-pink-500 mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-1 gap-6 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition w-80"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:underline"
              >
                <FontAwesomeIcon icon={faGlobe} /> Deploy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
