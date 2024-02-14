import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:auto p-2 flex items-center justify-center py-16 font-changa'>
      <div className='max-w-[1240px] m-auto gap-8 translate-y-20 mx-4 md:mx-20'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#D52B1E] flex justify-center'>
            About
          </p>
          <p className='py-2 text-gray-600  sm: text-center'>
          Born in Bolivia but moved to the UK. Obtained a degree in civil engineering but now pursuing a career in web development. After completing the bootcamp in 2023 I continued to broaden my knowledge by exploring new tech stacks with the help from online courses and created my own <Link className='text-[#007934] font-bold underline' href='/#projects'>PROJECTS</Link>  which can be seen further down below.
          </p>
          <p className='py-2 text-gray-600 sm: text-center'>
          Outside of coding I am keen on football, PlayStation and for me it is as equally as importing to exercise the body which is why I do CrossFit/Weightlifting regularly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
