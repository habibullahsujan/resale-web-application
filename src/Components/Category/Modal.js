import React, { useContext } from "react";
import toast from "react-hot-toast";
import { soldProduct, updateSellStatus } from "../../Auth/product";
import { AuthContext } from "../../Context/UserContext";

const Modal = ({ category,loadProducts}) => {
  const { user } = useContext(AuthContext);

  const handleClickBuyNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = category?.productName;
    const productPrice = category?.price;
    const customerName = user?.displayName;
    const customerEmail = user?.email;
    const customerPhone = form.phoneNumber.value;
    const meetingLocation = form.meetingLocation.value;

    const soldProductInfo = {
      productName: productName,
      productPrice,
      customerName,
      customerEmail,
      customerPhone,
      meetingLocation,
      sellerName: category?.sellerName,
      sellerEmail: category?.sellerPhone,
    };
    soldProduct(soldProductInfo)
      .then((data) => {
        if (data.acknowledged) {
          updateSellStatus(category?._id)
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success("product booking success");
                loadProducts()
              }
            })
            .catch((err) => toast.error(err.message));
        }
      })
      .catch((err) => toast.error(err.message));
  };

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
          <h3 className="text-lg font-bold text-center text-info">
            Hello, {user?.displayName}
          </h3>
          <form onSubmit={handleClickBuyNow} className="py-4">
            <label htmlFor="price" className="font-semibold">
              Product Price:
            </label>
            <input
              type="text"
              defaultValue={category?.price}
              className="input input-bordered w-full my-3"
              disabled
            />
            <label htmlFor="" className="font-semibold">
              Product Name
            </label>
            <input
              type="text"
              name="customerName"
              defaultValue={category?.productName}
              className=" input input-bordered w-full my-3"
              disabled
            />
            <label htmlFor="" className="font-semibold">
              Seller Email
            </label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered w-full my-3"
              disabled
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full my-3"
            />
            <input
              type="text"
              name="meetingLocation"
              placeholder="Meeting Location"
              className="input input-bordered w-full my-3"
            />
            <button
              type="submit"
              value=""
              className="btn w-full"
              placeholder="Submit"
              htmlFor="purchase-modal"
            >
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
