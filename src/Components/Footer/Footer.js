import {
  BookmarkAltIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-8 pb-2 ">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="flex flex-col md:flex-row  md:justify-between items-center w-full space-y-10 md:space-y-0">
          <div className="w-full md:w-6/12 ">
            <div>
              <h1 className="text-4xl font-semibold text-gray-400 text-center md:text-left font-mono">
                <span className="text-rose-700"> <span className="text-cyan-700">FAMILY</span>-<span>DOC</span> </span>
              </h1>
              <p className="text-gray-400 font-poppins text-sm mt-3">
                Hi mr./mrs. welcome to my website, if you are intersted to
                booking my appointment and you are still confused you can see
                the links provided footer section , click and explore the link
                then you will get a idea
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-gray-300 font-poppins text-sm w-full  md:w-6/12 justify-evenly ">
            <div className=" space-y-1 mb-4  cursor-pointer">
              <p className="">Get help</p>
              <p className="">Read FQAs</p>
              <p className="">View my all Blogs</p>
              <p className="">simple blogs</p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center">
                <HomeIcon className="w-4 mr-2"></HomeIcon>Ashulia, Savar ,Dhaka
              </p>
              <p className="flex items-center">
                <UserIcon className="w-4 mr-2"></UserIcon> Dr. Sabrina Rahman
              </p>
              <p className="flex items-center">
                <PhoneIcon className="w-4 mr-2"></PhoneIcon>+880-1639465255
              </p>
              <p className="flex items-center">
                <BookmarkAltIcon className="w-4 mr-2"></BookmarkAltIcon>
                muntasirahmed5255@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16  text-center text-gray-400 font-mono text-sm uppercase">
          Allright Reserved &copy;Family-Doc for 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
