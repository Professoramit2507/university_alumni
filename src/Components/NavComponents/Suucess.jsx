import { motion } from "framer-motion";
import { ArrowUpRight, Award, Quote, MapPin, Sparkles } from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Amit Mahmud Amil",
    batch: "CSE '17",
    role: "Senior Software Engineer",
    company: "Google LLC",
    location: "California, USA",
    quote: "Netrokona University-র ল্যাব আর শিক্ষকদের গাইডেন্স আমার ফাউন্ডেশন তৈরি করেছে। চেষ্টা আর সঠিক মেন্টরশিপ থাকলে যেকোনো জায়গা থেকেই গ্লোবাল টেক জয়েন্টে কাজ করা সম্ভব।",
    achievement: "Distinguished Alumni Award 2025",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    storyUrl: "#"
  },
  {
    id: 2,
    name: "Fahim Muntasir",
    batch: "CSE '18",
    role: "Product Manager",
    company: "Microsoft",
    location: "Redmond, USA",
    quote: "বিশ্ববিদ্যালয় জীবনে বিভিন্ন কম্পিটিশন আর ভলান্টিয়ারিং কাজের অভিজ্ঞতা আমাকে লিডারশিপ শিখিয়েছে, যা আজ মাইক্রোসফটে প্রোডাক্ট ম্যানেজ করতে সাহায্য করছে।",
    achievement: "Young Leader Innovator 2026",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    storyUrl: "#"
  },
  {
    id: 3,
    name: "Anika Rahman",
    batch: "EEE '17",
    role: "Data Scientist",
    company: "Meta Platforms",
    location: "London, UK",
    quote: "ডেটা সায়েন্সের প্রতি ভালোবাসা শুরু হয়েছিল থিসিস করার সময় থেকে। জুনিয়রদের বলবো, একাডেমিক পড়াশোনার পাশাপাশি প্রব্লেম সলভিংয়ে ফোকাস করতে।",
    achievement: "Top 30 Under 30 Tech Talent",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    storyUrl: "#"
  },
  {
    id: 4,
    name: "Sajid Al Hasan",
    batch: "CSE '16",
    role: "Cloud Architect",
    company: "Amazon Web Services",
    location: "Seattle, USA",
    quote: "প্রজেক্ট বেইজড লার্নিং খুবই গুরুত্বপূর্ণ। আমরা ক্যাম্পাসে যেসকল ক্লাউড ও সিস্টেম ডিজাইন নিয়ে এক্সপেরিমেন্ট করতাম, তা আজ গ্লোবাল স্কেলে ইমপ্লিমেন্ট করছি।",
    achievement: "AWS Cloud Champion 2025",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    storyUrl: "#"
  },
  {
    id: 5,
    name: "Nabila Zaman",
    batch: "BBA '19",
    role: "Brand Specialist",
    company: "Netflix",
    location: "Amsterdam, Netherlands",
    quote: "মার্কেটিংয়ের থিওরির বাইরে গিয়ে রিয়েল-লাইফ কেস স্টাডি সলভ করার যে কালচার আমাদের ইউনিভার্সিটিতে ছিল, তা আন্তর্জাতিক কর্পোরেট স্ট্র্যাটেজি তৈরিতে দারুণ কাজে দিচ্ছে।",
    achievement: "Global Marketing Star 2026",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    storyUrl: "#"
  },
  {
    id: 6,
    name: "Zeeshan Ahmed",
    batch: "CSE '15",
    role: "Staff Engineer",
    company: "Uber Technologies",
    location: "San Francisco, USA",
    quote: "সবসময় লার্জ স্কেল প্রবলেম সলভ করার মানসিকতা রাখতে হবে। কম্পিটিটিভ প্রোগ্রামিং আমার ক্যারিয়ারের টার্নিং পয়েন্ট ছিল, যা আজ গ্লোবাল স্কেলে ইমপ্যাক্ট ফেলছে।",
    achievement: "Outstanding Engineering Impact Award",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    storyUrl: "#"
  }
];

export default function Success() {
  return (
    <section className="relative min-h-screen bg-zinc-950 text-white py-24 px-6 overflow-hidden font-sans">
      
      {/* 🌌 Background Premium Soft Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 border border-sky-400/20 bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase backdrop-blur-md animate-pulse">
            <Award size={14} /> Inspiring Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2 leading-tight">
            Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Success Stories</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            বিশ্বমঞ্চে আমাদের প্রাক্তন শিক্ষার্থীদের গৌরবময় পদচারণা। তাদের কঠোর পরিশ্রম এবং অনুপ্রেরণামূলক গল্প যা বদলে দেবে আগামী প্রজন্মকে।
          </p>
        </div>

        {/* ===== STORIES GRID WITH STYLISH ANIMATION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {successStories.map((story) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              key={story.id}
              className="relative overflow-hidden rounded-[2rem] border border-zinc-800/60 
                bg-gradient-to-br from-zinc-900/40 to-zinc-950/90
                p-6 backdrop-blur-xl transition-all duration-300
                shadow-2xl shadow-black/60 flex flex-col justify-between group cursor-pointer hover:border-sky-500/30"
            >
              {/* Corner Cyber-Glow Effect */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-400/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Minimalist Techy Quote Icon */}
                <div className="text-zinc-800 absolute right-6 top-6 group-hover:text-sky-500/10 transition-colors duration-300 pointer-events-none">
                  <Quote size={54} fill="currentColor" className="opacity-40" />
                </div>

                {/* Profile Identity Row */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Real Photo Avatar Frame */}
                  <div className="relative w-16 h-16 rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shrink-0 group-hover:border-sky-400/50 transition-all duration-300 shadow-md">
                    <img
                      src={story.img}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="font-bold text-white tracking-tight text-lg group-hover:text-sky-400 transition-colors duration-300 truncate">
                      {story.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-500/90 tracking-wide mt-0.5 truncate">
                      {story.batch} • {story.role}
                    </p>
                    <p className="text-[11px] text-zinc-500 font-semibold flex items-center gap-1 mt-1 truncate">
                      <MapPin size={10} className="text-zinc-600 shrink-0" />
                      {story.company} ({story.location})
                    </p>
                  </div>
                </div>

                {/* Main Dynamic Quote Text */}
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6 pl-3 border-l border-zinc-800 group-hover:border-sky-500/40 transition-colors duration-300">
                  "{story.quote}"
                </p>
              </div>

              {/* Achievement Badge & Action Call */}
              <div className="space-y-4 pt-5 border-t border-zinc-900/80 mt-auto">
                <div className="flex items-center gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-900 shadow-inner">
                  <Sparkles size={14} className="text-sky-400 shrink-0" />
                  <span className="text-[11px] font-bold text-zinc-400 tracking-wide truncate">
                    {story.achievement}
                  </span>
                </div>

                <a
                  href={story.storyUrl}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-sky-400 hover:text-zinc-950 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 border border-zinc-800 hover:border-transparent shadow-sm active:scale-98 group/btn"
                >
                  Read Full Journey
                  <ArrowUpRight size={14} className="opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}