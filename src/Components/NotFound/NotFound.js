import React from "react";
import nofoud from "../../Images/illuistraitons/404error.gif";
import Navber from "../Navber/Navber";
const NotFound = () => {
  return (
    <div className="h-screen">
      <Navber></Navber>
      <img className="block mx-auto" src={nofoud} alt="" />
    </div>
  );
};

export default NotFound;
