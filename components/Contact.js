import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-8 translate-y-20 p-2 text-secondaryLight">
        <h2 className="tracking-widest text-center uppercase my-4 text-primaryLight">
          Contact
        </h2>
        <div className="grid md:grid-cols-5 gap-2">
          {/* left */}
          <div className="col-span-3 p-2 md:col-span-2 w-full h-full shadow-md rounded-md bg-red-800">
            <Image
              className="p-2 w-full"
              src="/contact.jpg"
              alt="laptop"
              width={300}
              height={100}
            />
            <div className="flex-col flex text-center gap-4">
              <h2>Cris Calderon</h2>
              <h3>Web Developer</h3>
              <p>
                Feel free to connect with me on LinkedIn or Github. You can also reach out to me by completing the contact form.{" "}
              </p>
              <p className="text-center uppercase">Connect with me</p>
              <div className="flex items-center justify-around">
                <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-primary">
                  <Link href='http://www.linkedin.com/in/criscalderon' target="_blank">
                    <FaLinkedinIn size={30} />
                  </Link>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-primary">
                  <Link href='http://www.github.com/Cristhyan1993' target="_blank">
                    <FaGithub size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-md rounded-md lg:p-4 bg-primary p-2">
            <form action="https://formsubmit.co/cristhyancalderon@hotmail.co.uk" method="POST">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col w-full">
                  <label className="uppercase">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-[#1f2937]"
                    type="text"
                    name="name"
                    required placeholder="Full Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-[#1f2937]"
                    type="email"
                    name="email"
                    required placeholder="abc1@gmail.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 text-[#1f2937]"
                    type="text"
                    name="subject"
                    required placeholder="Projects, Design... "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-[#1f2937]"
                    rows="10"
                    type="text"
                    name="text"
                    required placeholder="Hi my name is ... I would like to ask..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="w-1/2 mt-4 py-2 rounded-md hover:scale-105 ease-in duration-300 bg-red-800" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-red-800">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
