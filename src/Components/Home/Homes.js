import React from "react";
import AdvertisedProduct from "./AdvertisedProduct";
import ProductCategory from "./ProductCategory";
import Slider from "./Slider";

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
        <ProductCategory />
      </div>
    </div>
  );
};

export default Homes;
