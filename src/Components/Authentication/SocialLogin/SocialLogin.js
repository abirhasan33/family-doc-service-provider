import React, { useEffect } from "react";
import logo from "../../../Images/logo/google.png";
import {
  useAuthState,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="mt-2 font-poppins">
        <div className="flex items-center">
          <div className="h-[2px] bg-gray-500 rounded-full w-full"></div>
          <div className="text-gray-600 mx-4">Or</div>
          <div className="h-[2px] bg-gray-500 rounded-full w-full"></div>
        </div>
        <div
          onClick={() => signInWithGoogle()}
          className="bg-slate-100 rounded-full flex items-center justify-center py-1 shadow shadow-gray-300 mx-10 mt-4 cursor-pointer hover:bg-slate-200 duration-500 ease-out"
        >
          <img className="h-7 rounded-full mr-5" src={logo} alt="" />
          <p className="font-semibold text-cyan-900">Sign With Google</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
