import React from "react";
import ProjectDetails from "@/components/ProjectDetails";

const myGMZ = () => {
  const project = {
    title: "my-GMZ",
    subHeading: "Blog showcasing my favourite games and reviews.",
    technologies: ["JavaScript", "CSS", "React", "RAWG API"],
    details: {
      whatIsIt: " A gaming-focused blog where I shares insights, tips, and personal experiences about video games. Covering topics like gameplay strategies, game reviews, and industry trends, the blog is a platform for gaming enthusiasts to connect and explore my passion for games like Elden Ring and Rocket League. Designed with a clean, user-friendly interface, it provides an engaging space for readers to dive into the world of gaming.",
      whyDidICreateThis: "Wanted to create a fully responsive web page and use the RAWG API to request and manipulate the data",
      whatDidILearn: "Learned how to create reuseable components, dynamic routing with the react router."
    },
    image: "/myGMZ.png",
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