import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import Home from "../Pages/HomePage/Home";
import Login from "../components/Login";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../Layouts/DashboardLayout";


const router = createBrowserRouter([
  {
    path:'*',
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
        {
        path: "/login",
        element:  <Login></Login>,
      },
        {
        path: "/admin/login",
        element: <AdminLogin/>,
      },
    ],
  },

   {
      path: '/dashboard/admin',
      element: <DashboardLayout />,
      children: [
        {
        path: "/dashboard/admin",
        element: <DashboardHome />
        },
      ]
    },
   
]);

export default router;