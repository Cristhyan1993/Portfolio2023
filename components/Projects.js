import React from "react";
import Image from "next/image";
import Link from "next/link";
import imdb1 from "../public/imdbApp1.png";
import studentHub1 from "../public/studentHub1.png";
import weatherApp1 from "../public/weatherApp1.png";
import petBrB1 from "../public/petBrB1.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#D52B1E]">
        Projects
      </p>
      <h2 className="py-4 text-[#007934]">What I Have Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem title='Weather App' backgroundImg={weatherApp1} projectUrl='/weatherApp'/>
        <ProjectItem title='Imdb Top 100' backgroundImg={imdb1} projectUrl='/movieApp'/>
        <ProjectItem title='Student Hub' backgroundImg={studentHub1} projectUrl='/studentHub'/>
        <ProjectItem title='PetBrb' backgroundImg={petBrB1} projectUrl='/finalProjectApp'/>
      </div>
      </div>
    </div>
  );
};

export default Projects;
