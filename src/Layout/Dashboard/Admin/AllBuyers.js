import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const AllBuyers = () => {

  const {userData}=useContext(AuthContext);

  const {
    isLoading,
    error,
    data: buyers,
  } = useQuery({
    queryKey: ["all-buyer"],
    queryFn: () =>
      fetch("http://localhost:5000/all-buyer").then((res) => res.json()),
  });

  return (
    <div className="text-black lg:ml-64 bg-blue-400">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Photo
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {buyers &&
            buyers.map((buyer) => (
              <tr
                key={buyer._id}
                className="border border-grey-500 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Photo
                  </span>
                  <img className="h-10 w-20" src={buyer?.user_photo} alt="" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Name
                  </span>
                  {buyer?.user_name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Email
                  </span>
                  {buyer?.user_email}
                </td>

                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button
                    //  onClick={openModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>{" "}
                  {/* <DeleteModal
                isOpen={isOpen}
                closeModal={closeModal}
                modalHandler={modalHandler}
                id={product?._id}
              /> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
