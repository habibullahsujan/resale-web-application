import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";

const SingleCategory = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categoryId = location.state;
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["single_category"],
    queryFn: () =>
      fetch(`https://server-side-phi-lake.vercel.app/single_category/${categoryId}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[90%] w-[95%] mx-auto my-10">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default SingleCategory;
