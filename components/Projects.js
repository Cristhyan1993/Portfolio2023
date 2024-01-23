import React from "react";
import Trailerz from "../public/trailerzLanding.png";
import studentHub1 from "../public/studentHub1.png";
import coolQuotes from "../public/coolQuotesLanding.png";
import petBrB1 from "../public/petBrB1.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {

  const briefInfo = ["A web app where users can share their favourite quotes.","A web app where users can view movie trailers","A full stack app which displays information on chosen topic","A full stack pet sitting app for pet carers/sitters"]
  return (
    <div id="projects" className="w-full translate-y-20 flex justify-start font-changa">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase py-4 flex justify-center text-[#D52B1E]">
        Projects
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 w-full justify-center">
        <ProjectItem title='Cool Quotes' description={briefInfo[0]} backgroundImg={coolQuotes} projectUrl='/coolQuotes'/>
        <ProjectItem title='Trailerz' description={briefInfo[1]} backgroundImg={Trailerz} projectUrl='/trailerz'/>
        <ProjectItem title='Student Hub' description={briefInfo[2]} backgroundImg={studentHub1} projectUrl='/studentHub'/>
        <ProjectItem title='PetBrb' description={briefInfo[3]} backgroundImg={petBrB1} projectUrl='/finalProjectApp'/>
      </div>
      </div>
    </div>
  );
};

export default Projects;
