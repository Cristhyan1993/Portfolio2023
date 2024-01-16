import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full my-4 font-changa">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full translate-y-20">
        <p className="text-xl py-4 tracking-widest uppercase flex justify-center text-[#D52D1E]">
          Skills/Tech stack
        </p>
        <div className="grid lg:grid-cols-8 sm:grid-cols-3 gap-2 ">
          {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#007934] text-[#fdfe7d]"> */}
            <div className="shadow-md flex flex-col justify-center items-center p-2 bg-[#FDFED8]">
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
          {/* </div> */}
          
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
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
          
          </div>{" "}
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
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
          </div>{" "}
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
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
          </div>{" "}
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
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
          </div>{" "}
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT JS</h3>
              </div>
          </div>{" "}
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
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
          </div>{" "}
            <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/elephantsql.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ELEPHANT SQL</h3>
            </div>
          </div>
          <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MONGO DB</h3>
            </div>
          </div>
          <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/materialui.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MATERIAL UI</h3>
            </div>
          </div>
          <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64"
                  height="64"
                  alt="skills"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE JS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
