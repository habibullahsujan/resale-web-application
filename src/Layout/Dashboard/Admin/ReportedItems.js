import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const ReportedItems = () => {
    const {user}=useContext(AuthContext)
  const {
    isLoading,
    error,
    data: reportedProducts,
  } = useQuery({
    queryKey: ["reported-products"],
    queryFn: () =>
      fetch("http://localhost:5000/reported-products").then((res) =>
        res.json()
      ),
  });

  console.log(reportedProducts);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

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
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts.map((product) => (
              <tr className="hover" key={product._id}>
                <td>{product?.seller_email}</td>
                <td>{product?.sellerPhone}</td>
                <td>{product?.user_email}</td>
                <td>{product?.product_name}</td>
                <td>{product?.product_price}</td>
                <td>{}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
