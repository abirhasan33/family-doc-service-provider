import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navber from "../Navber/Navber";

const Checkout = () => {
  const { id } = useParams();
  const [click, setClick] = useState(false);
  const handlesSubmit = (event) => {
    event.preventDefault();
    setClick(true);
  };

  return (
    <div className="banner3  ">
      <Navber></Navber>
      <div className="h-full max-w-[1280px] mx-auto font-poppins  py-5">
        <h1 className="text-2xl md:text-4xl my-5 text-center font-semibold text-cyan-700">
           Chekcout 
        </h1>
        <form
          onSubmit={handlesSubmit}
          className={`w-full md:w-1/2 mx-auto bg-gray-300  px-5 py-5 rounded-xl  space-y-4 ${
            click ? "hidden" : "block"
          }`}
        >
          <h1 className="text-center uppercase text-2xl font-semibold text-cyan-700 mb-5">
            Fill up this form{" "}
          </h1>
          <div className="flex items-center space-x-5">
            <input
              required
              placeholder="First Name"
              type="text"
              className="focus:outline-none border-2 border-gray-300 w-full py-2 px-3 rounded-md"
            />
            <input
              required
              placeholder="Last Name"
              type="text"
              className="focus:outline-none border-2 border-gray-300 w-full py-2 px-3 rounded-md"
            />
          </div>
          <div>
            <input
              required
              placeholder="Email"
              type="text"
              className="focus:outline-none border-2 border-gray-300 w-full py-2 px-3 rounded-md"
            />
          </div>
          <div className=" space-x-4 flex items-center">
            <input
              required
              placeholder="Phone Number"
              type="number"
              className="focus:outline-none border-2 border-gray-300 py-2 px-3 rounded-md block w-8/12"
            />
            <input
              placeholder="Zip code"
              type="text"
              className="focus:outline-none border-2 border-gray-300  py-2 px-3 rounded-md w-4/12"
            />
          </div>
          <div className=" space-x-4 flex items-center">
            <input
              placeholder="Area"
              type="text"
              className=" focus:outline-none border-2 border-gray-300 py-2 px-3 rounded-md w-4/12"
            />
            <input
              placeholder="Service Name"
              type="number"
              className="focus:outline-none border-2 border-gray-300 py-2 px-3 rounded-md block w-8/12"
            />
          </div>
          <p className="text-gray-600">Please select your Payment Method :</p>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="contactChoice1"
                name="contact"
                value="email"
              />
              <label for="contactChoice1" className="text-orange-500">
                Nogod
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="contactChoice2"
                name="contact"
                value="phone"
              />
              <label for="contactChoice2 " className="text-purple-600">
                Rocket
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="contactChoice3"
                name="contact"
                value="mail"
              />
              <label for="contactChoice3" className="text-pink-600">
                Bkash
              </label>
            </div>
          </div>

          <button
            type="submit"
            value="Procced Checkout "
            className="bg-cyan-700 block
            w-full py-2 text-sm rounded-md text-white self-end"
          >
            Procced Checkout
          </button>
        </form>
        <div className="mt-20">
          <div
            className={` text-center rounded-xl  bg-gray-100 h-[50vh] flex items-center justify-center w-full md:w-4/12 mx-auto ${
              click ? "block" : "hidden"
            } relative`}
          >
            <div className="flex flex-col justify-center space-y-2 items-center">
              <p>
                {" "}
                <CheckCircleIcon className="w-10 h-10 text-green-600 block"></CheckCircleIcon>{" "}
              </p>
              <p className="text-gray-600 ">Booking successful !</p>
            </div>
            <button
              onClick={() => setClick(false)}
              className="bg-gray-600 absolute top-4 right-4 rounded-sm"
            >
              <XIcon className="w-6 h-6 text-white"></XIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
