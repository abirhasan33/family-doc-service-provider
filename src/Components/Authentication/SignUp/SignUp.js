
import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Navber from "../../Navber/Navber";
import Spinner from "../../Spinner/Spinner";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confrimPass, setCofrimPass] = useState({ value: "", error: "" });
  const [createUserWithEmailAndPassword, user1, laoding, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user1) {
      navigate("/");
    }
  }, [user1]);
  useEffect(() => {
    if (error?.message) {
      if (error?.message.includes("already")) {
        toast.error("User already exist");
      } else {
        toast.error(error.message);
      }
    }
  }, [error]);
  const handleName = (event) => {
    const userName = event.target.value;
    if (userName) {
      setName({ value: userName, error: "" });
    } else {
      setName({ value: "", error: "Name is required" });
    }
  };
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
  const handleConfrimPassword = (event) => {
    const confirmpass = event.target.value;
    if (password.value !== confirmpass) {
      setCofrimPass({ value: "", error: "Password don't match" });
    } else {
      setCofrimPass({ value: confirmpass, error: "" });
    }
  };
  const submitFrom = async (event) => {
    event.preventDefault();
    if (email.value && password.value && confrimPass.value && name.value) {
      await createUserWithEmailAndPassword(email.value, password.value);
      await sendEmailVerification();
      toast.success('Varification email sent')
    }
  };
  return (
    <div className="banner2">
      <Navber></Navber>
      {laoding ? (
        <Spinner></Spinner>
      ) : (
        <div className="h-[90vh]  flex justify-center items-center w-full font-poppins ">
          <form onSubmit={submitFrom}>
            <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
              <div className="text-center  rounded-xl  px-2 text-2xl font-semibold flex  justify-center space-x-3">
                <h1 className="text-cyan-700 ">JOIN</h1>
                <p className="text-rose-700">WITH ME</p>
              </div>
              <div className=" space-y-4 mt-10">
                <div>
                  <input
                    required
                    onBlur={handleName}
                    placeholder="Name"
                    name="name"
                    type="text"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                  />
                </div>
                {name?.error && (
                  <p className="text-red-500 text-xs pl-4">{name?.error}</p>
                )}
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
                <div>
                  <input
                    required
                    placeholder="Confrim Password"
                    onBlur={handleConfrimPassword}
                    name="confirmpass"
                    type="password"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                  />
                </div>
                {confrimPass?.error && (
                  <p className="text-red-500 text-xs pl-4">
                    {confrimPass?.error}
                  </p>
                )}
              </div>

              <button
                onClick={async () => {}}
                className="mt-5 w-full text-white bg-cyan-700 font-semibold py-2 rounded-md  tracking-wide"
              >
                Register
              </button>
              <p className="text-center text-gray-700 mt-3">
                <small>
                  Already have an account ?{" "}
                  <Link className="text-cyan-600" to="/login">
                    Login
                  </Link>
                </small>
              </p>

              {/* or section  */}
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
