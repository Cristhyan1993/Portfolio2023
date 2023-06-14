import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#D52B1E]'>
            About
          </p>
          <h2 className='py-4 text-[#007934]'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Born in Bolivia but moved to the UK at a very young age. Studied civil engineering at university however I have always had an interest in tech which is why I have decided to pursue web development as a career.
          By having a background in engineering where I was consistently working in groups or using CAD for projects has benefited me greatly in my coding journey. 
          Since I began my coding bootcamp I have not stopped learning and enjoy exploring new tech stacks and creating mini projects applying what I learn.

          </p>
          <p className='py-2 text-gray-600'>
          Whenever I take a break from coding I enjoy gaming on my own or as a team.
            For me it is also important to not only exercise the brain but the body too which is why I do CrossFit regularly. This definitely helps my having
            a 'never give up' mentality and facing new challenges such as learning to handstand walk.
  
          </p>
          <p className='py-2 text-gray-600'>
          In 2023 I completed a coding bootcamp and you can find some of my projects by clicking on the link below.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-[#007934]'>
          {/* <Image src={AboutImg} className='rounded-xl' alt='/' /> */}
          <img src = "https://blush.design/api/download?shareUri=oYhYtp2oNGsbbQwC&c=Skin_0%7Eae5d29&bg=4e1a2a&w=800&h=800&fm=png" className='rounded-xl' alt='/'/>
        </div>
      </div>
    </div>
  );
};

export default About;
