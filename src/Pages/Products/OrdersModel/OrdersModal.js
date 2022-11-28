import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
import toast from "react-hot-toast";
const OrdersModal = ({ orders, setOrders, refetch }) => {
  const { user } = useContext(AuthContext);
  const { resalePrice, name, image } = orders;
  const handleBuyOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const price = form.price.value;

    const cart = {
      orderDate: date,
      userName,
      email,
      productName,
      price,
      image: image,
    };

    fetch("https://swapmart-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setOrders(null);
          toast.success("Order Add Succesfully!!");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>

          {/* input action  */}
          <form
            onSubmit={handleBuyOrder}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Date</span>
              </label>
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={format(new Date(), "PP")}
                readOnly
                className="input w-full  input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text ">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                readOnly
                disabled
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input w-full  input-bordered "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text ">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                disabled
                placeholder="Your Email"
                className="input w-full  input-bordered "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                readOnly
                disabled
                placeholder="Product name"
                defaultValue={name}
                className="input w-full  input-bordered "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={resalePrice}
                readOnly
                disabled
                placeholder="Price"
                className="input w-full  input-bordered "
              />
            </div>
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Add to Cart"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default OrdersModal;
