import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { advertisedAProduct, deleteProduct } from "../../../Auth/product";
import DeleteModal from "../../../Components/Modal/DeleteModal";
import { AuthContext } from "../../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`,
        {
          headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );
      const data = await res.json();
      return data;
    },
  });


  const modalHandler = (id) => {
    deleteProduct(id, user?.email)
      .then((data) => {
        toast.success("Product successfully deleted.");
        refetch();
      })
      .catch((error) => toast.error(error));
  };

  const handleAdvertise = (id) => {
    advertisedAProduct(id)
      .then((data) => {
        toast.success(
          "Your product successfully advertised. It will be show homepage form now."
        );
      })
      .catch((error) => toast.error(error.message));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={40}
          width={40}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  return (
    <>
      {products && Array.isArray(products) && products.length > 0 ? (
        <div className="text-black lg:ml-64">
          <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative bg-black">
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Product Name
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Product Price
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Total Views
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Product Status
                </th>

                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Advertise
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {products &&
                products.map((product) => (
                  <tr
                    key={product._id}
                    className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                  >
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Product Name
                      </span>
                      {product?.productName}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Product Price
                      </span>
                      ${product?.price}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        0
                      </span>
                      0
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Product Status
                      </span>
                      {product?.saleStatus === "sold" ? "Sold" : "unsold"}
                    </td>

                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Advertise
                      </span>
                      {product?.isAdvertised ? (
                        <span className="font-semibold bg-sky-500 p-1 rounded-lg">
                          Product is advertising...
                        </span>
                      ) : (
                        <button
                          disabled={product?.saleStatus === "sold"}
                          onClick={(id) => handleAdvertise(product?._id)}
                          className="bg-green-400 text-white font-bold py-1 px-2 border border-green-500 rounded"
                        >
                          Advertise
                        </button>
                      )}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>
                      <button
                        onClick={openModal}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                      >
                        Delete
                      </button>{" "}
                      <DeleteModal
                        isOpen={isOpen}
                        closeModal={closeModal}
                        modalHandler={modalHandler}
                        id={product?._id}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="h-screen text-gray-600 gap-5 flex justify-center items-center text-2xl font-bold">
            You haven't upload any product yet.
            <Link to={"/"}>
              <button classes="px-6 py-2 text-medium font-semibold rounded-full">
                Go Home
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default MyProducts;
