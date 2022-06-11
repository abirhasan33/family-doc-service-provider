import React, { useState } from "react";
import {
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
  MenuAlt1Icon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../CustomLink/CustomLink";
const Navber = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-transparent w-full top-0 left-0">
      <div className="flex bg-transparent items-center justify-between py-4 md:px-10 font-poppins px-7 max-w-[1280px] mx-auto">
        <div className="">
          <h1
            className="uppercase font-mono text-cyan-700 font-semibold text-2xl  md:text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Family<span className=" text-green-700">-</span>
            <span className="text-rose-700">doc</span>
          </h1>
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></XIcon>
          ) : (
            <MenuAlt1Icon className="w-10 h-10 absolute flex  right-8 top-3 cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <div
          className={`md:flex  md:items-center space-x-0 md:space-x-6 md:pb-0 pt-8 md:pt-0 pb-10 absolute md:static    md:z-auto z-[2] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all space-y-5 md:space-y-0 duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
          }`}
        >
          <CustomLink
            className="font-semibold   cursor-pointer flex items-center"
            to="/"
          >
            {" "}
            <HomeIcon className="w-5  mr-1"></HomeIcon> Home
          </CustomLink>
          <CustomLink
            className="font-semibold   cursor-pointer flex items-center"
            to="/blogs"
          >
            {" "}
            <BookOpenIcon className="w-6  mr-1"></BookOpenIcon> Blogs
          </CustomLink>
          <CustomLink
            className="font-semibold   cursor-pointer flex items-center"
            to="/about"
          >
            {" "}
            <InformationCircleIcon className="w-6  mr-1"></InformationCircleIcon>{" "}
            About
          </CustomLink>

          {user ? (
            <button
              className="bg-cyan-700 text-sm text-white py-1 px-3 rounded-full  hover:bg-cyan-900 duration-300 font-semibold ease-in-out flex items-center"
              onClick={handleSignOut}
            >
              Log Out
              <UserCircleIcon className="w-6 ml-1"></UserCircleIcon>
            </button>
          ) : (
            <button
              className="bg-cyan-700 text-sm text-white py-1 px-3 rounded-full  hover:bg-cyan-900 duration-300 font-semibold ease-in-out flex items-center"
              onClick={() => navigate("/login")}
            >
              Login
              <UserCircleIcon className="w-6 ml-1"></UserCircleIcon>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
