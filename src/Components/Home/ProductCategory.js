import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const ProductCategory = () => {
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  if(isLoading){
    return <div>Loading....</div>
  }

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
