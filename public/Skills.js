import React from "react";
import Image from "next/image";

const Skills = () => {
  const skillsImage = [
    {
      name: "Node",
      src: "/../public/node.png"
    },
    {
      name: "Material UI",
      src: "/../public/materialui.png",
    },
    {
      name: "Mongo DB",
      src: "/../public/mongo.png",
    },
    {
      name: "Elephant SQL",
      src: "/../public/elephantsql.png",
    },
    {
      name: "JavaScript",
      src: "/../public/javascript.png",
    },
    {
      name: "Next JS",
      src: "/../public/nextjs.png",
    },
    {
      name: "Github",
      src: "/../public/github.png",
    },
    {
      name: "HTML",
      src: "/../public/html.png",
    },
    {
      name: "CSS",
      src: "/../public/css.png",
    },
    {
      name: "React",
      src: "/../public/react.png",
    },
    {
      name: "Tailwind",
      src: "/../public/tailwind.png",
    },
  ];

  return (
   
    <div id="skills" className="w-full my-4 font-changa">
      <div className="max-w-[1240px] mx-auto translate-y-20">
        <p className='uppercase text-xl tracking-widest py-4 text-[#D52B1E] flex justify-center'>
          Skills/Tech stack
        </p>
         <div className='grid md:grid-cols-5 sm:grid-cols-2 gap-2'>
          {skillsImage.map(skill => {
            return (
              <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]">
                <div className="m-auto">
                  <Image
                    src={skill.src}
                    width="64"
                    height="64"
                    alt="skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            )
          })}
        </div>
       </div>
     </div>
  );
};

export default Skills;



