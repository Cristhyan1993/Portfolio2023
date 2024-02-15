'use client'

import React from "react";
import Image from "next/legacy/image";
import petBrB1 from "../public/petBrB1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const PetBrb = () => {
  const technologies = [
    'React',
    'CSS',
    'Node JS',
    'Figma', 'NextAuth',
    'Next JS',
    'Vercel',
    'Leaflet',
    'JavaScript',
    'Elephant SQL'
  ];

  return (
    <div className="w-full font-changa">
      <div className="w-screen h-[50vh] lg:h=[40vh] relative flex justify-center">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={petBrB1}
          alt="project"
        />
        <div className="absolute w-full px-4 lg:px-10 md:px-20 max-w-[1240px] bottom-1/4 lg:mx-auto md:mx-24 text-[#fdfe7d] z-10">
          <h2 className="py-2">PetBrb</h2>
          <h3>Full stack</h3>
        </div>
      </div>
    <div className="max-w-[1240px] mx-4 md:mx-20 lg:mx-auto lg:px-10 py-2">
          <p className="text-xl text-red-700">
            Project - (Please note: Some features are no longer working, database was taken down.)
          </p>
          <h2 className="text-[#007934]">
            Overview
          </h2>
</div>
      <div className="max-w-[1240px] h-full mx-4 md:mx-20 lg:mx-auto lg:px-10 grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-8  lg:col-span-9 text-gray-700">
          <h3 className="pt-4 text-lg">
            What is it?
          </h3>
          <p>
            PetBrb provides a solution for pet owners who need to find someone to care for their furry friends. The web-based application makes it simple for pet owners to locate and connect with pet sitters in their local area for services such as dog walking. This is the final project I worked along with 3 other members of my boot camp and had only 4 weeks to plan, design, create and present to a client.
          </p>
          <h3 className="pt-4 text-lg">
            Why did I create this?
          </h3>
          <p>
            The brief for this project was to create an app which solves a problem currently facing the UK. Over the past 3 years there has been a massive increase in the number of pet owners in the UK and with workers returning to the office we created an app that we thought will reduce the number of pet abandonment. The app allows pet owners to find pet sitters by searching by city, budget and service.
          </p>
          <h3 className="pt-4 text-lg">
            What did I learn?
          </h3>
          <p>
            I learned a lot from this project as the first week was solely on planning, creating a manifesto, ideating, planning sprints, what we wanted in our MVP, what tech stacks we will use, market research, and UX/UI. The remaining 3 weeks where spent coding and creating the app working in an agile way as a team. Every day we had stand-ups to discuss any blockers and what we aimed to accomplish daily and documented what we did. </p>
            <Link href="https://petbrb.vercel.app" target="_blank">
            <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#007934] text-[#fdfe7d] font-bold hover:scale-110 ease-in duration-300">Demo</button>
          </Link>
          <Link href="https://github.com/SchoolOfCode/bc13_final-project_front-end-refactor" target="_blank">
            <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#D52B1E] text-[#fdfe7d] font-bold mx-5 hover:scale-110 ease-in duration-300">Code</button>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-4 md:h-[470px] lg:col-span-3 drop-shadow-md rounded-sm p-4 mt-4 bg-[#FDFED8] text-[#007934]">
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {
                technologies.map((tech, index) => {
                  return (
                    <p key={index} className="py-2 flex items-center justify-">
                      <RiRadioButtonFill className="pr-1" />
                      {tech}
                    </p>
                  )
                })
              }
            </div>
          </div>
        </div>
       </div>
        <p className="mx-4 md:mx-auto p-2 underline cursor-pointer text-lg w-12"><Link href="/#projects">Back</Link></p>
    </div>
  );
};

export default PetBrb;