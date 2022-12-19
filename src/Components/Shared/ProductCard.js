import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { addProductAWishlist, reportProduct } from "../../Auth/product";
import { AuthContext } from "../../Context/UserContext";
import Modal from "../Shared/Modal";

const ProductCard = ({
  product,
  loadProducts,
  setSelectedProduct,
  selectedProduct,
}) => {
  const { user } = useContext(AuthContext);
  const {
    productId,
    brandName,
    location,
    originalPrice,
    picture,
    price,
    productName,
    sellerEmail,
    sellerName,
    sellerPhone,
    yearOfUse,
    sellerIsVerified,
    _id,
    postedTime,
  } = product;
  const handleWishList = (id) => {
    const wishListData = {
      user_email: user?.email,
      productId: id,
      productNumber: productId,
      product_name: productName,
      product_price: price,
      product_img: picture,
      product_market_price: originalPrice,
      seller_location: location,
      seller_email: sellerEmail,
      seller_name: sellerName,
      seller_number: sellerPhone,
      sellerIsVerified,
    };
    addProductAWishlist(wishListData)
      .then((data) => {
        if (data.acknowledged) {
          toast.success("This Product added to your wishlist.");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  const handleReportProduct = (id) => {
    const reportedProductData = {
      user_email: user?.email,
      user_name: user?.displayName,
      productId: id,
      productNumber: productId,
      product_name: productName,
      product_price: price,
      product_img: picture,
      product_market_price: originalPrice,
      seller_location: location,
      seller_email: sellerEmail,
      seller_name: sellerName,
      seller_number: sellerPhone,
      sellerIsVerified,
      message: "",
    };
    reportProduct(reportedProductData)
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your report for this item is under review.");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <>
    <div class="w-full flex flex-col p-4 shadow-xl border border-gray-400 rounded-lg">
      <img className=" rounded-lg shadow-lg h-60 mx-auto w-96" src={picture} alt="" />
      <h5 className="text-gray-900 font-bold text-xl tracking-tight dark:text-white my-5">
        {productName}
      </h5>
      <div class="flex flex-col flex-1 rounded-lg w-full">
        <div class="flex-1">
          <div class="text-gray-900 text-2xl font-bold leading-snug"></div>
          <div className="p-2 rounded-lg">
            <div className="flex justify-between my-5">
              <button
                onClick={() => handleWishList(_id)}
                className=" bg-[#5F4B8BFF] p-1 text-white font-semibold rounded-lg"
              >
                Wishlist
              </button>
              <button
                onClick={() => handleReportProduct(_id)}
                className=" bg-[#FF1E1E] text-white font-semibold rounded-lg p-1"
              >
                Report
              </button>
            </div>
            <div className="font-semibold">
              <p>Brand Name:{brandName}</p>
              <p>Seller Location:{location}</p>
              <p>Market Price:${originalPrice}</p>
              <p>Seller Price:${price}</p>
              <div className="flex gap-4 items-center">
                <p className="overflow-hidden">Seller Name:{sellerName}</p>
                {sellerIsVerified && (
                  <FaCheckCircle className="text-blue-700" />
                )}
              </div>
              <p>Seller Email:{sellerEmail}</p>
              <p>Seller Phone:{sellerPhone}</p>
              <p>Number of year use:{yearOfUse}</p>
              <p>
                Posted On: {postedTime?.date}-{postedTime?.month}-
                {postedTime?.year}
              </p>
              {sellerIsVerified ? (
                <p className="text-green-500">
                  Product added by a verified seller
                </p>
              ) : (
                <p className="text-red-200">
                  Product added by a unverified seller.
                </p>
              )}
            </div>
          </div>
        </div>
        <div class="">
          <label
            onClick={() => setSelectedProduct(product)}
            htmlFor="purchase-modal"
            className=" mt-6 inline-flex items-center rounded-md shadow-sm btn w-full border border-[#5F4B8BFF] bg-[#5F4B8BFF] py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            Book Now
          </label>
        </div>
      </div>
      {selectedProduct && (
        <Modal
          product={product}
          loadProducts={loadProducts}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  
    </>
  );
};

export default ProductCard;
