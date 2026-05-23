


// import { createBrowserRouter } from "react-router";
// import Root from "../Components/Root/Root";
// import Home from "../Components/Section/Home";
// import Alumni from "../Components/NavComponents/Alumni";
// import Events from "../Components/NavComponents/Event";
// import About from "../Components/NavComponents/About";
// import Login from "../Components/NavComponents/Login";
// import Register from "../Components/NavComponents/Register";
// import DashboardRoot from "../Components/Dashboard/DashboardRoot";
// import DashboardLayout from "../Components/Dashboard/DashboardLayout";
// import DashProfile from "../Components/Dashboard/DashProfile";
// import DashAlumnai from "../Components/Dashboard/DashAlumnai";
// import Suucess from "../Components/NavComponents/Suucess";
// import Job from "../Components/Dashboard/Job";
// import Donate from "../Components/Dashboard/Donate";

// import AdminRoot from "../Components/Admin/AdminRoot";
// import AdminDashboard from "../Components/Admin/AdminDashboard";
// import ManageUser from "../Components/Admin/ManageUser";
// import FundManage from "../Components/Admin/FundManage";
// import EventMange from "../Components/Admin/EventMange";

// // আপনার প্রোফাইল এবং ডিরেক্টরি কম্পোনেন্টগুলো ইম্পোর্ট করে নিন (পাথ ঠিক করে নেবেন)
// // import MyProfile from "../Components/Dashboard/MyProfile"; 
// // import AlumniDirectory from "../Components/Dashboard/AlumniDirectory"; 

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/alumni-directory",
//         element: <Alumni />,
//       },
//       {
//         path: "/success-stories",
//         element:<Suucess/>
//       },
//       {
//         path: "/events",
//         element: <Events />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardRoot />,
//     children: [
//       {
//         index: true,
//         element: <DashboardLayout />,
//       },
//       {
//         path: "my-profile",
//         element: <DashProfile />, 
        
//       },
//       {
//         path: "alumni",
//         element: <DashAlumnai/>,

//       },
//       {
//         path:"job-board",
//         element:<Job/>
//       },
//       {
//         path:"donation",
//         element:<Donate/>
//       }
//     ],
//   },
//   {
//     path:"/admin",
//     element:<AdminRoot/>,
//     children:[
//       {
//         index: true,
//         element: <AdminDashboard/>,
//       },
//       {
//         path:"users",
//         element:<ManageUser/>
//       },
//       {
//         path:"funds",
//         element:<FundManage/>
//       },
//       {
//         path:"events",
//         element:<EventMange/>
//       }
//     ]
//   }
// ]);














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

// Admin Interface Components
import AdminRoot from "../Components/Admin/AdminRoot";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import ManageUser from "../Components/Admin/ManageUser";
import FundManage from "../Components/Admin/FundManage";
import EventMange from "../Components/Admin/EventMange";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminProtectedRoute from "../Components/Admin/AdminProtect";
// <-- Added Security Gatekeeper

export const router = createBrowserRouter([
  // PUBLIC WEBSITE ROUTES
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "alumni-directory",
        element: <Alumni />,
      },
      {
        path: "success-stories",
        element: <Suucess />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // PROTECTED ALUMNI/USER DASHBOARD ROUTES
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
        element: <DashAlumnai />,
      },
      {
        path: "job-board",
        element: <Job />,
      },
      {
        path: "donation",
        element: <Donate />,
      },
    ],
  },

  // SECURE ADMINISTRATION PANEL ROUTES
  {
    path: "/admin",
    children: [
      {
        path: "login", // Unprotected route at "/admin/login" using distinct credentials
        element: <AdminLogin />,
      },
      {
        element: <AdminProtectedRoute />, // Security shield wrapper block guarding children
        children: [
          {
            element: <AdminRoot />, // Shell housing Admin Sidebar layout structures
            children: [
              {
                index: true, // Matches "/admin" layout index path
                element: <AdminDashboard />,
              },
              {
                path: "dashboard", // Explicit mapping path for your NavLinks pointing to "/admin/dashboard"
                element: <AdminDashboard />,
              },
              {
                path: "users",
                element: <ManageUser />,
              },
              {
                path: "funds",
                element: <FundManage />,
              },
              {
                path: "events",
                element: <EventMange />,
              },
            ],
          },
        ],
      },
    ],
  },
]);