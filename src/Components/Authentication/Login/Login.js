import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Navber from "../../Navber/Navber";
import Spinner from "../../Spinner/Spinner";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [user2] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user1 || user2) {
      toast.success("Login Successfull", { id: 1 });
      navigate(from, { replace: true });
    }
  }, [user2]);
  useEffect(() => {
    if (error) {
      if (error?.message?.includes("password")) {
        toast.error("Wrong Password", { id: 2 });
      } else if (error?.message?.includes("user-not-found")) {
        toast.error("Email not register", { id: 3 });
      } else {
        toast.error(error?.message);
      }
    }
  }, [error]);
  const handleEmail = (event) => {
    const userEmail = event.target.value;
    if (/\S+@\S+\.\S+/.test(userEmail)) {
      setEmail({ value: userEmail, error: "" });
    } else {
      setEmail({ value: "", error: "Invaild Email" });
    }
  };
  const handlePassword = (event) => {
    const userPassword = event.target.value;
    if (userPassword.length > 7) {
      setPassword({ value: userPassword, error: "" });
    } else {
      setPassword({ value: "", error: "Password should have 8 character" });
    }
  };
  const resetPassword = async () => {
    if (email.value) {
      await sendPasswordResetEmail(email.value);
      toast.success("Password Reset Email Sent", { id: 1 });
    } else {
      toast.error("Please Enter Email");
    }
  };
  const submitFrom = (event) => {
    event.preventDefault();
    if (email.value && password.value) {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };
  return (
    <div className="banner2">
      <Navber></Navber>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="h-[90vh] flex justify-center items-center w-full font-poppins">
          <form onSubmit={submitFrom}>
            <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
              <div className="text-center  rounded-xl  px-2 text-2xl font-semibold flex  justify-center space-x-3">
                <h1 className="text-cyan-700 ">WELCOME</h1>
                <p className="text-rose-700">BACK</p>
              </div>
              <div className="space-y-4 mt-10">
                <div>
                  <input
                    required
                    onBlur={(event) => handleEmail(event)}
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                  />
                </div>
                {email?.error && (
                  <p className="text-red-500 text-xs pl-4">{email?.error}</p>
                )}
                <div>
                  <input
                    required
                    onBlur={handlePassword}
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                  />
                </div>
                {password?.error && (
                  <p className="text-red-500 text-xs pl-4">{password?.error}</p>
                )}
              </div>

              <button className="mt-5 w-full text-white bg-cyan-700 font-semibold py-2 rounded-md  tracking-wide">
                Login
              </button>
              <div>
                <p className="text-center mt-3 text-gray-700">
                  <small>
                    Don't have an account ?{" "}
                    <Link className="text-cyan-600" to="/signup">
                      Register
                    </Link>
                  </small>
                </p>
                <p className="text-center  text-gray-700">
                  <small>
                    Forget Password ?{" "}
                    <span
                      onClick={resetPassword}
                      className="text-cyan-600 cursor-pointer"
                    >
                      Reset
                    </span>
                  </small>
                </p>
              </div>
              {/* or section  */}
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
