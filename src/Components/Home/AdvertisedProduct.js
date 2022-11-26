import React, { useState } from "react";

import ProductCard from "../Shared/ProductCard";
import { useQuery } from "@tanstack/react-query";

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

  if (isLoading) return "Loading...";

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
