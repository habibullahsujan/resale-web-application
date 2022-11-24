import React, { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

import { AuthContext } from "../../Context/UserContext";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setUserData(data);
      });
  }, [user]);
  console.log(userData);

  if (isLoading) {
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
      <div>
        <Sidebar userData={userData} />
      </div>
    </div>
  );
};

export default Dashboard;
