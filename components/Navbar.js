import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#F9E300')
  const [linkColour, setLinkColour] = useState('#eeeeee')
  const router = useRouter

  useEffect(() => {
    if(
      router.asPath ==='weatherApp' ||
      router.asPath ==='movieApp' ||
      router.asPath ==='studentHub' ||
      router.asPath ==='finalProjectApp' 
    ) {
      setNavBg('transparent')
      setLinkColour('#eeeeee')
    } else {
      setNavBg('#D52D1E')
      setLinkColour('#eeeeee')
    }
  },[router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])
  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
    {/* This is the header styling below */}
      <div className="max-w-[1240px] mx-auto flex justify-between items-center w-full h-full px-2 2xl:px-16">

      <Link href='/'><Image
          src="/profileMain.png"
          alt="logo"
          width="65"
          height="50"
        /></Link>
        
        <div>
          <ul style={{color:`${linkColour}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b hover:scale-110 ease-in duration-300 text-[#fdfe7d]">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-base uppercase hover:border-b hover:scale-110 ease-in duration-300 text-[#fdfe7d]">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-base uppercase hover:border-b hover:scale-110 ease-in duration-300 text-[#fdfe7d]">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-base uppercase hover:border-b hover:scale-110 ease-in duration-300 text-[#fdfe7d]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-base uppercase hover:border-b hover:scale-110 ease-in duration-300 text-[#fdfe7d]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer text-[#fdfe7d]">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* overlay on the back
      //if nav is true use styling on the left but if it is false, have no styling */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#D52D1E] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-sull items-center justify-between">
            <Link href='/'><Image
                src="/profileMain.png"
                width="75"
                height="75"
                alt="logo"
              /></Link>
              
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg gray-400 p-3 cursor-pointer bg-[#007934] text-[#fdfe7d]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#fdfe7d] my-4">
              {/* <p className="w-[85%] md:-[90%] py-4 text-[#fdfe7d]">
                Lets's build something together!
              </p> */}
            </div>
          </div>
          <div className="py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm text-[#fdfe7d]">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fdfe7d]">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fdfe7d]">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fdfe7d]">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fdfe7d]">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#fdfe7d]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-fullsm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#007934]">
                <Link href='http://www.linkedin.com/in/criscalderon' target="_blank"><FaLinkedinIn /></Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#007934]">
                <Link href='http://www.github.com/Cristhyan1993' target="_blank"><FaGithub /></Link>
                </div>
                {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#007934]">
                  <AiOutlineMail />
                </div> */}
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#007934]">
                <Link href='/#contact'><BsFillPersonLinesFill /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
