import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCard from "../Shared/ProductCard";

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoading, error, data:allProducts, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:5000/all-products').then(res =>
        res.json()
      )
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-[90%] mx-auto my-10">
      {allProducts.map((product) => (
        <ProductCard
          product={product}
          key={product._id}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default AllProducts;
