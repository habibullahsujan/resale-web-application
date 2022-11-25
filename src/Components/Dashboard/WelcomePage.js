import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const WelcomePage = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
      <div className="flex justify-center items-center">
        <p className="text-6xl font-bold">Welc</p>
        <div className="w-9 h-9 border-8 border-dotted rounded-full animate-spin mt-3 border-[#5F4B8BFF]"></div>
        <p className="text-6xl font-bold mr-2">me</p>
        <p className="text-6xl font-bold">To</p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        {userData?.user_role === "admin" && (
          <p className="text-3xl font-medium">Admin Dashboard</p>
        )}
        {userData?.user_role === "seller" && (
          <p className="text-3xl font-medium">Seller Dashboard</p>
        )}
        {userData?.user_role === "buyer" && (
          <p className="text-3xl font-medium">Buyer Dashboard</p>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
