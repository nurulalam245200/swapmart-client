import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://swapmart-server.vercel.app/cart?email=${user?.email}`;

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl mb-5">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Cart Date</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id}>
                <th>{idx + 1}</th>
                <td>{order.userName}</td>
                <td>{order.productName}</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={order.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.orderDate}</td>
                <td>{order.price}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/cart/${order._id}`}>
                      <button className="btn btn-success btn-sm">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className="text-primary">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
