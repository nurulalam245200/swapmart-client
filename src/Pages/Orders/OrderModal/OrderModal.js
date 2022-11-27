import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const OrderModal = () => {
  const { user } = useContext(AuthContext);

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
            <input
              type="text"
              disabled
              //value={date}
              className="input w-full  input-bordered "
            />
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input w-full  input-bordered "
            />
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
              name="phone"
              placeholder="Your Phone"
              className="input w-full  input-bordered "
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input w-full  input-bordered "
            />
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
