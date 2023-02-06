import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#D52D1E]">
          Skills
        </p>
        <h2 className="py-4 text-[#007934]">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/shopify.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SHOPIFY</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
