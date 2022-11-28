import React, { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [userData, setUserData]=useState({});
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      fetch(`https://server-side-phi-lake.vercel.app/user-admin?email=${user?.email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        });
    }
  }, [user?.email]);
  if (loading) {
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

  if (user && userData?.user_role === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
