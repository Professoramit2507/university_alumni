import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "Software Engineer, Google",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop", // প্রিমিয়াম পোর্ট্রেট ডেমো ইমেজ
      review:
        "This alumni platform helped me connect with amazing seniors and opened doors to great opportunities.",
    },
    {
      name: "Sadia Khan",
      role: "UI/UX Designer, Microsoft",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      review:
        "The mentorship system is incredible. I got valuable career guidance from experienced alumni.",
    },
    {
      name: "Tanvir Hasan",
      role: "Data Scientist, Amazon",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      review:
        "I found my first internship through this portal. Highly recommended for every student!",
    },
  ];

  // অ্যানিমেশন কনফিগারেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
      
      {/* 🌌 Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full backdrop-blur-xs">
            📣 Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Alumni Say</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            Hear from our successful graduates and their firsthand experiences with the network.
          </p>
        </div>

        {/* ===== TESTIMONIALS GRID ===== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-[2rem] border border-zinc-800/60 
                bg-gradient-to-br from-zinc-900/40 to-zinc-950/90
                p-6 md:p-8 backdrop-blur-xl transition-all duration-300
                shadow-xl shadow-black/40 flex flex-col justify-between group"
            >
              {/* 🎇 হোভার লাইট ইফেক্ট */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-sky-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* 👤 User Profile Info Block (Top-aligned for clean readability) */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-800 ring-2 ring-zinc-800/50 group-hover:ring-sky-400/30 transition-all duration-300"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-white tracking-tight text-base group-hover:text-sky-400 transition-colors duration-300">
                      {t.name}
                    </h4>
                    <p className="text-zinc-400 text-xs font-medium leading-tight">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* ⭐ Stars Ratings Indicator */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" className="stroke-none" />
                  ))}
                </div>

                {/* 💬 Review Statement */}
                <p className="text-zinc-300 text-sm leading-relaxed font-normal italic">
                  "{t.review}"
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}