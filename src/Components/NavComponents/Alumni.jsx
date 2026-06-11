import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFilter,  FiLinkedin } from "react-icons/fi";
import { FaBuilding, FaGraduationCap } from "react-icons/fa6";

// 🆕 প্রতিটি অবজেক্টে 'img' ফিল্ড যুক্ত করা হয়েছে
const alumniData = [
  { 
    name: "Rahim Ahmed", 
    dept: "CSE", 
    batch: "2018", 
    company: "Google", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Sadia Khan", 
    dept: "CSE", 
    batch: "2019", 
    company: "Microsoft", 
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Tanvir Hasan", 
    dept: "EEE", 
    batch: "2017", 
    company: "Amazon", 
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Nusrat Jahan", 
    dept: "BBA", 
    batch: "2020", 
    company: "Unilever", 
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Mahin Chowdhury", 
    dept: "CSE", 
    batch: "2016", 
    company: "Meta", 
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Farhan Islam", 
    dept: "EEE", 
    batch: "2018", 
    company: "Tesla", 
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Jannat Akter", 
    dept: "BBA", 
    batch: "2019", 
    company: "Daraz", 
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Sabbir Hossain", 
    dept: "CSE", 
    batch: "2015", 
    company: "IBM", 
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" 
  },
  { 
    name: "Mim Rahman", 
    dept: "CSE", 
    batch: "2021", 
    company: "Samsung", 
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop" 
  },
];

export default function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");

  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          alumni.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All Departments" || alumni.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <section className="relative min-h-screen bg-zinc-950 text-white py-24 px-6 overflow-hidden font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full">
            👥 Network Directory
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2">
            Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Directory</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Browse, search, and instantly connect with verified alumni across worldwide different batches and corporate sectors.
          </p>
        </div>

        {/* ===== CONTROLS ===== */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-sky-400 transition-colors duration-200" size={16} />
            <input
              type="text"
              placeholder="Search by name, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500/40 focus:bg-zinc-900/80 transition-all duration-300"
            />
          </div>

          <div className="relative min-w-[180px] group">
            <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={14} />
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-sm text-zinc-300 appearance-none focus:outline-none focus:border-sky-500/40 focus:bg-zinc-900/80 transition-all duration-300 cursor-pointer"
            >
              <option value="All Departments">All Departments</option>
              <option value="CSE">CSE Department</option>
              <option value="EEE">EEE Department</option>
              <option value="BBA">BBA Department</option>
            </select>
          </div>
        </div>

        {/* ===== GRID ===== */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAlumni.map((alumni) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={alumni.name}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-950/90 p-6 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    {/* 📸 🆕 অ্যাভাটার গোলক থেকে সরিয়ে এখানে সরাসরি <img /> ট্যাগ বসানো হয়েছে */}
                    <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0 shadow-inner group-hover:border-sky-500/50 transition-all duration-300">
                      <img 
                        src={alumni.img} 
                        alt={alumni.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="text-left flex-1">
                      <h3 className="font-bold text-white tracking-tight text-lg group-hover:text-sky-400 transition-colors duration-300 truncate">
                        {alumni.name}
                      </h3>
                      <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 truncate mt-0.5">
                        <FaGraduationCap size={13} className="text-zinc-500" /> Batch {alumni.batch} • {alumni.dept}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-sky-400 text-sm font-semibold flex items-center gap-2 truncate">
                      <FaBuilding size={12} /> {alumni.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 pt-5 mt-auto border-t border-zinc-900">
                  <a href="#" className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-sky-400 hover:text-zinc-950 transition-all text-zinc-400 shadow-sm flex items-center justify-center">
                    <FiLinkedin size={13} />
                  </a>
                  <button className="flex-1 bg-zinc-900 border border-zinc-800/80 text-zinc-200 hover:bg-sky-400 hover:text-zinc-950 hover:border-transparent py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm active:scale-98 flex items-center justify-center gap-1.5">
                    View Full Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAlumni.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 border border-dashed border-zinc-800 rounded-[2rem] bg-zinc-900/10 max-w-lg mx-auto">
            <p className="text-zinc-500 font-medium text-sm">No alumni found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}