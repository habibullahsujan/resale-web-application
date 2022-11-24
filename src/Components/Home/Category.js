import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryName, categoryId, categoryPicture } = category;
  return (
    <Link to={`/single_category/${categoryId}`}>
      <div className="duration-300 cursor-pointer  transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
          <img className="h-40 w-40 mx-auto" src={categoryPicture} alt="" />
          <h6 className="mb-2 font-semibold leading-5 text-center">
            {categoryName}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default Category;
