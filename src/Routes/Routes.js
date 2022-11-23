import { createBrowserRouter } from "react-router-dom";
import Homes from "../Components/Home/Homes";
import ErrorPage from "../Components/Shared/ErrorPage";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Homes /> }],
  },
]);
