import React from "react";
import image from "../../images/error/notpound.gif";
const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-7xl text-center mt-10 mb-10 text-rose-600 font-bold">
        Page Not Found!!!
      </h1>
      <img src={image} alt="" />
    </div>
  );
};

export default ErrorPage;
