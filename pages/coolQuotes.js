import React from "react";
import ProjectDetails from "@/components/ProjectDetails";

const CoolQuotes = () => {
  const project = {
    title: "Cool Quotes",
    subHeading: "Create and share your favourite quotes with fiends",
    technologies: ["JavaScript", "CSS", "React", "Tailwind", "NextAuth", "Next.js", "MongoDB"],
    details: {
      whatIsIt: "Cool Quotes is a web app where users/friends can share and see their favourite quotes among other users. You can also filter, edit and delete existing quotes by signing in.",
      whyDidICreateThis: "We all have quotes in our head we heard from a movie or song so I thought it would be fun to have it on a platform where we can share this. I also wanted to explore the benefits of using the Next JS framework to create a full stack app. Using Next JS allowed me to see how Next Auth can be integrated into a project so users can sign in with their google accounts.",
      whatDidILearn: "The key points I took from this project was how Next JS can also handle backend tasks using serverless functionality and can efficiently manage routes with the file-based routing."
    },
    image: "/coolQuotesLandingPage.png",
    links: {
      github: "https://github.com/Cristhyan1993/cool-quotes",
      url: "https://cool-quotes.vercel.app/"
    }
  }

  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default CoolQuotes;
