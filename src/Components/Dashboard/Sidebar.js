import React, { useContext, useState } from "react";
import { FaBars, FaRecycle } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import AdminMenu from "./AdminMenu";
import BuyerMenu from "./BuyerMenu";
import SellerMenu from "./SellerMenu";

const Sidebar = ({ userData }) => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  if (!userData) {
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
            <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 flex justify-center items-center gap-2">
              <FaRecycle className="h-8 w-8 text-[#5F4B8BFF]" />
              <Link to="/">Recycle</Link>
            </h2>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <div className="flex items-center space-x-4 p-2 mb-5">
                <img className="h-12 rounded-full" src={user?.photoURL} alt="" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                    {user?.displayName}
                  </h4>
                  {userData?.user_role === "seller" &&
                    userData?.sellerIsVerified && (
                      <span className="text-sm tracking-wide flex items-center space-x-1">
                        <svg
                          className="h-4 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <span className="text-gray-600">
                          {userData?.sellerIsVerified
                            ? "Verified"
                            : "Not Verified"}
                        </span>
                      </span>
                    )}
                </div>
              </div>
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
                  <BuyerMenu />
                </>
              )}
              {userData?.user_role === "seller" && <SellerMenu />}
            </nav>
          </div>
        </div>
        <div>
          <Link to={'/'} className="btn w-full my-1">Back To Home</Link>
          <hr />
          <li onClick={() => logOutUser()} className="btn w-full">
            logout
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
