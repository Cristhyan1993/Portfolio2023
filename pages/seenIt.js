'use client'

import React from "react";
import Image from "next/legacy/image";
import seenIt from "../public/seenIt.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const SeenIt = () => {
  const techStack = ['React', 'Figma', 'Mongo DB', 'TMDB api', 'Node JS', 'Material UI']
  return (
    <div className="w-full font-changa">
      <div className="w-screen h-[50vh] lg:h=[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={seenIt}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2">Seen It</h2>
          <h3>Full stack</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-4 md:mx-20 p-2">
      <p className="text-xl text-red-700">
            Project
          </p>
          <h2 className="text-[#007934]">
            Overview
          </h2>
      </div>

      <div className="max-w-[1240px] mx-4 md:mx-20 p-2 grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-8 lg:col-span-10 text-gray-700">
          
          <h3 className="pt-4 text-lg">
            What is it?
          </h3>
          <p>
            Seen It is a solution for avid movie viewers who want to share the movies they have watched with friends and review it. The web- based application makes it easy to create your own profile, search for the movie they have seen and add a personal review so friends can see it.
          </p>
          <h3 className="pt-4 text-lg">
            Why did I create this?
          </h3>
          <p>
            After watching a lot of movies I sometimes tend to forget what movies I have seen and whether it is worth watching again or if I would recommend it to a friend. So I thought it would be helpful to have my own library of movies I have seen with my own ratings so friends can see whether I enjoyed it or not. I also wanted to challenge myself by creating a full stack project and explore new technologies such as Material UI and JWT tokens.
          </p>
          <h3 className="pt-4 text-lg">
            What did I learn?
          </h3>
          <p>
            They key points I learned from this project were version control which includes creating new branches, merging to develop and resolving conflicts. Data validation and sanitising code when users would submit a form to the backend server. Validating users and protecting routes. Practiced a lot of pair programming and articulating.
          </p>
          <div className="flex items-center flex-wrap space-x-5">
            <div className="bg-[#FDFED8] drop-shadow-md rounded-sm p-4 w-64 my-4">
              <h3 className="text-center">Try it Out</h3>
              <p className="py-2">login credentials:</p>
              <p>Username: <span className="font-bold">molly@gmail.com</span></p>
              <p>Password: <span className="font-bold">treatz</span></p>
            </div>
            <div>
            <Link href="https://main.d1lodbms672x7t.amplifyapp.com/" target="_blank">
              <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#007934] text-[#fdfe7d] font-bold hover:scale-110 ease-in duration-300">Demo</button>
            </Link>
            <Link href="https://github.com/TheKingSnoop/imdb-project-ui " target="_blank">
              <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#D52B1E] text-[#fdfe7d] font-bold mx-2 hover:scale-110 ease-in duration-300">Code</button>
            </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-2 drop-shadow-md rounded-sm p-4 bg-[#FDFED8] text-[#007934]">
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {techStack.map((tech, index) => {
                return (
                  <p key={index} className="py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    {tech}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        <p className="underline cursor-pointer text-lg w-12"><Link href="/#projects">Back</Link></p>
      </div>





    </div>



  );
};

export default SeenIt;



