import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrdersModal from "../OrdersModel/OrdersModal";
import Product from "./Product";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const id = useParams();
  const [orders, setOrders] = useState(null);
  // useEffect(() => {
  //   axios.get(`https://swapmart-server.vercel.app/products/${id.id}`).then((data) => {
  //     setProducts(data.data);
  //   });
  // }, [id]);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://swapmart-server.vercel.app/products/${id.id}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-accent mt-5 mb-5">
        See All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-24 mb-24">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setOrders={setOrders}
          ></Product>
        ))}
      </div>
      <div>
        {orders && (
          <OrdersModal
            orders={orders}
            setOrders={setOrders}
            refetch={refetch}
          ></OrdersModal>
        )}
      </div>
    </div>
  );
};

export default Products;
