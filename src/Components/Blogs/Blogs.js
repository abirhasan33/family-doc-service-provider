import React from "react";
import Navber from "../Navber/Navber";

const Blogs = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="h-full mb-10 ">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-4xl text-center uppercase mt-5">
            WelCome To MY BLOGs
          </h1>
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-200 rounded-md p-5">
              <span className="font-semibold text-rose-400">Blog-01</span>
              <h1 className="text-2xl my-3 text-center md:text-left">
                Difference between authorization and authentication ?
              </h1>
              <p>
                <span className="text-xl font-semibold block  mb-2">
                  Authentication
                </span>{" "}
                <span className="pl-0 md:pl-3 block">
                  Authentication is the process of identifying users and
                  validating who they claim to be. One of the most common and
                  obvious factors to authenticate identity is a password. If the
                  user name matches the password credential, it means the
                  identity is valid, and the system grants access to the user.
                </span>
              </p>
              <p>
                <span className="text-xl font-semibold block my-2">
                  Authorization
                </span>

                <span className="block pl-0 md:pl-3">
                  Authorization happens after a user’s identity has been
                  successfully authenticated. It is about offering full or
                  partial access rights to resources like database, funds, and
                  other critical information to get the job done. In an
                  organization, for example, after an employee is verified and
                  confirmed via ID and password authentication, the next step
                  would be defining what resources the employee would have
                  access to"
                </span>
              </p>
            </div>
            <div className="bg-gray-200 rounded-md p-5">
              <span className="font-semibold text-rose-400">Blog-02</span>
              <h1 className="text-2xl text-center my-3">
                Why are you using firebase?{" "}
                <span className="block">
                  What other options do you have to implement authentication?
                </span>
              </h1>
              <p>
                Firebase can be used when you do not want to spend a lot of time
                developing your own backend. It can be used for rapid
                development. I have been using it in my apps in production. You
                will not have to take care of servers, etc, Google will take
                care of it for you . If you do not find the need to develop your
                own backend, Firebase is one of the best options.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-md p-5 w-full md:w-1/2 mx-auto mt-5">
            <span className="font-semibold text-rose-400">Blog-03</span>
            <h1 className="text-2xl my-3 text-center md:text-left">
              What other services does firebase provide other than
              authentication
            </h1>
            <div>
              <p>
                <span className="block">Realtime Database</span>
                It’s a Real-time data is the way of the future. Nothing compares
                to it.
              </p>
              <p>
                <span className="block"> File Storage</span>
               
                It’s File Storage Firebase Storage provides a simple way to save
                binary files — most often images, but it could be anything — to
                Google Cloud Storage directly from the client!!!
              </p>
              <p>
              <span className="block">Authentication</span>
                It’s Authentication Firebase auth has a built in email/password
                authentication system. It also supports OAuth2 for Google,
                Facebook, Twitter and GitHub. We’ll focus on email/password
                authentication for the most part. Firebase’s OAuth2 system is
                well-documented and mostly copy/paste.
              </p>
              <p>
                <span className="block"> Hosting</span>
                It’s Firebase includes an easy-to-use hosting service
                for all of your static files. It serves them from a global CDN
                with HTTP/2. And to make your development particularly painless,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
