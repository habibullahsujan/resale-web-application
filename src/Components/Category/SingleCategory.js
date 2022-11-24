import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

const SingleCategory = () => {
  const categories = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[90%] w-[95%] mx-auto my-10">
      {categories.map((category) => (
        <CategoryProduct key={category._id} category={category} />
      ))}
    </div>
  );
};

export default SingleCategory;
