import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
  sccessButtonName,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">{title}</h3>
          <p className="py-4 text-accent">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-primary"
            >
              {sccessButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
