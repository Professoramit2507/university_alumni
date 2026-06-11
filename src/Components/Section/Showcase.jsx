import { motion } from "framer-motion";
import {  Mail, Building2 } from "lucide-react";

export default function AlumniShowcase() {
  const alumni = [
    {
      name: "Abir Hasan",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", // প্রিমিয়াম ইমেজের জন্য আনস্প্ল্যাশ ডেমো
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur."
    },
    {
      name: "Amith Hasan Anik",
      role: "Software Engineer",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur."
    },
    {
      name: "Amit Mahmud Amil",
      role: "Data Scientist",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur."
    },
    {
      name: "Mahin Tanzim",
      role: "Frontend Developer",
      company: "Meta",
      image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=400&auto=format&fit=crop",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur."
    },
  ];

  // অ্যানিমেশন কনফিগারেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full bg-zinc-950 text-white py-24 overflow-hidden font-sans border-b border-zinc-900">
      
      {/* 🌌 Ambient Soft Light Background Glows */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full backdrop-blur-xs">
            💎 Global Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2">
            Our Proud <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Alumni</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            Meet some of our successful graduates making an impact worldwide in top tech giants.
          </p>
        </div>

        {/* ===== ALUMNI SHOWCASE GRID ===== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {alumni.map((person, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-800/60 
                bg-gradient-to-br from-zinc-900/40 to-zinc-950/90
                p-5 backdrop-blur-xl transition-all duration-300
                shadow-xl shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* 📸 Profile Image with Smooth Scale Hook */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 mb-5">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Company Floating Tag inside Image */}
                  <span className="absolute bottom-3 left-3 bg-zinc-950/80 border border-zinc-800 text-zinc-200 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                    <Building2 size={12} className="text-sky-400" />
                    {person.company}
                  </span>
                </div>

                {/* 📝 Content Info */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase">
                    {person.role}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed font-normal pt-2 line-clamp-3">
                    "{person.des}"
                  </p>
                </div>
              </div>

              {/* 🔗 Social Media Action Buttons */}
              <div className="flex gap-2.5 pt-5 mt-4 border-t border-zinc-900">
                <a 
                  href="#" 
                  className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-sky-400 hover:text-zinc-950 transition-all text-zinc-400 cursor-pointer shadow-sm active:scale-90"
                >
                  {/* <Linkedin size={14} /> */}
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-sky-400 hover:text-zinc-950 transition-all text-zinc-400 cursor-pointer shadow-sm active:scale-90"
                >
                  <Mail size={14} />
                </a>
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}