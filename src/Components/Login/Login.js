import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="">
      <div className="flex flex-col max-w-md bg-[#5F4B8BFF] text-white p-6 rounded-md sm:p-10 border border-blue-500 mx-auto my-20">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-400">
            Login to access your account
          </p>
        </div>
        <form
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm">
                Account Type
              </label>
              <select
                name=""
                id=""
                className="w-full px-3 py-2 border rounded-md text-black"
              >
                <option value="" selected>
                  Buyer Account
                </option>
                <option value="">Seller Account</option>
              </select>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
              <Link className="text-xs hover:underline dark:text-gray-400">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md border border-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Login
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Don't have an account?
              <Link
                to={"/signup"}
                className="hover:underline dark:text-violet-400 "
              >
                Sign up
              </Link>
            </p>
            <div className="flex justify-center">
              <span className="font-bold">Login With Social Account</span>
            </div>
            <btn className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center gap-4 border border-gray-200 py-3">
              <span>Google</span>
              <FaGoogle />
            </btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
