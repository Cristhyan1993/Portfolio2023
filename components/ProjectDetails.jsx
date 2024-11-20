import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectDetails = ({ project }) => {
    return (
        <div className='w-full max-w-[1080px] mx-auto text-secondaryLight h-full flex flex-wrap gap-8 py-10 md:py-24'>
            <div className='flex flex-1 flex-col px-2 gap-8 h-full'>
                <h1 className=' text-[4rem] md:text-[8rem] text-secondary leading-[6rem]'>
                    {project.title}
                </h1>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex-1 text-primaryLight'>
                        <h2>{project.subHeading}</h2>
                    </div>
                    <div className='flex flex-col flex-1 p-2 bg-primaryDark text-center shadow-xl justify-around'>
                        <h2>Technologies</h2>
                        {project.technologies.map((tech, index) => (
                            <p key={index}>{tech}</p>
                        ))}
                    </div>
                </div>
                <h2>What is it?</h2>
                <p>{project.details.whatIsIt}</p>
                <h2>Why did I create this?</h2>
                <p>{project.details.whyDidICreateThis}</p>
                <h2>What did I learn?</h2>
                <p>{project.details.whatDidILearn}</p>
                {project.details.logIn ?
                    <div>
                        <h3>Try it out</h3>
                        <p>Username: {project.details.logIn.username}</p>
                        <p>Password: {project.details.logIn.password}</p>
                        <p className='text-primaryLight'>{project.details.logIn.note}</p>
                    </div> : ""}
                <div className='flex gap-4'>
                    <Link href={project.links.url} target="_blank">
                        <button className='p-4 bg-primary tracking-widest w-[150px] hover:scale-110 ease-in duration-300'>DEMO</button>
                    </Link>
                    <Link href={project.links.github} target='_blank'>
                        <button className='p-4 bg-primaryDark tracking-widest w-[150px] hover:scale-110 ease-in duration-300'>CODE</button>
                    </Link>
                </div>
            </div>
            <Image src={project.image} width={500} height={500} alt={project.title} className='flex-1 max-h-[700px]' />
        </div>
    )
}

export default ProjectDetails