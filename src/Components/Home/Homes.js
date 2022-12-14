import React from "react";
import Search from "../SearchComponent/Search";
import AdvertisedProduct from "./AdvertisedProduct";
import Carousel from "./Carousel";

import ProductCategory from "./ProductCategory";

import Subscribe from "./Subscribe";


const Homes = () => {
  return (
    <div>
      <div className="lg:w-[85%] mx-auto">
        <div>
          <Search/>
        </div>
        <Carousel/>
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
