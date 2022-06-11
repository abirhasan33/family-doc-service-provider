import React from "react";
import Navber from "../Navber/Navber";
import myImg from "../../Images/profile.png";
const About = () => {
  return (
    <div className="banner">
      <Navber></Navber>
      <div className="h-full  md:h-[90vh] max-w-[1280px] mx-auto px-10">
        {/* <h1 className="text-5xl uppercase animate-none  font-semibold  text-center mt-10  text-cyan-700 font-mono">
          About <span className="text-rose-700">Me</span>
        </h1> */}
        <div className="flex items-center flex-col md:flex-row justify-center  md:justify-evenly h-full  md:h-[85vh]">
          <div className="w-full md:w-1/2  mt-3 md:mt-0 ">
            <img className="  w-[400px] block mx-auto" src={myImg} alt="" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-5xl uppercase mb-8 md:mb-16 text-center md:text-left animate-none  font-semibold   mt-10  text-cyan-700 font-mono">
              About <span className="text-rose-700">Me</span>
            </h1>
            <h1 className="text-4xl  font-mono uppercase font-semibold text-cyan-700">
              {" "}
              Muntasir Ahmed{" "}
            </h1>
            <h2 className="text-md   font-semibold text-orange-400 font-mono uppercase ">
              Student of{" "}
              <span className="text-orange-400">programming hero</span>{" "}
            </h2>
            <h2 className="text-2xl font-mono mt-4 font-semibold uppercase text-cyan-700">
              my vision in <span className="">2022</span>{" "}
            </h2>
            <p className="font-poppins text-sm capitalize font-semibold text-justify  mt-1  text-gray-500 mb-10 md:mb-5">
              If allah helps me , in this is year my goal is to get a job
              otherwise get a paid or free intership, if i will achieve this goal
              then my next vision will be to update myself as a fully
              proffessional{" "}
              <span className="text-orange-500 uppercase font-bold mx-2">
                mern stack developer
              </span>{" "}
              and insha allah i will achieve my goal beacause i am very
              passionate about my vission. pray for me .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
