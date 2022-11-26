import React, { useContext } from "react";
import { Oval } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const SellerRoute = ({ children }) => {
  const { user, loader, userData } = useContext(AuthContext);

  const location = useLocation();

  if (loader) {
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

  if (user && userData?.user_role === "seller") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
