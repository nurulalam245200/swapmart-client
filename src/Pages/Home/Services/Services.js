import React from "react";
import repair from "../../../images/services/service-1.jpg";
import software from "../../../images/services/service-2.jpg";
import Service from "./Service";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Computer Repair Service",
      des: "We are provide repaire Service. If you face any hardware system issues. we alaways with your touch. We no charge service fee, Its free!! ",
      img: repair,
    },
    {
      id: 2,
      name: "Software Releted Service",
      des: "We have very qualified computer software issues specialist. If you face any software related issues.Don't be think about it. we will provide our best",
      img: software,
    },
  ];
  return (
    <div className="mt-12 mb-12">
      <div className="text-center">
        <h3 className="text-4xl text-accent font-bold mt-5 mb-5">
          Our Services
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full mx-auto">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
