import React from "react";

const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-info">fgdf</h3>
          <form className="py-4">
            <input
              type="text"
              className="input input-bordered w-full my-3 text-center"
            />

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full my-3"
            />
            <input
              type="Number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered w-full my-3"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full my-3"
              disabled
            />
            <button
              type="submit"
              value=""
              className="btn w-full"
              placeholder="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
