import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";

const ProductDetails = () => {
  const product = useLoaderData();
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <ProductCard
        product={product}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default ProductDetails;
