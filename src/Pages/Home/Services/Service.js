import React from "react";

const Service = ({ service }) => {
  const { img, des, name } = service;
  return (
    <div className="card bg-sky-200 mt-5 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="service" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl text-accent">{name}</h2>
        <p className="font-semibold">{des}</p>
      </div>
    </div>
  );
};

export default Service;
