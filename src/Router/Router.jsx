


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
import DashProfile from "../Components/Dashboard/DashProfile";
import DashAlumnai from "../Components/Dashboard/DashAlumnai";
import Suucess from "../Components/NavComponents/Suucess";
import Job from "../Components/Dashboard/Job";
import Donate from "../Components/Dashboard/Donate";

// আপনার প্রোফাইল এবং ডিরেক্টরি কম্পোনেন্টগুলো ইম্পোর্ট করে নিন (পাথ ঠিক করে নেবেন)
// import MyProfile from "../Components/Dashboard/MyProfile"; 
// import AlumniDirectory from "../Components/Dashboard/AlumniDirectory"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/alumni-directory",
        element: <Alumni />,
      },
      {
        path: "/success-stories",
        element:<Suucess/>
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRoot />,
    children: [
      {
        index: true,
        element: <DashboardLayout />,
      },
      {
        path: "my-profile",
        element: <DashProfile />, 
        
      },
      {
        path: "alumni",
        element: <DashAlumnai/>,

      },
      {
        path:"job-board",
        element:<Job/>
      },
      {
        path:"donation",
        element:<Donate/>
      }
    ],
  },
]);