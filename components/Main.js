import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import TypeAnimationComp from "./service/TypeAnimation";

const Main = () => {
  return (
    <div id="home" className="w-full translate-y-20 h-[100vh]">
      <div className="max-w-[1080px] w-full mx-auto h-[100%] p-4 flex justify-center flex-wrap items-center gap-24">
        <div className=" flex flex-col flex-1 gap-6 text-center md:text-start">
          <h1 className="text-primaryLight">
            <TypeAnimationComp />
          </h1>
          <h2 className="text-primary">Full Stack Web Developer</h2>
          <p className="text-secondaryLight">
            Having completed a <span className="text-primary font-bold">FULL STACK</span> bootcamp I learned the fundamentals of <span className="text-primary font-bold">web development, version control, and collaborating as a team.</span> I relish the coding challenge & love learning something new every day.
          </p>
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="rounded-sm p-3 cursor-pointer hover:scale-110 ease-in duration-300 flex flex-1 bg-red-800 text-secondaryLight justify-center">
              <Link href='http://www.linkedin.com/in/criscalderon' target="_blank">
              <FaLinkedinIn size={30} />
              </Link>
            </div>
            <div className="rounded-sm p-3 cursor-pointer hover:scale-110 ease-in duration-300 flex flex-1 bg-secondaryDark text-secondaryLight justify-center">
              <Link href='http://www.github.com/Cristhyan1993' target="_blank"><FaGithub size={30} /></Link>
            </div>
            <div className="rounded-sm p-3 cursor-pointer hover:scale-110 ease-in duration-300 flex flex-1 bg-primaryDark text-secondaryLight justify-center">
              <Link href='https://drive.google.com/file/d/1ZP1ebpFy-KYjIXeb-QaPN2tT4g1G50wN/view?usp=sharing' target="_blank">
              <BsFillPersonLinesFill size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className=" justify-center flex flex-none">
          <Image src="/profileMain.png" width={250} height={250} alt="logo" className="h-[200px] md:h-[300px] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Main;
