import { NavLink, useNavigate } from "react-router";

const DashSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-72 bg-[#0A1F22] text-white p-6 flex flex-col fixed h-screen z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-8 w-8 bg-[#B08D48] rounded-lg flex items-center justify-center">
          <div className="h-4 w-4 border-2 border-white rotate-45"></div>
        </div>
        <span className="text-xl font-black tracking-tighter uppercase">Netrokona Uni</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
            
          <SidebarItem to="/" label="Home" />
          <SidebarItem to="/dashboard" label="Dashboard" end={true} />
          <SidebarItem to="/dashboard/alumni" label="Alumni Directory" />
          <SidebarItem to="/events" label="Upcoming Events" />
          <SidebarItem to="/about" label="About Nexus" />
        </ul>
      </nav>

      {/* Logout Button */}
      <button
        onClick={() => navigate("/login")}
        className="mt-auto py-3 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all font-bold text-sm"
      >
        Logout
      </button>
    </div>
  );
};

// Sidebar link style handler
const SidebarItem = ({ to, label, end }) => (
  <li>
    <NavLink
      to={to}
      end={end} // Dashboard index-er jonne 'end' proyojon jate sob somoy active na thake
      className={({ isActive }) =>
        `block px-4 py-3 rounded-xl cursor-pointer transition-all font-medium ${
          isActive
            ? "bg-[#B08D48] text-white shadow-lg shadow-[#B08D48]/30"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {label}
    </NavLink>
  </li>
);

export default DashSidebar;