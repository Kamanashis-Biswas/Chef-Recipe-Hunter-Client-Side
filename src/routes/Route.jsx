import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ReceipeDetails from "../pages/ReceipeDetails/ReceipeDetails";
import ErrorPage from "../pages/Error/Error";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/all_chef_details"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/receipedetails/:id",
        element: (
          <PrivateRoute>
            <ReceipeDetails></ReceipeDetails>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
