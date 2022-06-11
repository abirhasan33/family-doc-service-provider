import React from "react";
import Experience from "./Experience/Experience";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      name: "KIND WITH PATIENT",
      image: "https://i.ibb.co/3Nr0YK6/img1.png",
      info: "Once patient come in my cabin or i go to her home the patient must would be my friend ",
    },
    {
      id: 2,
      name: "IDEAL CHEKUP",
      image: "https://i.ibb.co/dPqt3qw/img2.png",
      info: "Too many patient seeing experience benifits is , that i know what is tha problem ",
    },
    {
      id: 3,
      name: " 100+ OPERATIONS",
      image: "https://i.ibb.co/fFBMS8z/img3.png",
      info: "I have succesfully done this operations, so if you need me, don't hegitaded just take appointment",
    },
    {
      id: 4,
      name: "BEHAVE LIKE FRIEND",
      image: "https://i.ibb.co/MNSRzGd/img4.png",
      info: "I behave with cildrean like she/he is my friend and i this is my best degree to a doctor",
    },
    {
      id: 5,
      name: "UPDATED MEDICINE",
      image: "https://i.ibb.co/L1d1zPB/img5.png",
      info: "I love to explore new medical science , that's why i can provide you updated medicine ",
    },
    {
      id: 6,
      name: "ONE OF BEST SERJON'S",
      image: "https://i.ibb.co/N9BBpJF/img6.png",
      info: "There are too many serjon here in bangladesh, and i am person who is in the top 100 doctors",
    },
  ];
  return (
    <div className="font-poppins bg-cyan-50 py-10 ">
      <div className="max-w-[1280px] mx-auto px-10 gap-5">
        <h1 className="text-center pb-5 text-2xl md:text-4xl  text-teal-700 font-semibold ">
           EXPERIENCES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10">
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              experience={experience}
            ></Experience>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
