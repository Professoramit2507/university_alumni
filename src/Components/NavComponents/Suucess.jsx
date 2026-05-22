
import { ArrowUpRight, Award, Quote } from "lucide-react";

// ডেমো সাকসেস স্টোরি ডেটা লিস্টিং
const successStories = [
  {
    id: 1,
    name: "Amit Mahmud Amil",
    batch: "CSE '17",
    role: "Senior Software Engineer",
    company: "Google LLC",
    location: "California, USA",
    quote: "Netrokona University-র ল্যাব আর শিক্ষকদের গাইডেন্স আমার ফাউন্ডেশন তৈরি করেছে। চেষ্টা আর সঠিক মেন্টরশিপ থাকলে যেকোনো জায়গা থেকেই গ্লোবাল টেক জয়েন্টে কাজ করা সম্ভব।",
    achievement: "Distinguished Alumni Award 2025",
    img: "https://i.pravatar.cc/150?u=amit",
    storyUrl: "#"
  },
  {
    id: 2,
    name: "Fahim Muntasir",
    batch: "CSE '18",
    role: "Product Manager",
    company: "Microsoft",
    location: "Redmond, USA",
    quote: "বিশ্ববিদ্যালয় জীবনে বিভিন্ন কম্পিটিশন আর ভলান্টিয়ারিং কাজের অভিজ্ঞতা আমাকে লিডারশিপ শিখিয়েছে, যা আজ মাইক্রোসফটে প্রোডাক্ট ম্যানেজ করতে সাহায্য করছে।",
    achievement: "Young Leader Innovator 2026",
    img: "https://i.pravatar.cc/150?u=fahim",
    storyUrl: "#"
  },
  {
    id: 3,
    name: "Anika Rahman",
    batch: "EEE '17",
    role: "Data Scientist",
    company: "Meta Platforms",
    location: "London, UK",
    quote: "ডেটা সায়েন্সের প্রতি ভালোবাসা শুরু হয়েছিল থিসিস করার সময় থেকে। জুনিয়রদের বলবো, একাডেমিক পড়াশোনার পাশাপাশি প্রব্লেম সলভিংয়ে ফোকাস করতে।",
    achievement: "Top 30 Under 30 Tech Talent",
    img: "https://i.pravatar.cc/150?u=anika",
    storyUrl: "#"
  }
];

export default function Suucess() {
  return (
    <section className="bg-[#0f172a] text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-sky-500/30 bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Award size={14} /> Inspiring Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Alumni <span className="text-sky-400">Success Stories</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            আমাদের বিশ্ববিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের বিশ্বমঞ্চে গৌরবময় পদচারণা। তাদের কঠোর পরিশ্রম, সাফল্য এবং অনুপ্রেরণামূলক গল্প যা বদলে দেবে আগামী প্রজন্মকে।
          </p>
        </div>

        {/* STORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-6 flex flex-col justify-between hover:border-sky-400/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl relative group overflow-hidden"
            >
              {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (কার্ডের ওপর মাউস নিলে হালকা লাইট জ্বলবে) */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* উক্তি/কোট আইকন */}
                <div className="text-sky-500/20 absolute right-6 top-6 group-hover:text-sky-500/30 transition-colors">
                  <Quote size={48} fill="currentColor" />
                </div>

                {/* প্রোফাইল এবং মেম্বার ইনফো */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-800 group-hover:border-sky-400/50 transition-all shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-white tracking-tight group-hover:text-sky-400 transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-xs font-bold text-[#B08D48]">
                      {story.batch} | {story.role}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {story.company} ({story.location})
                    </p>
                  </div>
                </div>

                {/* মেইন কোট/উক্তি */}
                <p className="text-gray-300 text-sm italic leading-relaxed mb-6 pl-2 border-l-2 border-sky-400/30 group-hover:border-sky-400 transition-colors">
                  "{story.quote}"
                </p>
              </div>

              {/* অ্যাচিভমেন্ট ব্যাজ ও রিড মোর বাটন */}
              <div className="space-y-4 pt-4 border-t border-slate-800/60">
                <div className="flex items-center gap-2 bg-slate-800/40 p-2.5 rounded-xl border border-slate-800">
                  <Award size={16} className="text-sky-400 shrink-0" />
                  <span className="text-xs font-semibold text-gray-400 truncate">
                    {story.achievement}
                  </span>
                </div>

                <a
                  href={story.storyUrl}
                  className="w-full py-3 bg-slate-800 hover:bg-sky-400 hover:text-black rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700/50 hover:border-transparent shadow-md"
                >
                  Read Full Journey
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}