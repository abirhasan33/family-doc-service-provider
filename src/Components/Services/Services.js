import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-10 bg-neutral-100">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="mx-auto text-center pb-5 text-2xl md:text-4xl  text-cyan-700 font-semibold font-poppins ">
        MY  SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
