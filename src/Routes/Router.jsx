import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import Home from "../Pages/HomePage/Home";

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
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>, 
      children: [
        {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>
        },
      ]
    },
  
]);

export default router;