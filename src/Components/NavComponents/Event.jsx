import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

export default function Events() {
  // 🆕 ৩টি নতুন হাই-ইম্প্যাক্ট ইভেন্টসহ মোট ৬টি ডাটা অবজেক্ট
  const events = [
    {
      title: "Alumni Meetup 2026",
      date: "March 15, 2026",
      location: "Dhaka, Bangladesh",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
      tag: "Grand Reunion"
    },
    {
      title: "Career Workshop",
      date: "April 10, 2026",
      location: "Online via Zoom",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
      tag: "Mentorship"
    },
    {
      title: "Tech Talk & Networking",
      date: "May 5, 2026",
      location: "Mymensingh Campus",
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=600&auto=format&fit=crop",
      tag: "Tech Summit"
    },
    {
      title: "National Alumni Hackathon",
      date: "June 22, 2026",
      location: "University ICT Lab",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
      tag: "Hackathon"
    },
    {
      title: "Annual General Meeting (AGM)",
      date: "July 18, 2026",
      location: "Sena Malancha, Dhaka",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      tag: "Official AGM"
    },
    {
      title: "Alumni Gala & Dinner Night",
      date: "August 30, 2026",
      location: "Radisson Blu, Dhaka",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
      tag: "Celebration"
    },
  ];

  return (
    <section className="relative min-h-screen bg-zinc-950 text-white py-24 px-6 overflow-hidden font-sans">
      
      {/* 🌌 Background Premium Soft Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ===== HEADER SECTION ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 border border-sky-400/20 bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={13} /> Stay Connected
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2 leading-tight">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Events</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Stay updated and join our latest alumni events, skill sharing programs, and global networking sessions.
          </p>
        </div>

        {/* ===== EVENTS GRID WITH PREMIUM CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              key={i}
              className="relative overflow-hidden rounded-[2.5rem] border border-zinc-800/60 
                bg-gradient-to-br from-zinc-900/30 to-zinc-950/80
                p-4 backdrop-blur-xl transition-all duration-300
                shadow-2xl shadow-black/60 flex flex-col justify-between group hover:border-sky-500/30"
            >
              <div>
                {/* 📸 Image Container with Overlay Tag */}
                <div className="relative overflow-hidden rounded-[1.8rem] aspect-[16/10] mb-5">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent z-10" />
                  
                  {/* Dynamic Custom Category Tag */}
                  <span className="absolute top-4 left-4 z-20 text-[10px] font-bold tracking-wider uppercase px-3 py-1 bg-zinc-950/80 text-sky-400 border border-zinc-800 rounded-full backdrop-blur-md">
                    {event.tag}
                  </span>

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                {/* 📝 Content Area */}
                <div className="px-2 text-left space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors duration-300 line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2.5 text-zinc-400 text-xs font-semibold">
                      <CalendarDays size={14} className="text-zinc-500 shrink-0" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-zinc-400 text-xs font-semibold">
                      <MapPin size={14} className="text-zinc-500 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ⚡ Action Button */}
              <div className="pt-6 mt-6 border-t border-zinc-900/80 px-2 pb-2">
                <button className="w-full py-3 bg-zinc-900 hover:bg-sky-400 hover:text-zinc-950 rounded-2xl font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 border border-zinc-800 hover:border-transparent shadow-sm active:scale-98 group/btn cursor-pointer">
                  Register Now
                  <ArrowUpRight size={14} className="opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}