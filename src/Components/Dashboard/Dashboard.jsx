
import { motion } from "framer-motion";

const students = [
  {
    name: "Rifat Hossain",
    id: "CSE2021005",
    semester: "7th",
    img: "https://i.pravatar.cc/150?u=1",
    interest: "AI & ML",
  },
  {
    name: "Nusrat Jahan",
    id: "CSE2021008",
    semester: "7th",
    img: "https://i.pravatar.cc/150?u=2",
    interest: "Web Dev",
  },
  {
    name: "Tanvir Ahmed",
    id: "CSE2021016",
    semester: "7th",
    img: "https://i.pravatar.cc/150?u=3",
    interest: "Cybersecurity",
  },
  {
    name: "Sadia Islam",
    id: "CSE2021012",
    semester: "7th",
    img: "https://i.pravatar.cc/150?u=4",
    interest: "UI/UX Design",
  },
  {
    name: "Mehedi Hasan",
    id: "CSE2021019",
    semester: "7th",
    img: "https://i.pravatar.cc/150?u=5",
    interest: "Cloud Eng.",
  },
];

const Dashboard = () => {
  

  return (
    <>
      {/* HEADER AREA */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Welcome back, Amit Mahmud Amil
          </h1>
          <p className="text-gray-500">
            Thank you for supporting and staying connected with your alma mater.
          </p>
        </div>
        <img
          src="https://i.pravatar.cc/150?u=amit"
          className="h-12 w-12 rounded-full border-2 border-[#B08D48]"
          alt="Amit Mahmud Amil Profile"
        />
      </header>

      {/* Alumni Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Current Company"
          value="Google LLC"
          icon="🏢"
          iconLabel="company"
        />
        <StatCard
          title="Yrs of Experience"
          value="5+ Years"
          icon="💼"
          iconLabel="experience"
        />
        <StatCard
          title="Mentorship Hours"
          value="32 Hours"
          icon="🤝"
          iconLabel="mentorship"
        />
        <StatCard
          title="Alumni Fund Contrib."
          value="$500"
          icon="❤️"
          iconLabel="donation"
        />
      </div>

      {/* THREE COLUMN GRID ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* PROFILE SUMMARY */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <img
            src="https://i.pravatar.cc/150?u=amit"
            alt="Amit Mahmud Amil"
            className="rounded-2xl w-24 h-24 mb-4 shadow-lg border-4 border-[#F4F1EA]"
          />
          <h2 className="text-xl font-bold text-gray-900">
            Amit Mahmud Amil
          </h2>
          <p className="text-[#B08D48] font-bold text-sm mb-1">
            Senior Software Engineer
          </p>
          <p className="text-xs text-gray-400 mb-4">CSE Dept. | Batch 2017</p>
          
          <div className="w-full space-y-2 text-sm text-gray-600 mb-6">
            <p className="flex justify-between border-b pb-1">
              <span>Location:</span> <b>California, USA</b>
            </p>
            <p className="flex justify-between border-b pb-1">
              <span>Status:</span>{" "}
              <b className="text-blue-600">Verified Alumni</b>
            </p>
          </div>
          
          <button className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-[#B08D48] transition-colors font-bold cursor-pointer">
            Update Workplace
          </button>
        </div>

        {/* ALUMNI ACHIEVEMENTS / RECOGNITIONS */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#B08D48]" role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            Recognitions
          </h2>
          <div className="space-y-4">
            <AchievementItem
              icon="🏆"
              iconLabel="trophy"
              title="Distinguished Alumni Award"
              date="Honored in 2025"
            />
            <AchievementItem
              icon="🎤"
              iconLabel="microphone"
              title="Guest Speaker: Tech Talk"
              date="CSE Dept - Fall 2024"
            />
            <AchievementItem
              icon="🌱"
              iconLabel="seedling"
              title="Silver Tier Donor"
              date="University Development Fund"
            />
          </div>
        </div>

        {/* QUICK LINKS / ENGAGEMENT CARD */}
        <div className="bg-gradient-to-br from-[#102A2D] to-[#0A1F22] p-8 rounded-[2rem] text-white shadow-xl shadow-[#102A2D]/20">
          <h2 className="text-xl font-bold mb-4">Share an Opportunity</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Is your tech team hiring? Post job vacancies or internship
            referrals directly to help the brilliant minds of your university.
          </p>
          <button className="px-6 py-3 bg-[#B08D48] rounded-xl font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer">
            Post a Job / Referral
          </button>
        </div>
      </div>

      {/* MENTORSHIP & NETWORK DIRECTORY */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Mentees Requesting Guidance
            </h2>
            <p className="text-sm text-gray-400">
              Current final year students aiming for your industry field.
            </p>
          </div>
          <button className="text-[#B08D48] font-bold text-sm hover:underline cursor-pointer">
            View All Requests
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {students.map((s) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={s.id}
              className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col justify-between"
            >
              <div>
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-[#B08D48]/20"
                />
                <h3 className="font-bold text-gray-900 text-sm truncate">
                  {s.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {s.semester} Sem | {s.id}
                </p>
                <span className="inline-block bg-[#F4F1EA] text-[#0A1F22] text-[10px] font-bold px-2 py-1 rounded-md mb-4">
                  Track: {s.interest}
                </span>
              </div>
              <button className="w-full py-2 text-xs bg-[#0A1F22] text-white font-bold rounded-lg hover:bg-[#B08D48] transition-all cursor-pointer">
                Approve Request
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

// --- HELPER COMPONENTS ---

const StatCard = ({ title, value, icon, iconLabel }) => (
  <div className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm flex items-center gap-4">
    <div
      className="text-3xl bg-[#F4F1EA] h-12 w-12 flex items-center justify-center rounded-xl"
      role="img"
      aria-label={iconLabel}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        {title}
      </p>
      <p className="text-lg font-black text-gray-900 truncate max-w-[145px]">
        {value}
      </p>
    </div>
  </div>
);

const AchievementItem = ({ icon, iconLabel, title, date }) => (
  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
    <div className="text-2xl" role="img" aria-label={iconLabel}>
      {icon}
    </div>
    <div>
      <p className="font-bold text-gray-900 text-sm">{title}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  </div>
);

export default Dashboard;