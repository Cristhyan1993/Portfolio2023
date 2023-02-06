import React, { useEffect, useState } from "react";
import weatherApp1 from "../public/weatherApp1.png";
import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
// import weatherApp from "../public/assets/projects/weatherApp.mp4"
import ReactPlayer from "react-player";
import Slideshow from "@/components/Slideshow";

const WeatherApp = () => {
  const images = [
    'weatherApp1.png',
    'weatherApp2.png',
    'weatherApp3.png',
    'weatherApp4.png',
  ];
  return (
    <div className="w-full">
    
      <div className="w-screen h-[50vh] lg:h=[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={weatherApp1}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2">Weather App</h2>
          <h3>React JS / CSS / Javascript</h3>
        </div>
      </div>
      
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-[#007934]">
          <p className="text-xl text-red-700">Project</p>
          <h2>Overview</h2>
          <p className="pt-12 text-lg text-gray-700">
            {" "}
            This is a weather App where the user inputs the name of a city and outputs the various weather properties of the chosen city. I used the OpenWeather API to get the current weather data including humidity, wind speed, wind direction visibility, sunrise and sunrise.
I chose to do this project as I believed it would be a great place to explore typescript and the react hooks - useState and useEffect. 
A blocker I encountered was the Unix timestamp provided by the API. I had to find a function which converted it to a 24 hr clock. I enjoyed exploring the API in this project and styling the app.
{" "}
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          <button className="px-8 py-2 mt-4 text-[#fdfe7d]">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#007934] text-[#fdfe7d]">
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2 text-[#fdfe7d]">Technologies</p>
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
                Openweather API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-lg">Back</p>
        </Link>
      </div>
      {/* <Herosection/> */}
      <Slideshow images = {images}/>
      </div>
     
    
  );
};

export default WeatherApp;
