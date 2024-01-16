import React from "react";
import Image from "next/image";
import Link from "next/link";
import imdb1 from "../public/imdbApp1.png";
import studentHub1 from "../public/studentHub1.png";
import weatherApp1 from "../public/weatherApp1.png";
import petBrB1 from "../public/petBrB1.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {

  const briefInfo = ["A weather app which displays weather information on a city","A web app that uses to imdb api to display information of a film","A full stack app which displays information on chosen topic","A full stack pet sitting app for pet carers/sitters"]
  return (
    <div id="projects" className="w-full translate-y-20 flex justify-start font-changa">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase py-4 flex justify-center text-[#D52B1E]">
        Projects
      </p>
      {/* <h2 className="py-4 text-[#007934] flex justify-center">What I have built</h2> */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 w-full justify-center">
        <ProjectItem title='Weather App' description={briefInfo[0]} backgroundImg={weatherApp1} projectUrl='/weatherApp'/>
        <ProjectItem title='IMDB Top 100' description={briefInfo[1]} backgroundImg={imdb1} projectUrl='/movieApp'/>
        <ProjectItem title='Student Hub' description={briefInfo[2]} backgroundImg={studentHub1} projectUrl='/studentHub'/>
        <ProjectItem title='PetBrb' description={briefInfo[3]} backgroundImg={petBrB1} projectUrl='/finalProjectApp'/>
      </div>
      </div>
    </div>
  );
};

export default Projects;
