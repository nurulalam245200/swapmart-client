import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Product = ({ product }) => {
  const [orders, setOrders] = useState(null);
  const {
    name,
    image,
    origalPrice,
    resalePrice,
    phone,
    location,
    sellerName,
    postTime,
    yearUseTime,
    condition,
    details,
  } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{condition}</div>
        </h2>
        <p>{details}</p>
        <small className="text-accent">Use Time : {yearUseTime}</small>
        <small className="text-accent">Posted: {postTime}</small>
        <div className="flex justify-between">
          <div>
            <p>
              <small>Saller Name: {sellerName}</small>
            </p>
            <p>
              <small>Phone: {phone}</small>
            </p>
            <p>
              <small>
                {location}
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </small>
            </p>
          </div>
          <div className="my-0">
            <p className="text-2xl text-rose-500 ">
              ${resalePrice}
              <small className="text-accent ml-2 line-through">
                ${origalPrice}
              </small>
            </p>
            <div>
              <label
                onClick={() => setOrders(product)}
                htmlFor="order-modal"
                className="btn btn-sm mr-2"
              >
                Buy
              </label>
              <button className="btn btn-sm btn-primary">WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
