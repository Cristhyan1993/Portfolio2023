"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 700) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, [])
  return (
    <div className='fixed w-full h-15 md:h-20 shadow-xl z-[100] bg-primaryDark'>
      <div className="max-w-[1080px] mx-auto my-2 flex justify-between items-center w-full h-full px-3">
        <Link href='/' scroll={false}>
          <Image
            src="/profileMainNoBorder.png"
            alt="logo"
            width="100"
            height="100"
            className="max-h-12 md:max-h-16 w-auto"
          />
        </Link>
        <div>
          <ul className="hidden md:flex text-secondary">
            <Link href="/#about" scroll={false}>
              <li className="navbarLi">About</li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="navbarLi">Skills</li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="navbarLi">
                Projects
              </li>
            </Link>
            <Link href="https://drive.google.com/file/d/11tCW1SS13UouMU4tdp51fwkmcSWGzDsK/view" target="_blank">
              <li className="navbarLi">
                CV
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="navbarLi">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer text-secondary">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primaryDark p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-sull items-center justify-between">
              <Link href='/' scroll={false}><Image
                src="/profileMainNoBorder.png"
                width="75"
                height="75"
                alt="logo"
              /></Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg gray-400 p-3 cursor-pointer bg-primary text-secondary"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4">
            <ul className="uppercase text-secondary">
              <Link href="/" scroll={false}>
                <li className="py-4 text-sm" onClick={() => setNav(false)}>Home</li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm ">Skills</li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="https://drive.google.com/file/d/11tCW1SS13UouMU4tdp51fwkmcSWGzDsK/view" target="_blank">
                <li onClick={() => setNav(false)} className="py-4 text-sm">CV</li>
              </Link>
              <Link href="/#contact" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
