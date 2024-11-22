import ProjectDetails from '@/components/ProjectDetails';
import React from 'react'

const ngu = () => {
    const project = {
        title: "NGU CrossFit",
        subHeading: "Website for a Crossfit Gym in La Paz, Bolivia",
        technologies: ["JavaScript", "CSS", "React", "Next.js"],
        details: {
          whatIsIt: "A website where users can find information such as membership prices, the timetables and contact details of a CrossFit Gym.",
          whyDidICreateThis: "To increase online presence and to attract more customers.",
          whatDidILearn: "Responsiveness and attention to detail espceially in the design phase."
        },
        image: "/nguWebsite.png",
        links: {
          github: "https://github.com/Cristhyan1993/ngu-website",
          url: "https://ngu-sigma.vercel.app/"
        }
      }
    
      return (
        <>
          <ProjectDetails project={project} />
        </>
      );
}

export default ngu