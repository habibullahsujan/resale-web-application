import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Oval} from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Signup = () => {
  const { user, createUser, updateUserProfile, setLoader } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setError("Your password did not match.");
      setLoading(false);
      return;
    }
    setError("");
    let userRole;
    if (data.accountType === "buyer_account") {
      userRole = "buyer_account";
    } else {
      userRole = "seller_account";
    }
    const formData = new FormData();
    formData.append("image", data.profilePicture[0]);
    fetch(
      `https://api.imgbb.com/1/upload?key=ed10d9b0c9f2caf53afe65dfd8a4c97f`,
      { method: "POST", body: formData }
    )
      .then((res) => res.json())
      .then((img) => {
        if (img.status) {
          createUser(data.email, data.confirmPassword)
            .then((result) => {
              const profile = {
                displayName: data.userName,
                photoURL: img.data.display_url,
              };
              updateUserProfile(profile)
                .then(() => {
                  const userInfo = {
                    user_name: data?.userName,
                    user_email: data?.email,
                    user_role: userRole,
                    user_photo: img?.data.display_url,
                  };
                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                  })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
                  toast.success("your profile updated.");
                  setLoader(false)
                  navigate('/')
                  setLoading(false);
                })
                .catch((error) => {
                  toast.error(error.message);
                  setLoading(false);
                });
            })
            .catch((error) => {
              toast.error(error.message);
              setLoading(false);
            });
        }
      });
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
        <div className="my-10">
          <section className="bg-[#5F4B8BFF]  border border-blue-500 text-white max-w-4xl p-6 mx-auto rounded-md shadow-md">
            <h2 className="text-lg font-semibold  capitalize dark:text-white">
              Account settings
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="" htmlFor="username">
                    Username
                  </label>
                  <input
                    {...register("userName", {
                      required: "User name is require.",
                    })}
                    id="username"
                    type="text"
                    name="userName"
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  {errors?.userName?.message && (
                    <p className="text-red-600">{errors?.userName?.message}</p>
                  )}
                </div>
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
                  <label className="" htmlFor="profilePicture">
                    Profile Picture
                  </label>
                  <input
                    {...register("profilePicture", {
                      required: "Profile Picture is required.",
                    })}
                    id="profilePicture"
                    type="file"
                    name="profilePicture"
                    className="block text-black w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  {errors?.profilePicture?.message && (
                    <p className="text-red-600">
                      {errors?.profilePicture?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Account Type
                  </label>
                  <select
                    name="accountType"
                    id=""
                    {...register("accountType", {
                      required: "Account type must be selected.",
                    })}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  >
                    <option
                      value="buyer_account"
                      defaultValue={"Buyer account"}
                    >
                      Buyer Account
                    </option>
                    <option value="seller_account">Seller Account</option>
                  </select>
                  {errors?.accountType?.message && (
                    <p className="text-red-600">
                      {errors?.accountType?.message}
                    </p>
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
                <div>
                  <label className="" htmlFor="passwordConfirmation">
                    Password Confirmation
                  </label>
                  <input
                    {...register("confirmPassword")}
                    id="passwordConfirmation"
                    type="password"
                    name="confirmPassword"
                    className="block w-full px-4 py-2 text-black mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  {error && <p className="text-red-600">{error}</p>}
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Signup;
