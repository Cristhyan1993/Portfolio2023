import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full font-changa">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest flex justify-center uppercase my-4 text-[#D52B1E]">
          Contact
        </p>
        {/* <h2 className="py-4 flex justify-center text-[#007934]" >Get In Touch</h2> */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md rounded-md bg-[#ff4747]">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="p-2 w-full"
                  src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_1280.jpg"
                  alt="laptop"
                />
              </div>
              <div className="flex-col mx-4">
                <h2 className=" flex justify-center py-2 text-[#fdfe7d]">Cris Calderon</h2>
                <p className="flex justify-center text-[#fdfe7d]">Web Developer</p>
                <p className="flex justify-center py-4 text-[#fdfe7d] text-center">
                  Feel free to connect with me on LinkedIn or Github. You can also reach out to me by completing the contact form.{" "}
                </p>
              </div>
              <div>
                <p className="flex justify-center uppercase pt-8 text-[#fdfe7d]">Connect with me</p>
                <div className="flex items-center justify-around  py-4">
                  <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fdfe7d] bg-[#007934]">
                  <Link href='http://www.linkedin.com/in/criscalderon' target="_blank"><FaLinkedinIn size={30}/></Link>
                  </div>
                  <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fdfe7d] bg-[#007934]">
                  <Link href='http://www.github.com/Cristhyan1993' target="_blank"><FaGithub size={30}/></Link>
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
          <div className="col-span-3 w-full h-auto shadow-md rounded-md lg:p-4 bg-[#007934]">
            <div className="py-4">
              <form action="https://formsubmit.co/864d2ec555002798834d3bcbea5d5310" method="POST">
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
                <div className="flex justify-center">
                <button className="w-1/2 mt-4 py-2 rounded-md text-[#fdfe7d] hover:scale-105 ease-in duration-300 bg-[#ff4747]"type="submit">
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#ff4747]">
              <HiOutlineChevronDoubleUp className="text-[#fdfe7d]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
