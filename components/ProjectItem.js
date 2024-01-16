import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-start h-90 w-64 p-2 group drop-shadow-md hover:bg-gradient-to-r from-[#D52B1E] to-[#fa776e] bg-[#FDFED8]">
    <h3 className="text-2xl  tracking-wider text-center text-[#1f2937]">{title}</h3>
        <Image
          className="my-2 h-48"
          src={backgroundImg}
          alt="project"
        />
        <p className='min-h-48 text-sm'>{description}</p>
        <Link href={projectUrl}>
          <p className="text-center my-4 p-2 rounded-md bg-[#007934] text-[#fdfe7d] font-bold  cursor-pointer hover:scale-110 ease-in duration-300">More Info</p>
        </Link>
    
    </div>
  )
}

export default ProjectItem