import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import AdminMenu from "./AdminMenu";
import BuyerMenu from "./BuyerMenu";
import SellerMenu from "./SellerMenu";

const Sidebar = ({ userData }) => {
  const { user,logOutUser } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">Recycle</Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 ">
              <Link to="/">Recycle</Link>
            </h2>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {userData?.user_role === "admin" && (
                <>
                  <AdminMenu />
                </>
              )}
              {userData?.user_role === "buyer" && (
                <>
                  <SellerMenu />
                </>
              )}
              {userData?.user_role === "seller" && <BuyerMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button onClick={()=>logOutUser()} className="btn w-full">logout</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
