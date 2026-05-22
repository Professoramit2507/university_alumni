import  { useState } from "react";
import { Search, MapPin, Briefcase, Calendar, DollarSign, PlusCircle, ArrowUpRight } from "lucide-react";

// ডেমো জব ডেটা লিস্টিং (অ্যালুমনাইদের পোস্ট করা জব)
const initialJobs = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "Brain Station 23",
    location: "Dhaka, BD (Hybrid)",
    type: "Full-time",
    salary: "৳80,000 - ৳1,20,000",
    postedBy: "Sabbir Rahman (Batch '16)",
    deadline: "15 June, 2026",
    link: "#"
  },
  {
    id: 2,
    title: "SQA Engineer (Remote)",
    company: "DevsTeam LLC",
    location: "Remote, USA",
    type: "Contractual",
    salary: "$1,500 - $2,200",
    postedBy: "Anika Tasnim (Batch '18)",
    deadline: "05 June, 2026",
    link: "#"
  },
  {
    id: 3,
    title: "Frontend React Developer",
    company: "Selise Digital",
    location: "Dhaka, BD (On-site)",
    type: "Full-time",
    salary: "৳45,000 - ৳60,000",
    postedBy: "Tanvir Ahmed (Batch '17)",
    deadline: "20 June, 2026",
    link: "#"
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    company: "Pathao BD",
    location: "Dhaka, BD (On-site)",
    type: "Internship",
    salary: "৳15,000",
    postedBy: "Riad Hasan (Batch '19)",
    deadline: "02 June, 2026",
    link: "#"
  }
];

const Job = () => {
  const [jobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // সার্চ এবং টাইপ ফিল্টারিং লজিক
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-8">
      {/* HEADER & POST JOB BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Job Board</h1>
          <p className="text-gray-500 text-sm">
            আমাদের বিশ্ববিদ্যালয়ের অ্যালুমনাইদের রেফারেল ও বিভিন্ন কোম্পানির এক্সক্লুসিভ জব সার্কুলার।
          </p>
        </div>
        
        {/* পোস্ট জব বাটন */}
        <button 
          onClick={() => alert("চাকরির সার্কুলার পোস্ট করার জন্য একটি ফর্ম ওপেন হবে।")}
          className="bg-[#0A1F22] hover:bg-[#B08D48] text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer self-start sm:self-auto shadow-sm"
        >
          <PlusCircle size={18} />
          Post a Job
        </button>
      </div>

      {/* SEARCH AND FILTER INPUTS */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        {/* সার্চ বার */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by job title or company name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#F4F1EA]/50 text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
          />
        </div>

        {/* টাইপ ড্রপডাউন ফিল্টার */}
        <div className="md:w-48 bg-[#F4F1EA]/50 rounded-xl px-3 border border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-[#B08D48]/50 transition-all flex items-center">
          <Briefcase className="text-gray-400 mr-2" size={16} />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full py-3 bg-transparent text-sm font-bold text-gray-700 outline-none cursor-pointer"
          >
            <option value="All">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Contractual">Contractual</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      {/* JOBS LISTING GRID */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* টপ সেকশন: জব টাইটেল এবং টাইপ ব্যাজ */}
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#B08D48] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">{job.company}</p>
                  </div>
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase shrink-0 tracking-wider ${
                    job.type === "Full-time" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                    job.type === "Internship" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                    "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}>
                    {job.type}
                  </span>
                </div>

                {/* মেটা ইনফো গ্রিড (লোকেশন, স্যালারি, ডেডলাইন) */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 my-5 text-xs font-semibold text-gray-500">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin size={14} className="text-[#B08D48]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <DollarSign size={14} className="text-emerald-600" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Calendar size={14} className="text-rose-500" />
                    <span>Deadline: <strong className="text-gray-700">{job.deadline}</strong></span>
                  </div>
                </div>
              </div>

              {/* বটম সেকশন: পোস্টারের নাম এবং অ্যাপ্লাই বাটন */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 gap-4 mt-2">
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Posted By</p>
                  <p className="text-xs font-bold text-[#0A1F22] truncate">{job.postedBy}</p>
                </div>
                
                <a
                  href={job.link}
                  className="px-4 py-2.5 bg-[#F4F1EA] text-[#0A1F22] hover:bg-[#0A1F22] hover:text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  Apply Now
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* কোনো চাকরি খুঁজে না পেলে */
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm">
          <p className="text-gray-400 font-bold text-base">
            No active job circulars found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Job;