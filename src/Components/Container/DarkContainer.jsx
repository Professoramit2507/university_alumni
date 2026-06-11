import { motion } from "framer-motion";

export default function DarkContainer({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-4xl border border-zinc-800/50 
        bg-linear-to-br from-zinc-900/90 via-zinc-950/95 to-black
        p-6 md:p-8 backdrop-blur-xl transition-all duration-300
        shadow-[0_20px_50px_rgba(0,0,0,0.4)]
        hover:border-sky-500/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.05)] 
        group ${className}`}
    >
      {/* 🌌 ব্যাকগ্রাউন্ডের ভেতরের নিয়ন গ্লো (Ambient Corner Light) */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/15 transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all duration-500 pointer-events-none" />

      {/* কন্টেইনারের ভেতরের মেইন কন্টেন্ট */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}