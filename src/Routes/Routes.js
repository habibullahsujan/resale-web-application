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
import WelcomePage from "../Components/Dashboard/WelcomePage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import Blog from "../Components/Blog/Blog";
import ReportedItems from "../Layout/Dashboard/Admin/ReportedItems";
import MyWishlist from "../Layout/Dashboard/Buyer/MyWishlist";
import AllProducts from "../Components/AllProducts/AllProducts";
import Payment from "../Components/Payment/Payment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homes /> },
      {
        path: "/single_category/:id",
        element: (
          <PrivateRoute>
            <SingleCategory />
          </PrivateRoute>
        ),
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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader:({params})=>fetch(`http://localhost:5000/payment/${params.id}`)
      },
      {
        path: "/all-products",
        element: <AllProducts />,
        loader: () => fetch(`http://localhost:5000/all-products`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <WelcomePage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-seller",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported-products",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyer",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-wishlist",
        element: (
          <PrivateRoute>
            <MyWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-buyers",
        element: (
          <SellerRoute>
            <MyBuyers />
          </SellerRoute>
        ),
      },
    ],
  },
]);
