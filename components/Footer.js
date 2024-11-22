import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const links = [
    
      {
      title: "Instagram",
      icon: <FaInstagram />,
      url:"https://www.instagram.com/cristhyan93/"
    },
     {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      url:"https://www.linkedin.com/in/criscalderon/"
    },
     {
      title: "Github",
      icon: <FaGithub />,
      url:"https://github.com/Cristhyan1993"
    
  }
  ]
  return (
    <div className='w-full bg-primaryDark text-secondaryLight pt-10 translate-y-20'>
      <div className='max-w-[1080px] flex flex-col mx-auto p-4  gap-14 md:gap-20 text-center w-full'>
        <div className='text-center'>
          <h2>Cris Calderon</h2>
          <h3>Web Developer</h3>
        </div>
        <div className='flex flex-col flex-wrap md:justify-around gap-4 md:flex-row'>
          <Image src="/profileMain.png" width={100} height={100} alt="profile logo" className='hidden md:flex'/>
          <div className='md:text-left'>
            <h4 className='text-secondary'>Email</h4>
            <p>cristhyancalderon@hotmail.co.uk</p>
          </div>
          <h4 className='text-secondary'>CV</h4>
          <div className='md:text-left'>
            <h4 className='text-secondary'>Social</h4>
            {
              links.map(link => (
                <Link href={link.url} key={link.title}>
                  <p>{link.title}</p>
                </Link>
              ))
            }
          </div>
        </div>
        <div className='flex justify-around '>
          <h4>Portfolio 2024</h4>
          <div className='flex gap-6 text-2xl'>
          {
              links.map(link => (
                <Link href={link.url} key={link.title}>
                  <p>{link.icon}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer