import React from "react";
import imdb1 from "../public/imdbApp1.png";
import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

import Slideshow from "@/components/Slideshow";

const MovieApp = () => {

  const images = [
    'imdbApp1.png',
    'imdbApp2.png',
    'imdbApp3.png'
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh]  bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={imdb1}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2">Top 100 Movie App</h2>
          <h3>React / CSS / TypeScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-[#007934]">
          <p className="text-xl text-red-700">Project</p>
          <h2>Overview</h2>
          <p className="pt-12 text-lg text-gray-700">
            {" "}
            This is a Top 100 movies app. The data fetched from this project was an imdb API provided by Rapid API. This data includes the movie image, description, title, rating and a link to the trailer. The user types the title of a movie and the app filters though the list of 100 movies and returns the titles related to the search. I chose this project as I was exploring new CSS properties such as display flex. The aim of this project was to replicate similarities of the imdb website. An obstacle I encountered in this project was neatly structuring each card and getting the scroll to work. {" "}
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          <button className="px-8 py-2 mt-4 text-[#fdfe7d]">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#007934] text-[#fdfe7d]">
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">Technologies</p>
            <div className="grid frid-cols-3 md:grid-cols-1">
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-[#fdfe7d] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                imdb API
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

export default MovieApp;
