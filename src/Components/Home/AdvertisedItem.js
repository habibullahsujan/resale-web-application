import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import Modal from "../Category/Modal";

const AdvertisedItem = ({ product, loadProducts }) => {
  const {
    brandName,
    location,
    originalPrice,
    price,
    sellerName,
    sellerIsVerified,
    sellerEmail,
    sellerPhone,
    yearOfUse,
  } = product;
  return (
    <>
      {product?.saleStatus === "unsold" && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={product?.picture} alt="" />
            <div className="p-5">
              <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2 dark:text-white">
                {product?.productName}
              </h5>
              <div className="text-gray-600 my-6">
                <p>Brand Name:{brandName}</p>
                <p>Seller Location:{location}</p>
                <p>Market Price:${originalPrice}</p>
                <p>Seller Price:${price}</p>
                <div className="flex gap-4 items-center">
                  <p>Seller Name:{sellerName}</p>
                  {sellerIsVerified && (
                    <FaCheckCircle
                      title="seller is verified"
                      className="text-blue-700"
                    />
                  )}
                </div>
                <p>Seller Email:{sellerEmail}</p>
                <p>Seller Phone:{sellerPhone}</p>
                <p>Number of year use:{yearOfUse}</p>
              </div>
              <div>
                <label
                  htmlFor="purchase-modal"
                  className="btn w-full border border-[#5F4B8BFF] bg-[#5F4B8BFF] py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  Purchase
                </label>
              </div>
            </div>
          </div>
          <Modal category={product} loadProducts={loadProducts} />
        </div>
      )}
    </>
  );
};

export default AdvertisedItem;
