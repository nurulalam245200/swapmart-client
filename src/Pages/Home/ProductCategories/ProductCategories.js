import { useQueries } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/productsCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  //   const { data: categories = [] } = useQueries({
  //     queryKey: ["productsCategory"],
  //     queryfn: async () => {
  //       const res = fetch("http://localhost:5000/productsCategory");
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  return (
    <div>
      <h1 className="text-3xl text-primary font-bold text-center">
        Products Area
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 w-full mx-auto">
        {categories.map((category) => (
          <ProductCategory
            key={category._id}
            category={category}
          ></ProductCategory>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
