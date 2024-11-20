import React from "react";
import ProjectDetails from "@/components/ProjectDetails";

const myGMZ = () => {
  const project = {
    title: "my-GMZ",
    subHeading: "Blog showcasing my favourite games and reviews.",
    technologies: ["JavaScript", "CSS", "React", "RAWG API"],
    details: {
      whatIsIt: "My personal blog where I wanted to share my thoughts on games I have played over the years.",
      whyDidICreateThis: "Wanted to create a fully responsive web page and use the RAWG API to request and manipulate the data",
      whatDidILearn: "Learned how to create and reuse components, dynamic routing with the react router."
    },
    image: "/my-GMZ.png",
    links: {
      github: "https://github.com/Cristhyan1993/game_blog",
      url: "https://crisgameblog.netlify.app/"
    }
  }

  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default myGMZ;