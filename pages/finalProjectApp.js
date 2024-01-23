import React from "react";
import Image from "next/legacy/image";
import petBrB1 from "../public/petBrB1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const PetBrb = () => {
  return (
    <div className="w-full font-changa">
      <div className="w-screen h-[50vh] lg:h=[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={petBrB1}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2">PetBrb</h2>
          <h3>Full stack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-gray-700">
          <p className="text-xl text-red-700">
            Project - NOTE this was made for desktop only. 
          </p>
          <h2 className="text-[#007934]">
            Overview
          </h2>
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
        <div className="col-span-4 md:col-span-1 drop-shadow-md rounded-sm p-4 bg-[#FDFED8] text-[#007934]">
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">
              Technologies
            </p>
            <div className="grid frid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node JS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Elephant SQL
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Figma
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextAuth
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Leaflet
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-lg">Back</p>
        </Link>
      </div>
    </div>


  );
};

export default PetBrb;
