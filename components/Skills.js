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
   
    <div id="skills" className="w-full my-4 font-changa">
      <div className="max-w-[1240px] translate-y-20 mx-4 md:mx-20">
        <p className='uppercase text-xl tracking-widest py-4 text-[#D52B1E] flex justify-center'>
          Skills/Tech stack
        </p>
         <div className='grid md:grid-cols-5 grid-cols-3 gap-2 mx-4'>
          {skillsImage.map((skill, index) => {
            return (
              <div className="shadow-md flex flex-col justify-center p-2 bg-[#FDFED8]" key={index}>
                <div className="m-auto" >
                  <Image
                    src={skill.src}
                    width="64"
                    height="64"
                    alt="skills"
                    className="w-auto"
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
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



