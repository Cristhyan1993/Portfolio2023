import React from "react";
import Image from "next/image";

const Skills = () => {
  const skillsImage = [
    {
      name: "Node",
      src: "/node.png"
    },
    {
      name: "Material UI",
      src: "/materialui.png",
    },
    {
      name: "Mongo DB",
      src: "/mongo.png",
    },
    {
      name: "Elephant SQL",
      src: "/elephantsql.png",
    },
    {
      name: "JavaScript",
      src: "/javascript.png",
    },
    {
      name: "Next JS",
      src: "/nextjs.png",
    },
    {
      name: "Github",
      src: "/github.png",
    },
    {
      name: "HTML",
      src: "/html.png",
    },
    {
      name: "CSS",
      src: "/css.png",
    },
    {
      name: "React",
      src: "/react.png",
    },
    {
      name: "Tailwind",
      src: "/tailwind.png",
    },
    {
      name: "Figma",
      src: "/figma.png",
    },
  ];

  return (
    <div id="skills" className="w-full my-[200px]">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-8 translate-y-20">
        <h2 className='text-primaryLight uppercase tracking-widest text-center'>
          Skills/Tech stack
        </h2>
         <div className='flex flex-wrap gap-2 justify-center'>
          {skillsImage.map((skill, index) => {
            return (
              <div className="shadow-lg flex flex-col w-[150px] h-auto p-8 gap-2 bg-primary" key={index}>
                <div className="m-auto" >
                  <Image
                    src={skill.src}
                    width="60"
                    height="60"
                    alt="skills"
                    className="w-auto"
                  />
                </div>
                <div className="flex flex-col items-center text-center text-sm md:text-xs text-secondary">
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



