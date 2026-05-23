
import { Navigate, Outlet } from "react-router";

const AdminProtectedRoute = () => {
  // সেশন স্টোরেজে চেক করবে অ্যাডমিন লগইন করা আছে কিনা
  const isAdminAuth = sessionStorage.getItem("isAdminAuthenticated") === "true";

  // যদি লগইন করা থাকে তবে ভেতরের পেজ দেখাবে (Outlet), না থাকলে লগইন পেজে রিডাইরেক্ট করবে
  return isAdminAuth ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;