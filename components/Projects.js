import React from "react";
import trailerz from "../public/trailerzLandingPage.png";
import seenIt from "../public/seenIt.png";
import coolQuotes from "../public/coolQuotesLandingPage.png";
// import myGMZ from "../public/myGMZ.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {

  const projects = [
    {
      title: "Seen It",
      description: "A full stack app where users can share, rate and review movies.",
      image: seenIt,
      url: "/seenIt"
    },
    {
      title: "my-GMZ",
      description: "A video games blog",
      image: "/myGMZ.png",
      url: "/my-gmz"
    },
    {
      title: "NGU Website",
      description: "CrossFit Gym",
      image: "/nguWebsite.png",
      url: "/ngu-crossfit"
    },
    {
      title: "Cool Quotes",
      description: "A web app where users can share their favourite quotes.",
      image: coolQuotes,
      url: "/coolQuotes"
    },
    {
      title: "Trailerz",
      description: "A web app where users can view movie trailers.",
      image: trailerz,
      url: "/trailerz"
    },
  ]
  return (
    <div id="projects" className="w-full my-[200px]">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-8 translate-y-20">
        <h2 className="text-primaryLight uppercase tracking-widest text-center">
          Projects
        </h2>
        <div className="flex flex-wrap gap-4 w-full justify-center customAnimate">
          {
            projects.map(project => (
              <ProjectItem key={project.title} project={project} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
