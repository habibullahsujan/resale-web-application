import React from "react";
import AdvertisedProduct from "./AdvertisedProduct";
import ProductCategory from "./ProductCategory";
import Slider from "./Slider";
import Subscribe from "./Subscribe";

const Homes = () => {
  return (
    <div>
      <div className="lg:w-[85%] mx-auto">
        <Slider />
      </div>
      <div>
        <AdvertisedProduct />
      </div>
      <div>
        <h3 className="font-bold text-center text-2xl">Buy and Sell Product By Categories</h3>
        <ProductCategory />
      </div>
      <div>
        <Subscribe/>
      </div>
    </div>
  );
};

export default Homes;
