import React from "react";
import ProjectDetails from "@/components/ProjectDetails";

const Trailerz = () => {
  const project = {
    title: "Trailerz",
    subHeading: "Web app where you can see official movie trailers",
    technologies: ["JavaScript", "CSS", "React", "TMDB API"],
    details: {
      whatIsIt: "Trailerz is a web app where the user can see the current top trending movies or search a movie to view the movie trailer and other details such as the description and rating",
      whyDidICreateThis: "I wanted to explore the TMDB api and thought it would be a good idea to make a web app where users can view the official movie trailer. I also wanted to try some CSS styles I learned to improve the appearance of a web app.",
      whatDidILearn: "Making requests to third party APIs and how to integrate them into a project. Using CSS to neatly arrange items how I planned to."
    },
    image: "/trailerzLandingPage.png",
    links: {
      github: "https://github.com/Cristhyan1993/trailerz",
      url: "https://cris-trailerz.netlify.app/"
    }
  }

  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default Trailerz;
