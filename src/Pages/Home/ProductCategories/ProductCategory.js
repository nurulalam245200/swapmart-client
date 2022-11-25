import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCategory = ({ category }) => {
  const { category_Id, category_name, category_image } = category;
  console.log(category_name);
  const navigate = useNavigate();

  const handleCategory = (id) => {
    navigate("/");
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={category_image} alt="laptop" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/products/${category_Id}`}>
            <button
              onClick={() => handleCategory(category_Id)}
              className="btn btn-primary"
            >
              See {category_name} products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
