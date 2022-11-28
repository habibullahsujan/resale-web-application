import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import {
  deleteFromReportedCollection,
  deleteProduct,
} from "../../../Auth/product";

const ReportedItems = () => {
  const {
    isLoading,
    error,
    data: reportedProducts,
    refetch,
  } = useQuery({
    queryKey: ["reported-products"],
    queryFn: () =>
      fetch("http://localhost:5000/reported-products").then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <h2>Loading.....Data...</h2>
      </div>
    );
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }
  const handleDeleteReportedItem = (productId, reportedProductId) => {
    deleteProduct(productId)
      .then((data) => {
        if (data.acknowledged) {
          deleteFromReportedCollection(reportedProductId)
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product successfully deleted.");
                refetch();
              }
            })
            .catch((err) => toast.error(err.message));
        }
      })
      .catch((error) => toast.error(error));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table lg:ml-[25%] mx-auto">
          <thead>
            <tr>
              <th>Seller Email</th>
              <th>Seller Number</th>
              <th>User Email</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts.map((product) => (
              <tr className="hover" key={product._id}>
                <td className="overflow-auto">{product?.seller_email}</td>
                <td>{product?.sellerPhone}</td>
                <td>{product?.user_email}</td>
                <td>{product?.product_name}</td>
                <td>{product?.product_price}</td>
                <td>
                  <button
                    onClick={() =>
                      handleDeleteReportedItem(product?.productId, product?._id)
                    }
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
