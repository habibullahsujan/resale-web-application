import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import setJWTToken from "../../Authentication/setJWTToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";
  
  const onSubmit = (data) => {
    setLoading(true);
    loginUser(data.email, data.password)
      .then((result) => {
        const user=result.user;
        setJWTToken(user.email)
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleLoginWithGoogle = () => {
    setLoading(true);
    loginWithGoogle()
      .then((result) => {
        const user=result.user;
        const userInfo = {
          user_name: user?.displayName,
          user_email: user?.email,
          user_role: 'buyer',
          user_photo: user?.display_url,
        };
        fetch("https://server-side-phi-lake.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false)
            console.log(data)});
        setJWTToken(user?.email)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message)});
  };
  return (
    <>
      {loading ? (
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
      ) : (
        <div>
          <div className="flex flex-col max-w-md  bg-white p-6 rounded-md sm:p-10 border border-blue-500 mx-auto my-20">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Login</h1>
              <p className="text-sm dark:text-gray-400">
                Login to access your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="space-y-4 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label className="" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email address is required.",
                  })}
                  id="emailAddress"
                  type="email"
                  name="email"
                  className="block w-full text-black px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {errors?.email?.message && (
                  <p className="text-red-600">{errors?.email?.message}</p>
                )}
              </div>
              <div>
                <label className="" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password must be required.",
                  })}
                  id="password"
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {errors?.password?.message && (
                  <p className="text-red-600">{errors?.password?.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
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
                <div
                  onClick={() => handleLoginWithGoogle()}
                  className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center gap-4 border border-gray-200 py-3"
                >
                  <span>Google</span>
                  <FaGoogle />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
