'use client'

import React from "react";
import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import trailerz from "../public/trailerzLandingPage.png"

const Trailerz = () => {
  return (
    <div className="w-full font-changa">
      <div className="w-screen h-[50vh] lg:h=[40vh] relative flex justify-center">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={trailerz}
          alt="project"
        />
        <div className="absolute w-full px-4 lg:px-10 md:px-20 max-w-[1240px] bottom-1/4 lg:mx-auto md:mx-24 text-[#fdfe7d] z-10">
          <h2 className="py-2">Trailerz</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-4 md:mx-20 lg:mx-auto lg:px-10 py-2">
      <p className="text-xl text-red-700">
            Project
          </p>
          <h2 className="text-[#007934]">
            Overview
          </h2>
      </div>

      <div className="max-w-[1240px] mx-4 md:mx-20 lg:mx-auto lg:px-10 grid grid-cols-12 grid-rows-5 gap-2">
        <div className="col-span-12 row-span-5 md:col-span-8 lg:col-span-9 text-gray-700">
          
          <h3 className="text-lg">
            What is it?
          </h3>
          <p>
            Trailerz is a web app where the user can see the current top trending movies or search a movie to view the movie trailer and other details such as the description and rating.          </p>
          <h3 className="pt-4 text-lg">
            Why did I create this?
          </h3>
          <p>
          I wanted to explore the TMDB api and thought it would be a good idea to make a web app where users can view the official movie trailer. I also wanted to try some CSS styles I learned to improve the appearance of a web app.
          </p>
          <h3 className="pt-4 text-lg">
            What did I learn?
          </h3>
          <p>
          Making requests to third party APIs and how to integrate them into a project. Using CSS to neatly arrange items how I planned to.
          </p>
          <Link href="https://cris-trailerz.netlify.app/" target="_blank">
            <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#007934] text-[#fdfe7d] font-bold hover:scale-110 ease-in duration-300">Demo</button>
          </Link>
          <Link href="https://github.com/Cristhyan1993/trailerz" target="_blank">
            <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#D52B1E] text-[#fdfe7d] font-bold mx-5 hover:scale-110 ease-in duration-300">Code</button>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 row-span-3 drop-shadow-md rounded-sm p-4 bg-[#FDFED8] text-[#007934]">
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TMDB api
              </p>
            </div>
          </div>
        </div>
      </div>
        <Link href="/#projects">
          <p className="mx-4 md:mx-auto p-2 underline cursor-pointer text-lg w-12">Back</p>
        </Link>
    </div>


  );
};

export default Trailerz;
