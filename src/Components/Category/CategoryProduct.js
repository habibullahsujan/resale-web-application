import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { addProductAWishlist, reportProduct } from "../../Auth/product";
import { AuthContext } from "../../Context/UserContext";
import Modal from "./Modal";

const CategoryProduct = ({ category }) => {
  const {user}=useContext(AuthContext)
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
  } = category;

  const handleWishList = (id) => {
    const wishListData={

      user_email:user?.email,
      productId:id,
      productNumber:productId,
      product_name:productName,
      product_price:price,
      product_img:picture,
      product_market_price:originalPrice,
      productImg:picture,
      seller_location:location,
      seller_email:sellerEmail,
      seller_name:sellerName,
      sellerIsVerified,

    }
    addProductAWishlist(wishListData )
      .then((data) => console.log(data))
      .catch((error) => toast.error(error.message));
  };
  const handleReportProduct = (id) => {
    const reportedProductData={
      user_email:user?.email,
      user_name:user?.displayName,
      productId:id,
      productNumber:productId,
      product_name:productName,
      product_price:price,
      product_img:picture,
      product_market_price:originalPrice,
      seller_location:location,
      seller_email:sellerEmail,
      seller_name:sellerName,
      seller_number:sellerPhone,
      sellerIsVerified,
      message:'',
    }
    reportProduct(reportedProductData)
      .then((data) => console.log(data))
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-60 mx-auto w-96" src={picture} alt="" />

        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">
            {productName}
          </h5>
          <div className="p-2 rounded-lg">
            <div className="flex justify-between my-5">
              <button
                onClick={(id) => handleWishList(_id)}
                className=" bg-[#5F4B8BFF] p-1 text-white font-semibold rounded-lg"
              >
                Wishlist
              </button>
              <button
                onClick={(id) => handleReportProduct(_id)}
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
                <p>Seller Name:{sellerName}</p>
                {sellerIsVerified && (
                  <FaCheckCircle className="text-blue-700" />
                )}
              </div>
              <p>Seller Email:{sellerEmail}</p>
              <p>Seller Phone:{sellerPhone}</p>
              <p>Number of year use:{yearOfUse}</p>
            </div>
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
      <Modal category={category} />
    </div>
  );
};

export default CategoryProduct;
