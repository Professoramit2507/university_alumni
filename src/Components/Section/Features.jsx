import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Briefcase, 
  Calendar, 
  MessageSquare, 
  Award 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Alumni Directory",
      desc: "Find and connect with alumni easily by batch, department, or company."
    },
    {
      icon: <Search size={24} />,
      title: "Advanced Search",
      desc: "Filter alumni based on skills, location, and experience."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Job & Internship",
      desc: "Explore opportunities shared by alumni and apply quickly."
    },
    {
      icon: <Calendar size={24} />,
      title: "Events",
      desc: "Join meetups, webinars, and professional workshops."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Mentorship",
      desc: "Get guidance from experienced alumni in your field."
    },
    {
      icon: <Award size={24} />,
      title: "Achievements",
      desc: "Discover inspiring success stories from alumni."
    }
  ];

  // ফ্রেমার মোশন কন্টেইনার ভেরিয়েন্ট (স্ক্রোল করলে সিরিয়ালি কার্ড আসার জন্য)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // একটির পর আরেকটি কার্ড আসবে
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-zinc-950 text-white py-24 overflow-hidden font-sans border-b border-zinc-900">
      
      {/* 🌌 ব্যাকগ্রাউন্ডের হালকা সাইয়ান/পার্পল নিয়ন গ্লো */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADING AREA ===== */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full backdrop-blur-xs">
            ⚡ Platform Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Features</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            Explore what makes our alumni network a powerful ecosystems for professionals.
          </p>
        </div>

        {/* ===== FEATURES STAGGERED GRID ===== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-[2rem] border border-zinc-800/60 
                bg-gradient-to-br from-zinc-900/40 to-zinc-950/80
                p-6 md:p-8 backdrop-blur-xl transition-all duration-300
                shadow-xl shadow-black/30 group cursor-pointer
                hover:border-sky-500/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.03)]"
            >
              {/* 🎇 ইন্টারনাল স্পটলাইট গ্লো (হোভার করলে দৃশ্যমান হবে) */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-sky-400/20 to-purple-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container (আইকনের সাইজ মডার্ন করার জন্য ২৪ পিবি করা হয়েছে) */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-blue-500 group-hover:text-zinc-950 group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shadow-md">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed font-normal group-hover:text-zinc-300 transition-colors duration-300">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}