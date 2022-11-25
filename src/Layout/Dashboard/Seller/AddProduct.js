import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadNewProductData } from "../../../Auth/product";
import { uploadImage } from "../../../Auth/uploadImage";

import { AuthContext } from "../../../Context/UserContext";

const AddProduct = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productPicture = form.image.files[0];
    const productPrice = form.productPrice.value;
    const productCondition = form.productCondition.value;
    const productCategory = form.productCategory.value;
    const productMarketPrice = form.marketPrice.value;
    const yearOfUse = form.yearOfUse.value;
    const location = form.sellerLocation.value;
    const sellerMobile = form.sellerMobile.value;
    const description = form.description.value;

    let productCategoryId;
    if (productCategory === "DELL") {
      productCategoryId = 1;
    } else if (productCategory === "HP") {
      productCategoryId = 2;
    } else if (productCategory === "Lenovo") {
      productCategoryId = 3;
    } else if (productCategory === "Apple") {
      productCategoryId = 4;
    }

    uploadImage(productPicture)
      .then((imgData) => {
        if (imgData.success) {
          const newProduct = {
            saleStatus:'unsold',
            price: productPrice,
            originalPrice: productMarketPrice,
            picture: imgData?.data?.display_url,
            productCondition: productCondition,
            yearOfUse: yearOfUse,
            brandName: productCategory,
            productName: productName,
            categoryName: productCategory,
            categoryId: productCategoryId,
            sellerIsVerified: false,
            sellerName: userData?.user_name,
            sellerEmail: userData?.user_email,
            sellerPhone: sellerMobile,
            location: location,
            productDescription: description,
          };

          uploadNewProductData(newProduct)
            .then((data) => {
              form.reset();
              if (data.acknowledged) {
                toast.success("Your product successfully added.");
                navigate("/dashboard/my-products");
              }
            })
            .catch((err) => toast.error(err));
        }

        console.log(imgData);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-tr from-[#5F4B8BFF] to-sky-500">
        <section
          id="login"
          className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto"
        >
          <div className="p-6 bg-sky-100 rounded">
            <div className="flex items-center justify-center font-black m-3 mb-12">
              <h1 className="tracking-wide text-3xl text-gray-900">
                Sell Your Laptop
              </h1>
            </div>
            <form
              onSubmit={handleAddProduct}
              className="flex flex-col justify-center"
            >
              <div>
                <label className="text-sm font-medium">Product Name</label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Product Picture</label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  name="image"
                  placeholder="upload your product picture"
                  type="file"
                  id="image"
                  accept="image/*"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Product Price</label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Product Condition
                </label>
                <select
                  name="productCondition"
                  id=""
                  className="
                    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500"
                >
                  <option value="excellent" defaultValue={"excellent"}>
                    Excellent
                  </option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Product Category
                </label>
                <select
                  name="productCategory"
                  id=""
                  className="
                    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500"
                >
                  <option value="Apple" defaultValue={"4"}>
                    Apple
                  </option>
                  <option value="HP">HP</option>
                  <option value="DELL">DELL</option>
                  <option value="Lenovo">Lenovo</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Seller Mobile Number
                </label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="number"
                  name="sellerMobile"
                  placeholder="Seller Mobile Number"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Seller Location</label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="text"
                  name="sellerLocation"
                  placeholder="Seller Location"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Market Price</label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="number"
                  name="marketPrice"
                  placeholder="Market Price"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Year of use</label>
                <input
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="number"
                  name="yearOfUse"
                  placeholder="Year of use"
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Product Description
                </label>
                <textarea
                  className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  name="description"
                  placeholder="Product Description"
                ></textarea>
              </div>
              <button
                className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
                type="submit"
              >
                Add This Product
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
