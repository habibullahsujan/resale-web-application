import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { FaPhoneAlt, FaRocketchat, FaShareAlt, FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { addProductAWishlist, reportProduct } from "../../Auth/product";
import Modal from "../Shared/Modal";
const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [seeDetails, setSeeDetails] = useState(false);
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
      <div className="w-full lg:w-[60%] mx-auto bg-white py-8 px-4">
        <div className="flex justify-between">
          <div>
            <h3>{product.productName}</h3>
            <h4>
              Posted Date:{product?.postedTime.date}-{product?.postedTime.month}
              -{product?.postedTime.year}
              <span> {product?.location}</span>
            </h4>
          </div>
          <div className="flex  gap-5">
            <h3 className="flex items-center gap-1">
              <FaShareAlt />
              <span>Share</span>
            </h3>
            <h3 className="flex items-center gap-1">
              <FaStar />
              <span>Save Ad</span>
            </h3>
          </div>
        </div>
        <div className=" lg:flex justify-between gap-4 my-8">
          <div className="my-5">
            <img className="h-[300px] w-[400px] mx-auto" src={product?.picture} alt="" />
            <h1>Price ${product?.price}</h1>
            <h3>Condition:{product?.productCondition}</h3>
            <h3>Brand Name:{product?.brandName}</h3>
            <p>Description:{product?.productDescription}</p>
          </div>
          <div>
            <h3 className="border border-gray-300 p-2">
              For Sale By {product?.sellerName}
            </h3>
            <h4 className="flex items-center gap-1 border border-gray-300 p-2">
              <FaPhoneAlt />
              {product?.sellerPhone}
            </h4>
            <h4 className="flex items-center gap-1 border border-gray-300 p-2">
              <FaRocketchat />
              <span>Chat</span>
            </h4>
            <div className="flex justify-between my-4">
              <button
                onClick={
                  user
                    ? () => handleWishList(_id)
                    : () => toast.error("Login First")
                }
                className=" bg-[#5F4B8BFF] p-1 text-white font-semibold rounded-lg"
              >
                Wishlist
              </button>
              <button
                onClick={
                  user
                    ? () => handleReportProduct(_id)
                    : () => toast.error("Login First")
                }
                className=" bg-[#FF1E1E] text-white font-semibold rounded-lg p-1"
              >
                Report
              </button>
            </div>
            <label
              onClick={
                user
                  ? () => setSelectedProduct(product)
                  : () => toast.error("Login First.")
              }
              htmlFor="purchase-modal"
              className=" mt-6 inline-flex items-center rounded-md shadow-sm btn w-full border border-[#5F4B8BFF] bg-[#5F4B8BFF] py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <Modal
          product={product}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductDetails;
