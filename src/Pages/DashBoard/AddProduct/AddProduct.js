import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const { user } = useContext(AuthContext);

  const imageHostingKey = process.env.REACT_APP_imagebb_key;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const product = {
            sellerName: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            category_Id: data.categoryId,
            name: data.productName,
            image: imageData.data.url,
            orginalPrice: data.orginalPrice,
            resalePrice: data.resalePrice,
            yearUseTime: data.yearUseTime,
            condition: data.condition,
            details: data.details,
            postTime: data.postTime,
          };
          fetch("https://swapmart-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.productName} Successfull Product Inserted`);
              navigate(`/dashboard/myProducts`);
            });
        }
      });
  };
  return (
    <div className="w-3/4 p-7 mt-5">
      <h2 className="text-4xl">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name"
              defaultValue={user.displayName}
              readOnly
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("phone", { required: true })}
              type="text"
              placeholder="Your Phone"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Your Location"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.location && (
              <p className="text-red-600">{errors.location?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              placeholder="Your Email"
              defaultValue={user.email}
              readOnly
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category ID</span>
            </label>
            <input
              {...register("categoryId", { required: true })}
              type="text"
              placeholder="Your Category ID"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.categoryId && (
              <p className="text-red-600">{errors.categoryId?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">ProductName</span>
            </label>
            <input
              {...register("productName", { required: true })}
              type="text"
              placeholder="Your Product Name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.productName && (
              <p className="text-red-600">{errors.productName?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", { required: "Photo is required" })}
              type="file"
              placeholder="Your Photo"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Orginal Price</span>
            </label>
            <input
              {...register("orginalPrice", { required: true })}
              type="text"
              placeholder="Product Orginal Price"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.orginalPrice && (
              <p className="text-red-600">{errors.orginalPrice?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              {...register("resalePrice", { required: true })}
              type="text"
              placeholder="Product Resale Price"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.resalePrice && (
              <p className="text-red-600">{errors.resalePrice?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Use Time</span>
            </label>

            <input
              {...register("yearUseTime", { required: true })}
              type="text"
              placeholder="Product used time"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.yearUseTime && (
              <p className="text-red-600">{errors.yearUseTime?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <select
              {...register("condition", { required: true })}
              className="select select-bordered input-bordered input-primary w-full max-w-xs"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
            {errors.condition && (
              <p className="text-red-600">{errors.condition?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-primary"
              placeholder="Product Description"
            ></textarea>
            {errors.details && (
              <p className="text-red-600">{errors.details?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Date</span>
            </label>
            <input
              {...register("postTime")}
              type="text"
              placeholder="Date"
              value={format(new Date(), "PP")}
              readOnly
              className="input w-full input-bordered input-primary"
            />
          </div>
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
