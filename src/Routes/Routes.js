import { createBrowserRouter } from "react-router-dom";
import SingleCategory from "../Components/Category/SingleCategory";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Homes from "../Components/Home/Homes";
import Login from "../Components/Login/Login";
import ErrorPage from "../Components/Shared/ErrorPage";
import Signup from "../Components/Signup/Signup";
import AllBuyers from "../Layout/Dashboard/Admin/AllBuyers";
import AllSeller from "../Layout/Dashboard/Admin/AllSeller";
import MyOrders from "../Layout/Dashboard/Buyer/MyOrders";

import Main from "../Layout/Main";
import AddProduct from "../Layout/Dashboard/Seller/AddProduct";
import MyBuyers from "../Layout/Dashboard/Seller/MyBuyers";
import MyProducts from "../Layout/Dashboard/Seller/MyProducts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homes /> },
      {
        path: "/single_category/:id",
        element: <SingleCategory />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/single_category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/all-seller", element: <AllSeller /> },
      { path: "/dashboard/all-buyer", element: <AllBuyers /> },
      { path: "/dashboard/my-orders", element: <MyOrders /> },
      { path: "/dashboard/add-product", element: <AddProduct /> },
      { path: "/dashboard/my-products", element: <MyProducts /> },
      { path: "/dashboard/my-buyers", element: <MyBuyers /> },
    ],
  },
]);
