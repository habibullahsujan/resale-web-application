import { createBrowserRouter } from "react-router-dom";
import SingleCategory from "../Components/Category/SingleCategory";
import Homes from "../Components/Home/Homes";
import Login from "../Components/Login/Login";
import ErrorPage from "../Components/Shared/ErrorPage";
import Signup from "../Components/Signup/Signup";
import Main from "../Layout/Main";

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
]);
