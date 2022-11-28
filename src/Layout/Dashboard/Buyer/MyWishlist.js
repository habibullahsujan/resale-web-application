import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { removeItemFromWishlist } from "../../../Auth/product";
import { AuthContext } from "../../../Context/UserContext";
import Cart from "./Cart";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: wishlists,
    refetch,
  } = useQuery({
    queryKey: ["my-wishlist"],
    queryFn: () =>
      fetch(`https://server-side-phi-lake.vercel.app/my-wishlist?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleRemoveItem = (id) => {
    removeItemFromWishlist(id, user?.email)
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item Removed.");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.message);
      });
  };

  return (
    <>
      {wishlists?.length ? (
        <div className="lg:ml-[25%]">
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your Wishlist</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {wishlists.map((list) => (
                <Cart
                  list={list}
                  key={list._id}
                  handleRemoveItem={handleRemoveItem}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-bold text-lg">
            You have no items in the wishlist.Start{" "}
            <Link className="text-blue-500" to={"/all-products"}>
              Shopping
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default MyWishlist;
