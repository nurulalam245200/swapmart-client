import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>this is products{products.length}</h1>
    </div>
  );
};

export default Products;
