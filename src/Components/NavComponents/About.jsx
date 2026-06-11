import { motion } from "framer-motion";
import { Users, Building2, CalendarDays, HeartHandshake, ShieldCheck } from "lucide-react";
import aboutImg from "../../../public/graduation-concept-with-students-holding-blank-certificate-template.png";

export default function About() {
  const stats = [
    {
      id: 1,
      count: "5000+",
      label: "Active Alumni",
      icon: <Users size={20} className="text-sky-400" />,
    },
    {
      id: 2,
      count: "100+",
      label: "Global Companies",
      icon: <Building2 size={20} className="text-purple-400" />,
    },
    {
      id: 3,
      count: "50+",
      label: "Events Hosted",
      icon: <CalendarDays size={20} className="text-amber-400" />,
    },
    {
      id: 4,
      count: "24/7",
      label: "Expert Mentorship",
      icon: <HeartHandshake size={20} className="text-emerald-400" />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-zinc-950 text-white py-24 px-6 overflow-hidden font-sans">
      
      {/* 🌌 Background Premium Soft Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT: PREMIUM IMAGE WITH HOVER EFFECTS ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center relative group order-1 lg:order-1"
        >
          {/* Neon Backdrop Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-purple-500/10 blur-3xl rounded-[3rem] opacity-70 group-hover:opacity-100 transition duration-700 -z-10" />
          
          <div className="overflow-hidden rounded-[2.5rem] border border-zinc-800/80 bg-zinc-900/20 p-3 backdrop-blur-md shadow-2xl shadow-black/80">
            <img
              src={aboutImg}
              alt="About Alumni Platform"
              className="w-full max-w-md md:max-w-lg rounded-[2rem] object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ===== RIGHT: CONTENT & INTERACTIVE STATS ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8 order-2 lg:order-2 text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-sky-400/20 bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <ShieldCheck size={13} /> Network Pillars
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Alumni Platform</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
              Our Alumni Portal is designed to connect students and graduates, creating a powerful network for collaboration, mentorship, and career growth. We aim to bridge the gap between current students and experienced pioneers.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm font-normal leading-relaxed">
              Through this hub, you can unlock verified alumni profiles, navigate exclusive events, discover career-defining jobs, and build meaningful professional relationships that last a lifetime.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {stats.map((stat) => (
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                key={stat.id}
                className="flex items-center gap-4 bg-gradient-to-br from-zinc-900/40 to-zinc-950/80 border border-zinc-800/60 p-4 rounded-2xl backdrop-blur-xl shadow-lg shadow-black/20 group/card hover:border-zinc-700/80 transition-colors duration-300"
              >
                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl group-hover/card:bg-zinc-900 shadow-inner transition-colors duration-300 shrink-0">
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-black text-white tracking-tight">
                    {stat.count}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 group-hover/card:text-zinc-400 transition-colors duration-300 truncate">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}