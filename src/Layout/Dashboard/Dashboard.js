import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../Context/UserContext";
import Sidebar from "../../Components/Dashboard/Sidebar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData]=useState({});
  const [loader, setLoader]=useState(true)
  useEffect(() => {
    setLoader(true);
    if (user?.email) {
      fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setLoader(false);
        });
    }
  }, [user?.email]);

  if(loader){
    return <div>Loading....</div>
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
