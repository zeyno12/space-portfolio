import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/hello1.png"
          title="Modern Animation Portfolio"
        />
        <ProjectCard
          src="/hello2.png"
          title="Interactive Website "
        />
        <ProjectCard
          src="/hello3.png"
          title="Textile Website"
        />
      </div>
    </div>
  );
};

export default Projects;
