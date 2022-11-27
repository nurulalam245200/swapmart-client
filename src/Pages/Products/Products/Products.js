import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const id = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id.id}`).then((data) => {
      setProducts(data.data);
    });
  }, [id]);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-accent mt-5 mb-5">
        See All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-24 mb-24">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Products;
