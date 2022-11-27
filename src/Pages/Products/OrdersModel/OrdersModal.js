import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
const OrdersModal = ({ orders }) => {
  const { user } = useContext(AuthContext);
  const { resalePrice, name, image, _id } = orders;
  const handleBuyOrder = (event) => {};
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
                placeholder="Date"
                value={format(new Date(), "PP")}
                className="input w-full  input-bordered"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text ">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                readOnly
                disabled
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input w-full  input-bordered "
              />
            </div>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              disabled
              placeholder="Your Email"
              className="input w-full  input-bordered "
            />
            <input
              type="text"
              name="productName"
              readOnly
              disabled
              placeholder="Product name"
              defaultValue={name}
              className="input w-full  input-bordered "
            />
            <input
              type="text"
              name="price"
              defaultValue={resalePrice}
              readOnly
              disabled
              placeholder="Price"
              className="input w-full  input-bordered "
            />

            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Buy"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default OrdersModal;
