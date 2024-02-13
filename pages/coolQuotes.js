'use client'

import React from "react";
import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import coolQuotes from "../public/coolQuotesLandingPage.png"

const CoolQuotes = () => {
  return (
    <div className="w-full font-changa">
      <div className="w-screen h-[50vh] lg:h=[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={coolQuotes}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fdfe7d] z-10 p-2">
          <h2 className="py-2">Cool Quotes</h2>
          <h3>Full stack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-4 md:mx-20 p-2">
        <p className="text-md text-red-700">
          Project - (Please note: there is a bug in the deployed version where new quotes do not display on the home page.)
        </p>
        <h2 className="text-[#007934]">
          Overview
        </h2>
      </div>

      <div className="max-w-[1240px] mx-4 md:mx-20 p-2 grid md:grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-8 lg:col-span-10 text-gray-700">
          <h3 className="text-lg">
            What is it?
          </h3>
          <p>
            Cool Quotes is a web app where users/friends can share and see their favourite quotes among other users. You can also filter, edit and delete existing quotes by signing in.
          </p>
          <h3 className="pt-4 text-lg">
            Why did I create this?
          </h3>
          <p>
            We all have quotes in our head we heard from a movie or song so I thought it would be fun to have it on a platform where we can share this. I also wanted to explore the benefits of using the Next JS framework to create a full stack app. Using Next JS allowed me to see how Next Auth can be integrated into a project so users can sign in with their google accounts.
          </p>
          <h3 className="pt-4 text-lg">
            What did I learn?
          </h3>
          <p>
            The key points I took from this project was how Next JS can also handle backend tasks using serverless functionality and can efficiently manage routes with the file-based routing.          </p>
          <Link href="https://cool-quotes.vercel.app/" target="_blank">
            <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#007934] text-[#fdfe7d] font-bold hover:scale-110 ease-in duration-300">Demo</button>
          </Link>
          <Link href="https://github.com/Cristhyan1993/cool-quotes" target="_blank">
            <button className="text-center w-24 my-4 p-2 rounded-sm bg-[#D52B1E] text-[#fdfe7d] font-bold mx-5 hover:scale-110 ease-in duration-300">Code</button>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-4  lg:col-span-2 drop-shadow-md rounded-sm p-4 bg-[#FDFED8] text-[#007934]">
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
                TailWind
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next Auth
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongo DB
              </p>
            </div>
          </div>
        </div>
        <p className="underline cursor-pointer text-lg w-12"><Link href="/#projects">Back</Link></p>
      </div>
    </div>


  );
};

export default CoolQuotes;
