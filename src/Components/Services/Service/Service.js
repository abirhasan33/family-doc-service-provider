import { CalendarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, regPrice, price, img, id,details } = service;
  const navigate = useNavigate()

  return (
    <div>
      <div className="font-poppins w-[350px] mx-auto bg-grid-50 bg-gray-100 shadow-md rounded-md">
        <img className="p-2 rounded-xl w-[350px] h-[230px]" src={img} alt="" />
        <div className="px-3 pb-3 ">
          <div className="  pb-2">
            <h1 className="text-2xl py-3 text-cyan-700  font-semibold ">
              {name.toUpperCase()}
            </h1>
            <div className="flex items-center justify-between ">
              <p className="text-md text-gray-600 ">
                Price:{" "}
                <span className="text-xl font-semibold text-cyan-700">
                  ${price}
                </span>{" "}
              </p>
              <p className="text-md text-gray-600">
                Reg price:{" "}
                <span className="text-xl font-semibold text-rose-700 opacity-80">
                  <del>${regPrice}</del>
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="text-sm ">
            
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
         
              {details?.srt1}  
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
            
              {details?.srt2}  
            </p>

          </div>

          <button className="bg-cyan-700 hover:bg-cyan-800 md:duration-500 ease-in-out w-full mt-3 text-white px-4 py-2 rounded font-semibold flex items-center justify-center"
          onClick={()=>navigate(`/checkout/${id}`)}
          >
            <CalendarIcon className="w-5 mr-2"></CalendarIcon>
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
