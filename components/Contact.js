import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full " >
        <p className="text-xl tracking-widest uppercase text-[#D52B1E]">
          Contact
        </p>
        <h2 className="py-4 text-[#007934]" >Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#D52B1E]">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://media.istockphoto.com/id/1223379165/es/foto/close-up-of-hands-typing-en-el-ordenador-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=PZ19xKU8GpdtHsuQdpnwYCTaByGgxK6ZyimvmXaZDPs="
                  alt="laptop"
                />
              </div>
              <div className="flex-col">
                <h2 className=" flex justify-center py-2 text-[#fdfe7d]">Cris Calderon</h2>
                <p className="flex justify-center text-[#fdfe7d]">Web Developer</p>
                <p className="flex justify-center py-4 text-[#fdfe7d]">
                  Feel free to connect with me on LinkedIn or Github. You can also reach out to me by completing the contact form on the right hand side.{" "}
                </p>
              </div>
              <div>
                <p className="flex justify-center uppercase pt-8 text-[#fdfe7d]">Connect with me</p>
                <div className="flex items-center justify-around  py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fdfe7d] bg-[#007934]">
                  <Link href='http://www.linkedin.com/in/criscalderon' target="_blank"><FaLinkedinIn /></Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fdfe7d] bg-[#007934]">
                  <Link href='http://www.github.com/Cristhyan1993' target="_blank"><FaGithub /></Link>
                  </div>
                  {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-[#007934]">
            <div className="py-4">
              <form action="https://formsubmit.co/537f46f4247bd928c6f2dc7bbb3ba911" method="POST">
                <div className="flex flex-col w-full py-2 px-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-[#fdfe7d]">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      required placeholder="Full Name"
                    />
                  </div>
                  {/* <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-[#fdfe7d]">
                      Phone number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div> */}
                </div>
                <div className="flex flex-col py-2 px-2 text-[#fdfe7d]">
                  <label className="uppercase text-sm py-2 ">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required placeholder="abc1@gmail.com"
                  />
                </div>
                <div className="flex flex-col py-2 px-2 ">
                  <label className="uppercase text-sm py-2 text-[#fdfe7d]">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required placeholder="Projects, Design... "
                  />
                </div>
                <div className="flex flex-col py-2 px-2 ">
                  <label className="uppercase text-sm py-2 text-[#fdfe7d]">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    type="text"
                    name="text"
                    required placeholder="Hi my name is ... I would like to ask..."
                  ></textarea>
                </div>
                <button className=" w-full p-4 mt-4 text-[#fdfe7d] hover:scale-105 ease-in duration-300 bg-[#D52B1E]"type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#007934]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
