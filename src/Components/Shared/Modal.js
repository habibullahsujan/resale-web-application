import React, { useContext } from "react";
import toast from "react-hot-toast";
import { storeBookedProduct } from "../../Auth/product";
import { AuthContext } from "../../Context/UserContext";

const Modal = ({ setSelectedProduct, selectedProduct }) => {
  const { user } = useContext(AuthContext);

  const handleClickBuyNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = selectedProduct?.productName;
    const productPrice = selectedProduct?.price;
    const customerName = user?.displayName;
    const customerEmail = user?.email;
    const customerPhone = form.phoneNumber.value;
    const meetingLocation = form.meetingLocation.value;

    const bookedProductInfo = {
      product_id: selectedProduct._id,
      productName: productName,
      productImg: selectedProduct?.picture,
      productPrice,
      customerName,
      customerEmail,
      customerPhone,
      meetingLocation,
      sellerName: selectedProduct?.sellerName,
      sellerEmail: selectedProduct?.sellerEmail,
      sellerPhone: selectedProduct?.sellerPhone,
    };
    storeBookedProduct(bookedProductInfo)
      .then((data) => {
        // if (data.acknowledged) {
        //   updateSellStatus(selectedProduct._id)
        //     .then((data) => {
        //       if (data.acknowledged) {
        //         toast.success(
        //           "Product booked success. you can pay for this product from your dashboard."
        //         );
        //         setSelectedProduct(null)
        //       }
        //     })
        //     .catch((err) => toast.error(err.message));
        // }
        if (data.acknowledged) {
          toast.success(
            "Product booked success. you can pay for this product from your dashboard."
          );
          setSelectedProduct(null);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <button
            onClick={() => setSelectedProduct(null)}
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="text-lg font-bold text-center text-info">
            Hello, {user?.displayName}
          </h3>
          <form onSubmit={handleClickBuyNow} className="py-4">
            <input
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered w-full my-3"
              disabled
            />
            <label htmlFor="price" className="font-semibold">
              Product Price:
            </label>
            <input
              type="text"
              defaultValue={selectedProduct?.price}
              className="input input-bordered w-full my-3"
              disabled
            />
            <label htmlFor="" className="font-semibold">
              Product Name
            </label>
            <input
              type="text"
              name="customerName"
              defaultValue={selectedProduct?.productName}
              className=" input input-bordered w-full my-3"
              disabled
            />
            <label htmlFor="" className="font-semibold">
              Seller Email
            </label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={selectedProduct?.sellerEmail}
              name="email"
              className="input input-bordered w-full my-3"
              disabled
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full my-3"
              required
            />
            <input
              type="text"
              name="meetingLocation"
              placeholder="Meeting Location"
              className="input input-bordered w-full my-3"
              required
            />
            <button
              type="submit"
              value=""
              className="btn w-full"
              placeholder="Submit"
              htmlFor="purchase-modal"
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
