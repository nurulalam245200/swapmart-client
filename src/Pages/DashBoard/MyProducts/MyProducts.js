import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const [deletingProduct, setdeletingProduct] = useState(null);
  const { user } = useContext(AuthContext);

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://swapmart-server.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const closeModal = () => {
    setdeletingProduct(null);
  };
  const handleDeleteProduct = (product) => {
    fetch(`https://swapmart-server.vercel.app/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount > 0) {
          toast.success(`${product.name} Deleted Succesfully!!`);
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl mb-5">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Modify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.resalePrice}</td>
                <td>{product.sellerName}</td>
                <td>{product.email}</td>
                <td>
                  {product?.isVerified !== "yes" && (
                    <>
                      <button className="btn btn-xs btn-secondary">
                        For Adv
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setdeletingProduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you Sure to Delete???`}
          message={`Do you confirm to delete ${deletingProduct.name}. If it happend, It cannot undone later. If you sure so can done it!!!`}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
          sccessButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
