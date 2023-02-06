import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#D52B1E] to-[#fa776e] bg-[#007934]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={backgroundImg}
            alt="project"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl hover:scale-110 ease-in duration-300 tracking-wider text-center text-[#fdfe7d]">{title}</h3>
            <p className="pb-4 pt-2 text-[#fdfe7d] text-center">React JS</p>
            <Link href={projectUrl}>
              <p className="text-center py-3 rounded-lg bg-[#007934] text-[#fdfe7d] font-bold text-lg cursor-pointer">More Info</p>
            </Link>
          </div>
        </div>
    )
}

export default ProjectItem