import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import Cart from "./Cart";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: wishlists,
  } = useQuery({
    queryKey: ["my-wishlist"],
    queryFn: () =>
      fetch(`http://localhost:5000/my-wishlist?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const total = wishlists.reduce(
    (accumulator, currentValue) =>
      accumulator.product_price + currentValue.product_price,
    0
  );

  return (
    <>
      {wishlists?.length ? (
        <div className="lg:ml-[25%]">
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your Wishlist</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {wishlists.map((list) => (
                <Cart list={list} key={list._id} />
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">{total}$</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link
                to={"/"}
                type="button"
                className="px-6 py-2 border rounded-md dark:border-violet-400"
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </Link>
              <button
                type="button"
                className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
              >
                <span className="sr-only sm:not-sr-only">Continue to</span>
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-bold text-lg">
            You have not any items in the wishlist.Start{" "}
            <Link className="text-blue-500" to={"/all-products"}>Shopping</Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default MyWishlist;
