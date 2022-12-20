import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://server-side-phi-lake.vercel.app/all-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filteredProduct = products.filter((product) =>
    product.productName.toLowerCase().includes(search)
  );
  return (
    <div className="w-[90%] lg:w-full mx-auto my-5">
      <form action="" className="bg-blue-400 p-5 rounded-lg">
        <div className="flex justify-center gap-2">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 rounded-lg"
            placeholder="Search your desired laptop."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="border border-white px-4 font-semibold py-1 rounded-lg"
          >
            Search
          </button>
        </div>
      </form>
      <div className="my-3">
        {search &&
          filteredProduct.map((product) => (
            <div className="my-4">
              {" "}
              <Link
                to={`/product/details/${product?._id}`}
                className="hover:border border-gray-600 p-1 "
              >
                {product?.productName}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
