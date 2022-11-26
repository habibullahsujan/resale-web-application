import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const WelcomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
     <h1 className="font-bold text-2xl">Hello, {user?.displayName}</h1>
     <h1 className="font-bold">Welcome to your dashboard.</h1>
    </div>
  );
};

export default WelcomePage;
