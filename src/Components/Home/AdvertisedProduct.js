import React, { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

const AdvertisedProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      axios.get("https://server-side-phi-lake.vercel.app/advertised/products").then((data) => {
        setProducts(data.data);
        setLoading(false);
      });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={40}
          width={40}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  return (
    <>
      {products.length ? (
        <div className="lg:w-[90%] mx-auto my-20">
          <h2 className="font-bold text-lg">Advertised Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10">
            {products?.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdvertisedProduct;
