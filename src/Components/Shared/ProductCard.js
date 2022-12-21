import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  FaArrowCircleDown,
  FaArrowCircleRight,
  FaArrowCircleUp,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { addProductAWishlist, reportProduct } from "../../Auth/product";
import { AuthContext } from "../../Context/UserContext";
import Modal from "../Shared/Modal";

const ProductCard = ({
  product,
  loadProducts,
  setSelectedProduct,
  selectedProduct,
}) => {
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
  return (
    <>
      <div className="w-[90%] lg:w-full mx-auto flex flex-col p-4 shadow-xl border border-gray-400 rounded-lg">
        <img
          className=" rounded-lg shadow-lg h-60 mx-auto w-96"
          src={picture}
          alt=""
        />
        <div className="flex justify-between items-center gap-3">
          <h5 className="text-gray-900 font-bold tracking-tight dark:text-white my-5">
            {productName}
          </h5>
          <h5 className="text-green-500 font-bold">{price}$</h5>
        </div>
        <div className="flex flex-col flex-1 rounded-lg w-full">
          <div className="flex-1">
            <div className="text-gray-900 text-2xl font-bold"></div>
            <div className="p-2 rounded-lg">
              {
                <Link
                  to={`/product/details/${_id}`}
                  className="flex items-center gap-3 border border-gray-500 rounded-lg bg-gray-300 p-1"
                >
                  <span>See Details</span>
                  <FaArrowCircleRight />
                </Link>
              }
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
