import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const AllSellers = () => {
  const [deletingSeller, setdeletingSeller] = useState(null);
  const role = useParams();
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${role.role}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const closeModal = () => {
    setdeletingSeller(null);
  };
  const handleDeleteSeller = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success(`${product.name} Deleted Succesfully!!`);
          refetch();
        }
      });
  };

  //make verified
  const handleMakeVerified = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verified Succesfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl">All Seller</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) => (
              <tr key={seller._id}>
                <th>{idx + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller?.isVerified !== "yes" && (
                    <>
                      <button
                        onClick={() => handleMakeVerified(seller._id)}
                        className="btn btn-xs btn-secondary"
                      >
                        Make Verified
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setdeletingSeller(seller)}
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
      {deletingSeller && (
        <ConfirmationModal
          title={`Are you Sure to Delete???`}
          message={`Do you confirm to delete ${deletingSeller.name}. If it happend, It cannot undone later. If you sure so can done it!!!`}
          successAction={handleDeleteSeller}
          modalData={deletingSeller}
          sccessButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
