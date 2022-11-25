import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAdvertisedProducts } from "../../Auth/product";
import AdvertisedItem from "./AdvertisedItem";

const AdvertisedProduct = () => {
  const [products, setProducts] = useState([]);

  const loadProducts=()=>{
    getAdvertisedProducts()
    .then((data) => setProducts(data))
    .catch((err) => toast.error(err.message));
  }
  useEffect(() => {
    loadProducts()
  }, []);
  return (
    <div className="lg:w-[90%] mx-auto my-20">
      <h2 className="font-bold text-lg">Advertised Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10">
       {
        products?.map(product=><AdvertisedItem product={product} key={product._id} loadProducts={loadProducts}/>)
       }
      </div>
    </div>
  );
};

export default AdvertisedProduct;
