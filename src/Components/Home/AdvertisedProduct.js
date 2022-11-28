import React, { useState } from "react";

import ProductCard from "../Shared/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Oval } from "react-loader-spinner";

const AdvertisedProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["advertised"],
    queryFn: () =>
      fetch("http://localhost:5000/advertised/products").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
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

  if (error) return "An error has occurred: " + error.message;

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
                refetch={refetch}
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
