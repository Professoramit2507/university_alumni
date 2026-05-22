import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  User,
  Users,
  Briefcase, // Job Board আইকনের জন্য
  HeartHandshake, // Donation আইকনের জন্য
  LogOut,
} from "lucide-react";

const DashSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // মোবাইলে সাইডবার ওপেন/ক্লোজ স্টেট

  const toggleSidebar = () => setIsOpen(!isOpen);

  // সাইডবারের ভেতরের মূল কন্টেন্ট (যা বড় এবং ছোট উভয় স্ক্রিনেই কমন থাকবে)
  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-[#B08D48] rounded-lg flex items-center justify-center">
            <div className="h-4 w-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-md font-black tracking-tighter uppercase">
            Netrokona University
          </span>
        </div>

        {/* মোবাইল স্ক্রিনে ক্লোজ বাটন */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-400 hover:text-white cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <SidebarItem
            to="/"
            label="Home"
            icon={<Home size={18} />}
            onClick={() => setIsOpen(false)}
          />
          <SidebarItem
            to="/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={18} />}
            end={true}
            onClick={() => setIsOpen(false)}
          />
          <SidebarItem
            to="/dashboard/my-profile"
            label="My Profile"
            icon={<User size={18} />}
            onClick={() => setIsOpen(false)}
          />
          <SidebarItem
            to="/dashboard/alumni"
            label="Alumni Directory"
            icon={<Users size={18} />}
            onClick={() => setIsOpen(false)}
          />
          {/* নতুন যুক্ত করা হয়েছে: Job Board */}
          <SidebarItem
            to="/dashboard/job-board"
            label="Job Board"
            icon={<Briefcase size={18} />}
            onClick={() => setIsOpen(false)}
          />
          {/* নতুন যুক্ত করা হয়েছে: Donation */}
          <SidebarItem
            to="/dashboard/donation"
            label="Donation"
            icon={<HeartHandshake size={18} />}
            onClick={() => setIsOpen(false)}
          />
        </ul>
      </nav>

      {/* Logout Button */}
      <button
        onClick={() => {
          setIsOpen(false);
          navigate("/login");
        }}
        className="mt-auto py-3 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all font-bold text-sm cursor-pointer flex items-center justify-center gap-2"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );

  return (
    <>
      {/* ১. মোবাইল হেডার বাটন (শুধুমাত্র lg স্ক্রিনের নিচে দেখা যাবে) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A1F22] text-white flex items-center px-6 justify-between z-40 shadow-md">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-[#B08D48] rounded flex items-center justify-center">
            <div className="h-3 w-3 border-2 border-white rotate-45"></div>
          </div>
          <span className="font-bold tracking-tight text-sm uppercase">
            Netrokona Uni
          </span>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white p-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ২. ডেস্কটপ সাইডবার (lg বা বড় স্ক্রিনে ফিক্সড থাকবে, ছোট স্ক্রিনে হাইড হবে) */}
      <div className="hidden lg:flex w-72 bg-[#0A1F22] text-white p-6 flex-col fixed h-screen z-50 border-r border-white/5">
        <SidebarContent />
      </div>

      {/* ৩. মোবাইল ড্রয়ার ও ওভারলে (AnimatePresence দিয়ে স্মুথ স্লাইড অ্যানিমেশন) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* ডার্ক ব্যাকগ্রাউন্ড ওভারলে */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />

            {/* মোবাইল স্লাইডার সাইডবার */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-[#0A1F22] text-white p-6 z-50 shadow-2xl"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// সাইডবার লিংক আইটেম (আইকন সাপোর্ট সহ)
const SidebarItem = ({ to, label, end, icon, onClick }) => (
  <li>
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium text-sm ${
          isActive
            ? "bg-[#B08D48] text-white shadow-lg shadow-[#B08D48]/20"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  </li>
);

export default DashSidebar;