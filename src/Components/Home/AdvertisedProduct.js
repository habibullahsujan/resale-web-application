import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAdvertisedProducts } from "../../Auth/product";
import AdvertisedItem from "./AdvertisedItem";

const AdvertisedProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAdvertisedProducts()
      .then((data) => setProducts(data))
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <div className="lg:w-[90%] mx-auto my-20">
      <h2 className="font-bold text-lg">Advertised Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* {
            products.map(product=><AdvertisedItem product={product} key={product._id}/>)
        } */}
      </div>
    </div>
  );
};

export default AdvertisedProduct;
