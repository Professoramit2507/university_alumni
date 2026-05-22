import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router"; // Essential for routing

const students = [
  {
    name: "Rifat Hossain",
    id: "CSE2021005",
    semester: "6th",
    img: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Nusrat Jahan",
    id: "CSE2021008",
    semester: "6th",
    img: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Tanvir Ahmed",
    id: "CSE2021016",
    semester: "6th",
    img: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Sadia Islam",
    id: "CSE2021012",
    semester: "6th",
    img: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "Mehedi Hasan",
    id: "CSE2021019",
    semester: "6th",
    img: "https://i.pravatar.cc/150?u=5",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F4F1EA] font-sans">
      {/* SIDEBAR - Fixed so it doesn't scroll */}
      <div className="w-72 bg-[#0A1F22] text-white p-6 flex flex-col fixed h-screen z-50">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-8 bg-[#B08D48] rounded-lg flex items-center justify-center">
            <div className="h-4 w-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-xl font-black tracking-tighter">Netrokona University</span>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {/* Using the custom SidebarItem that handles routing */}
            <SidebarItem to="/dashboard" label="Dashboard" />
            <SidebarItem to="/dashboard" label="My Profile" />
            <SidebarItem to="/dashboard/alumni" label="Alumni Directory" />
            <SidebarItem to="/events" label="Upcoming Events" />
            <SidebarItem to="/about" label="About Nexus" />
          </ul>
        </nav>

        <button
          onClick={() => navigate("/login")}
          className="mt-auto py-3 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all font-bold text-sm"
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT - Added ml-72 to offset the fixed sidebar */}
      <div className="flex-1 ml-72 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Welcome back, Amit Mahmud Amil
            </h1>
            <p className="text-gray-500">
              Here is what's happening in your network today.
            </p>
          </div>
          <img
            src="https://i.pravatar.cc/150?u=amit"
            className="h-12 w-12 rounded-full border-2 border-[#B08D48]"
            alt="User"
          />
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatCard title="Current CGPA" value="3.68" icon="📊" />
          <StatCard title="Credits Completed" value="112 / 140" icon="🎓" />
          <StatCard title="Events Joined" value="14" icon="🎟️" />
          <StatCard title="Project Portfolio" value="8" icon="💼" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PROFILE SUMMARY */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/150?u=amit"
              alt="profile"
              className="rounded-2xl w-24 h-24 mb-4 shadow-lg border-4 border-[#F4F1EA]"
            />
            <h2 className="text-xl font-bold text-gray-900">
              Amit Mahmud Amil
            </h2>
            <p className="text-[#B08D48] font-bold text-sm mb-4">
              CSE Dept. | 202104024
            </p>
            <div className="w-full space-y-2 text-sm text-gray-600 mb-6">
              <p className="flex justify-between border-b pb-1">
                <span>Email:</span> <b>amit@email.com</b>
              </p>
              <p className="flex justify-between border-b pb-1">
                <span>Status:</span> <b className="text-green-600">Active</b>
              </p>
            </div>
            <button className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-[#B08D48] transition-colors font-bold">
              Edit Profile
            </button>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-[#B08D48]">✨</span> Achievements
            </h2>
            <div className="space-y-4">
              <AchievementItem
                icon="🏆"
                title="Programming Contest"
                date="Winner - 2025"
              />
              <AchievementItem
                icon="🎖"
                title="Dean's List"
                date="Fall Semester"
              />
              <AchievementItem
                icon="📜"
                title="Full Stack Dev"
                date="Certified by Google"
              />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="bg-gradient-to-br from-[#102A2D] to-[#0A1F22] p-8 rounded-[2rem] text-white shadow-xl shadow-[#102A2D]/20">
            <h2 className="text-xl font-bold mb-4">Nexus Tip</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your profile is 85% complete. Alumni are 3x more likely to reach
              out to students with a completed portfolio.
            </p>
            <button className="px-6 py-3 bg-[#B08D48] rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              Complete Profile
            </button>
          </div>
        </div>

        {/* STUDENT DIRECTORY */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Recommended Network
            </h2>
            <button className="text-[#B08D48] font-bold text-sm hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {students.map((s, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 text-center"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-[#B08D48]/20"
                />
                <h3 className="font-bold text-gray-900 text-sm truncate">
                  {s.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  {s.semester} Sem | {s.id}
                </p>
                <button className="w-full py-2 text-xs bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-[#B08D48] hover:text-white transition-all">
                  View Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS (Now with React Router integration) ---

const SidebarItem = ({ to, label }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-3 rounded-xl cursor-pointer transition-all font-medium ${
          isActive
            ? "bg-[#B08D48] text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {label}
    </NavLink>
  </li>
);

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm flex items-center gap-4">
    <div className="text-3xl bg-[#F4F1EA] h-12 w-12 flex items-center justify-center rounded-xl">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        {title}
      </p>
      <p className="text-xl font-black text-gray-900">{value}</p>
    </div>
  </div>
);

const AchievementItem = ({ icon, title, date }) => (
  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
    <div className="text-2xl">{icon}</div>
    <div>
      <p className="font-bold text-gray-900 text-sm">{title}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  </div>
);

export default Dashboard;
