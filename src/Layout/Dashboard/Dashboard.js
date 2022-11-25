import React, { useContext } from "react";
import { Oval } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../Context/UserContext";
import Sidebar from "../../Components/Dashboard/Sidebar";

const Dashboard = () => {
  const { userData, loader } = useContext(AuthContext);
// console.log(userData);
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
      <Sidebar userData={userData} />
      <Outlet />
    </div>
  );
};

export default Dashboard;
