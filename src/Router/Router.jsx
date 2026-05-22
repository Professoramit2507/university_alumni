import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Section/Home";
import Alumni from "../Components/NavComponents/Alumni";
import Events from "../Components/NavComponents/Event";
import About from "../Components/NavComponents/About";
import Login from "../Components/NavComponents/Login";
import Register from "../Components/NavComponents/Register";
import DashboardRoot from "../Components/Dashboard/DashboardRoot";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import DashAlumnai from "../Components/Dashboard/DashAlumnai";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/alumni-directory",
        element: <Alumni></Alumni>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRoot></DashboardRoot>,
    children : [
        {
            index:true,
            element:<DashboardLayout></DashboardLayout>
        },
        {
            path:"alumni",
            element:<DashAlumnai></DashAlumnai>
        }
    ]
  },
]);
