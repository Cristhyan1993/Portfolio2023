import React from "react";
import ProjectDetails from "@/components/ProjectDetails";

const SeenIt = () => {
  const project = {
    title: "my-GMZ",
    subHeading: "See whats trending, what your friends watched, review your films.",
    technologies: ['React', 'Figma', 'Mongo DB', 'TMDB api', 'Node JS', 'Material UI'],
    details: {
      whatIsIt: "Seen It is a solution for avid movie viewers who want to share the movies they have watched with friends and review it. The web- based application makes it easy to create your own profile, search for the movie they have seen and add a personal review so friends can see it.",
      whyDidICreateThis: "After watching a lot of movies I sometimes tend to forget what movies I have seen and whether it is worth watching again or if I would recommend it to a friend. So I thought it would be helpful to have my own library of movies I have seen with my own ratings so friends can see whether I enjoyed it or not. I also wanted to challenge myself by creating a full stack project and explore new technologies such as Material UI and JWT tokens.",
      whatDidILearn: "They key points I learned from this project were version control which includes creating new branches, merging to develop and resolving conflicts. Data validation and sanitising code when users would submit a form to the backend server. Validating users and protecting routes. Practiced a lot of pair programming and articulating.",
      logIn: {
        username:"molly@gmail.com",
        password: "treatz",
        note: "Please note the web app runs on a free server and can take a minute to spin."
      }
    },
    image: "/seenIt.png",
    links: {
      github: "https://github.com/TheKingSnoop/imdb-project-ui",
      url: "https://main.d1lodbms672x7t.amplifyapp.com/"
    }
  }

  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default SeenIt;



