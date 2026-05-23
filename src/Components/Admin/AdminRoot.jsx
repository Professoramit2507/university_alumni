import { Outlet } from "react-router";
import AdminDashSideber from "./AdminDashSideber";

const AdminRoot = () => {
  return (
    <div className="flex min-h-screen bg-[#F4F1EA] font-sans">
      <AdminDashSideber />

      <main className="flex-1 ml-0 lg:ml-72 p-6 pt-24 lg:p-10 overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminRoot;
