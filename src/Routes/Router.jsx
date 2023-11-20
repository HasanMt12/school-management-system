import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import Home from "../Pages/HomePage/Home";
import AdminLogin from "../components/AdminLogin";
import AdminRoutes from "./AdminRoute";



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
        element: <Home></Home>,
      },
    ],
  },

   {
      path: '/dashboard/admin',
      element: <AdminRoutes />, 
      children: [
        {
        path: "/dashboard/admin",
        element: <DashboardHome></DashboardHome>
        },
      ]
    },
    {
      path: '/dashboard/student',
      element: <AdminRoutes />, 
      children: [
        {
        path: "/dashboard/admin",
        element: <DashboardHome></DashboardHome>
        },
      ]
    },
   {
        path: "/login",
        element: <AdminLogin/>
      },
]);

export default router;