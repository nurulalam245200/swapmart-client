import DashboardLayout from "../../Layouts/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import ManageProduct from "../../Pages/DashBoard/ManageProduct/ManageProduct";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";

import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";

import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SallerRoute/SellerRoute";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import ManageSellerProduct from "../../Pages/DashBoard/ManageSellerProduct/ManageSellerProduct";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/manageSeller/:role",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/manageSellerProducts/:role",
        element: <ManageSellerProduct></ManageSellerProduct>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
