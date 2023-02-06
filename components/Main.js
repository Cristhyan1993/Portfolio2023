import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p> */}
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#007934]">Cris</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Junior Web Developer</h1>
          <div className="flex justify-center"><Image src="/profileMain.png" width={500} height={500}/></div>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Having completed a coding bootcamp I have a concrete understanding of HTML, Javascript, React, CSS and currently exploring new tech stacks and technologies. I love learning
            something new everday.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <Link href='http://www.linkedin.com/in/criscalderon' target="_blank"><FaLinkedinIn /></Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <Link href='http://www.github.com/Cristhyan1993' target="_blank"><FaGithub /></Link>
            </div>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
              <AiOutlineMail />
            </div> */}
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <Link href='/#contact'><BsFillPersonLinesFill /></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
