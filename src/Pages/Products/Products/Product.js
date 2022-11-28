import axios from "axios";
import { FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";
const Product = ({ product, setOrders }) => {
  const {
    name,
    image,
    originalPrice,
    resalePrice,
    phone,
    location,
    sellerName,
    postTime,
    yearUseTime,
    condition,
    details,
    isVerified,
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
        <div className="flex flex-row justify-between items-center">
          <small className="text-accent">Use Time : {yearUseTime}</small>
          <small className="text-accent">Posted: {postTime}</small>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="flex justify-center items-center flex-row">
              <span className="mr-2">Saller Name: {sellerName}</span>
              {isVerified && (
                <small>
                  <FaRegCheckCircle className="text-blue-600 text-xl"></FaRegCheckCircle>
                </small>
              )}
            </p>
            <p>
              <small>Phone: {phone}</small>
            </p>
            <p className="flex flex-row items-center">
              Location:
              <small className="mr-2 ml-1">{location}</small>
              <small>
                <FaMapMarkerAlt className="text-rose-600"></FaMapMarkerAlt>
              </small>
            </p>
          </div>
          <div className="my-0">
            <p className="text-2xl text-rose-500 ">
              ${resalePrice}
              <small className="text-accent ml-2 line-through">
                ${originalPrice}
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
