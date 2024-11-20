import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ project }) => {
  return (
    <Link href={project.url} className="flex flex-col justify-start w-64 p-3 drop-shadow-lg bg-primary gap-4 cursor-pointer hover:scale-110 ease-in duration-300 text-secondary">
        <Image
          className="h-48"
          src={project.image}
          alt="project"
        />
        <h3 className="tracking-wider">{project.title}</h3>
        <p className='text-secondaryLight'>{project.description}</p>
    </Link>
  )
}

export default ProjectItem