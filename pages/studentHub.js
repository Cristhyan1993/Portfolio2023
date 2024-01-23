import React from "react";
import studentHub1 from "../public/studentHub1.png";
import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";


const StudentHubApp = () => {

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh]  bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={studentHub1}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2">Student Hub App</h2>
          <h3>React JS / CSS / Javascript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-[#007934]">
          <p className="text-xl text-red-700">Project</p>
          <h2>Overview</h2>
          <p className="pt-12 text-lg text-gray-700">
            {" "}
            This student hub app is my first group project. It is a full stack app, created with React, CSS, JavaScript, and ElephantSQL a cloud based relational database. The brief for this project was to create an app which would benefit a coding bootcamper. Our group came up with the idea of a student hub where a student can search for topics covered in the course such as HTML and UI/UX. Then the app outputs a definition of the topic alongside some useful links which we populated in the database. 
            
          </p>
          <p className="pt-12 text-lg text-gray-700">We also added a nav bar with links to the learning tools a student utilises on a daily basis such as Github, Zoom, Slack and Notion.
I enjoyed this project as it was a great fun working as a team and we could learn from each other which was really beneficial. We started this project from scratch. We had to plan our MVP, mini sprint, user journey/story, work in an agile method, ideate and always consider the UI/UX.
{" "}</p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          <button className="px-8 py-2 mt-4 text-[#fdfe7d]">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#007934]  text-[#fdfe7d]">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-xl">Technologies</p>
            <div className="grid frid-cols-3 md:grid-cols-1">
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
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
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer text-lg">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default StudentHubApp;
