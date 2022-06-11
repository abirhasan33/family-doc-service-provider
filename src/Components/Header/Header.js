import React from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../../Images/doctor2.png";
import Navber from "../Navber/Navber";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className=" banner ">
      <Navber></Navber>

      <div className=" max-w-[1280px] mx-auto  flex flex-col-reverse md:flex-row justify-between items-center h-full md:h-[90vh] px-10 ">
        <div className=" w-full md:w-6/12 text-center py-10 md:text-left">
          <h1 className="text-cyan-700 uppercase    font-poppins text-3xl  md:text-4xl mb-5 font-semibold">
            Welome To <span className="text-rose-700">FAMILY DOC</span>
          </h1>
          <p className="text-zinc-500  mb-3 font-semibold ">
            Hi my name is Dr.Sabrina Rahman , i am completed my degree in usa, and there i was an interniship, and i have also done 4 interniship in different country , i have deep knowladge about medical science .Check my bio.
          </p>
          <button onClick={()=>navigate('/about')} className="bg-cyan-700 text-white px-4 py-2 rounded font-semibold">
            Dr. Sabrina Rahman
          </button>
        </div>
        <div className="w-full pt-10 mx-auto md:w-6/12">
          <div className="flex justify-center md:justify-end">
            {" "}
            <img
              className="rounded-full w-[300px]  mb-10 md:w-[450px]  "
              src={doctor}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
