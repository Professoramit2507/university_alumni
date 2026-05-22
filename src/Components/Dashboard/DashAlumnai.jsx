import  { useState } from "react";

// ডেমো অ্যালুমনাই ডেটা লিস্টিং
const initialAlumni = [
  {
    id: 1,
    name: "Amit Mahmud Amil",
    batch: "2017",
    dept: "CSE",
    role: "Senior Software Engineer",
    company: "Google LLC",
    location: "California, USA",
    email: "amit.amil@google.com",
    linkedin: "https://linkedin.com",
    img: "https://i.pravatar.cc/150?u=amit",
  },
  {
    id: 2,
    name: "Abir Hasan",
    batch: "2018",
    dept: "CSE",
    role: "Product Manager",
    company: "Microsoft",
    location: "Redmond, USA",
    email: "fahim.m@microsoft.com",
    linkedin: "https://linkedin.com",
    img: "https://i.pravatar.cc/150?u=fahim",
  },
  {
    id: 3,
    name: "Anika Rahman",
    batch: "2017",
    dept: "EEE",
    role: "Data Scientist",
    company: "Meta",
    location: "London, UK",
    email: "anika.r@meta.com",
    linkedin: "https://linkedin.com",
    img: "https://i.pravatar.cc/150?u=anika",
  },
  {
    id: 4,
    name: "Zayan Ahmed",
    batch: "2019",
    dept: "CSE",
    role: "DevOps Engineer",
    company: "Shopify",
    location: "Remote, BD",
    email: "zayan@shopify.com",
    linkedin: "https://linkedin.com",
    img: "https://i.pravatar.cc/150?u=zayan",
  },
  {
    id: 5,
    name: "Tasnim Sultana",
    batch: "2016",
    dept: "BBA",
    role: "HR Specialist",
    company: "Unilever",
    location: "Dhaka, BD",
    email: "tasnim.s@unilever.com",
    linkedin: "https://linkedin.com",
    img: "https://i.pravatar.cc/150?u=tasnim",
  },
];

const DashAlumnai = () => {
  const [alumni] = useState(initialAlumni);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");

  // সার্চ এবং ফিল্টার লজিক
  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBatch =
      selectedBatch === "All" || person.batch === selectedBatch;

    return matchesSearch && matchesBatch;
  });

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          Alumni Directory
        </h1>
        <p className="text-gray-500 text-sm">
          Netrokona University-র প্রাক্তন শিক্ষার্থীদের সাথে যুক্ত হোন এবং
          নেটওয়ার্ক বাড়ান।
        </p>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        {/* সার্চ ইনপুট */}
        <div className="relative flex-1 w-full">
          {/* <Search className="absolute left-4 top-3.5 text-gray-400" size={18} /> */}
          <input
            type="text"
            placeholder="Search by name, company, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#F4F1EA]/50 text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
          />
        </div>

        {/* ফিল্টার ড্রপডাউন */}
        <div className="relative w-full md:w-48 flex items-center bg-[#F4F1EA]/50 rounded-xl px-3 border border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-[#B08D48]/50 transition-all">
          {/* <Filter className="text-gray-400 mr-2" size={16} /> */}
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full py-3 bg-transparent text-sm font-bold text-gray-700 outline-none cursor-pointer"
          >
            <option value="All">All Batches</option>
            <option value="2016">CSE 2019-20</option>
            <option value="2017">CSE 2020-21</option>
            <option value="2018">CSE 2021-22</option>
            <option value="2019">CSE 2022-23</option>
          </select>
        </div>
      </div>

      {/* ALUMNI CARDS GRID */}
      {filteredAlumni.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* টপ ব্যাচ ট্যাগ */}
              <div className="absolute top-0 right-0 bg-[#0A1F22] text-white px-4 py-1.5 rounded-bl-2xl text-xs font-bold flex items-center gap-1.5">
                {/* <GraduationCap size={14} className="text-[#B08D48]" /> */}
                {person.dept} '{person.batch.slice(-2)}
              </div>

              <div>
                {/* প্রোফাইল ইমেজ ও বেসিক ইনফো */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#F4F1EA] shadow-sm"
                  />
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-gray-900 text-base truncate">
                      {person.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium flex items-center gap-1 mt-0.5">
                      {/* <MapPin size={12} /> {person.location} */}
                    </p>
                  </div>
                </div>

                {/* জব এবং কোম্পানি ইনফো */}
                <div className="bg-[#F4F1EA]/50 p-3.5 rounded-xl space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A1F22]">
                    {/* <Briefcase size={14} className="text-[#B08D48]" /> */}
                    <span className="truncate">{person.role}</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium pl-5">
                    {person.company}
                  </div>
                </div>
              </div>

              {/* অ্যাকশন বাটন ও সোশ্যাল লিংক */}
              <div className="flex items-center gap-2 mt-2 pt-3 border-t border-gray-50">
                <a
                  href={`mailto:${person.email}`}
                  className="flex-1 py-2.5 bg-gray-900 text-white hover:bg-[#B08D48] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {/* <Mail size={14} /> */}
                  Contact
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#F4F1EA] text-[#0A1F22] hover:bg-[#0A1F22] hover:text-white rounded-xl transition-all cursor-pointer"
                  title="LinkedIn Profile"
                >
                  {/* <Linkedin size={16} /> */}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* কোনো ডাটা খুঁজে না পাওয়া গেলে */
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm">
          <p className="text-gray-400 font-bold text-base">
            No alumni found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashAlumnai;
