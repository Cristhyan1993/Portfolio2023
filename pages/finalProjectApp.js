import React from "react";
import petBrB1 from "../public/petBrB1.png";
import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

import Slideshow from "@/components/Slideshow";

const StudentHubApp = () => {

  const images = [
   'petBrB1.png',
   'petBrB2.png',
   'petBrB3.png',
   'petBrB4.png',
   'petBrB5.png'
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh]  bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={petBrB1}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2 ">PetBrB App</h2>
          <h3>Next JS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-[#007934]">
          <p className="text-xl text-red-700">Project - NOTE that app was built for desktop</p>
          <h2>Overview</h2>
          <p className="pt-12 text-lg text-gray-700">
            {" "}
            This pet service app was a 4-week project which I worked on with a group of other developers. It is a full stack app created with Next JS. The brief for this project was to create an app which solves a problem currently facing the UK. Over the past 3 years there has been a massive increase in the number of pet owners in the UK and with workers returning to the office we created an app that we thought will reduce the number of pet abandonment. The app allows pet owners to find pet sitters by searching by city, budget and service. 
          </p>
          <p className="pt-12 text-lg text-gray-700">Our app also allows pet sitters to create a profile by logging in with their google account and completing a sign up form.
I learned a lot from this project as the first week was solely on planning, creating a manifesto, ideating, planning sprints, what we wanted in our MVP, what tech stacks we will use, market research, and UX/UI. The remaining 3 weeks where spent coding and creating the app working in an agile way.

{" "}</p>
          <Link href="https://petbrb.vercel.app/" target="_blank"><button className="px-8 py-2 mt-4 mr-8 text-[#fdfe7d]">Demo</button></Link>
          <button className="px-8 py-2 mt-4 text-[#fdfe7d]">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#007934] text-[#fdfe7d]">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-xl">Technologies</p>
            <div className="grid frid-cols-3 md:grid-cols-1">
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node JS
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Elephant SQL
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Figma
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextAuth
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.js
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer text-lg">Back</p>
        </Link>
      </div>
      {/* <Herosection/> */}
      <Slideshow images={images}/>
    </div>
  );
};

export default StudentHubApp;
