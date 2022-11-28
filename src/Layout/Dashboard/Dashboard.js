import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../Context/UserContext";
import Sidebar from "../../Components/Dashboard/Sidebar";
import { Oval } from "react-loader-spinner";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    if (user?.email) {
      fetch(`http://localhost:5000/user?email=${user?.email}`, {  headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },})
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setLoader(false);
        });
    }
  }, [user?.email]);

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
  return (
    <div>
      <>
        <div>
          <Sidebar userData={userData} />
        </div>
        <div>
          <Outlet />
        </div>
      </>
    </div>
  );
};

export default Dashboard;
