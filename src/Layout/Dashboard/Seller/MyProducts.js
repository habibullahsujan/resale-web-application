import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { getSellerUploadedProduct } from "../../../Auth/product";
import { AuthContext } from "../../../Context/UserContext";

const MyProducts = () => {
  const { userData } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (userData) {
      getSellerUploadedProduct(userData?.user_email)
        .then((data) => {
          setProducts(data);
          setLoading(false);
          console.log(data);
        })
        .catch((err) => {
          setLoading(false);

          toast.error(err.message);
        });
    }
  }, [userData]);

  console.log(products);
  return (
    <>
      {loading ? (
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
      ) : (
        <div className="text-black lg:ml-64">
          <table class="min-w-full border-collapse block md:table">
            <thead class="block md:table-header-group">
              <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative bg-black">
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Product Name
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Product Price
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Total Views
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Product Status
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Advertise
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="block md:table-row-group">
              {products.map((product) => (
                <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">
                      Product Name
                    </span>
                    {product?.productName}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">
                      Product Price
                    </span>
                    ${product?.price}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">
                      0
                    </span>
                    0
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">
                      Product Status
                    </span>
                    {product?.sold ? "Sold" : "Available"}
                  </td>
                  {product?.sold || (
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span class="inline-block w-1/3 md:hidden font-bold">
                      Advertise
                    </span>
                    <button class="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                     Advertise
                    </button>
                    </td>
                  )}
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">
                      Actions
                    </span>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MyProducts;
