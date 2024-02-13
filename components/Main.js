import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import TypeAnimationComp from "./service/TypeAnimation";

const Main = () => {
  return (
    <div id="home" className="w-full text-center font-changa">
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center translate-y-20 ">
        <div>
          <h1 className="py-4 text-[#007934]">
            <TypeAnimationComp/>
          </h1>
          <h2 className="py-2 text-gray-700">Full Stack Web Developer</h2>
          <div className="flex justify-center py-4"><Image src="/profileMain.png" width={250} height={250} alt="logo"/></div>
          <p className="py-4 text-gray-600 md:max-w-[70%] m-auto">
          Having completed a <span className="text-[#007934] font-bold">FULL STACK</span> bootcamp I learned the fundamentals of <span className="text-[#007934] font-bold">web development, version control, and collaborating as a team.</span> I relish the coding challenge & love learning something new every day.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <Link href='http://www.linkedin.com/in/criscalderon' target="_blank"><FaLinkedinIn size={30}/></Link>
            </div>
            <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <Link href='http://www.github.com/Cristhyan1993' target="_blank"><FaGithub size={30}/></Link>
            </div>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
              <AiOutlineMail />
            </div> */}
            <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <Link href='/#contact'><BsFillPersonLinesFill size={30}/></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
