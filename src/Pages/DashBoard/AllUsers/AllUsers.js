import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const [deletingUser, setdeletingUser] = useState(null);
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();

      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const closeModal = () => {
    setdeletingUser(null);
  };
  const handleDeleteUser = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount > 0) {
          toast.success(`Doctor ${user.name} Deleted Succesfully!!`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl">All Users</h2>
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
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <>
                      <button className="btn btn-xs btn-secondary">
                        Make Admin
                      </button>
                    </>
                  ) : (
                    <button disabled className="btn btn-xs btn-secondary">
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setdeletingUser(user)}
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
      {deletingUser && (
        <ConfirmationModal
          title={`Are you Sure to Delete???`}
          message={`Do you confirm to delete ${deletingUser.name}. If it happend, It cannot undone later. If you sure so can done it!!!`}
          successAction={handleDeleteUser}
          modalData={deletingUser}
          sccessButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllUsers;
