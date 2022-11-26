import React from "react";
import ProductCategories from "../ProductCategories/ProductCategories";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <ProductCategories></ProductCategories>
      <Services></Services>
    </div>
  );
};

export default Home;
