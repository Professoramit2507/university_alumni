import { Users, Search, Briefcase, Calendar, MessageSquare, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Users size={30} />,
      title: "Alumni Directory",
      desc: "Find and connect with alumni easily by batch, department, or company."
    },
    {
      icon: <Search size={30} />,
      title: "Advanced Search",
      desc: "Filter alumni based on skills, location, and experience."
    },
    {
      icon: <Briefcase size={30} />,
      title: "Job & Internship",
      desc: "Explore opportunities shared by alumni and apply quickly."
    },
    {
      icon: <Calendar size={30} />,
      title: "Events",
      desc: "Join meetups, webinars, and professional workshops."
    },
    {
      icon: <MessageSquare size={30} />,
      title: "Mentorship",
      desc: "Get guidance from experienced alumni in your field."
    },
    {
      icon: <Award size={30} />,
      title: "Achievements",
      desc: "Discover inspiring success stories from alumni."
    }
  ];

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Features
        </h2>
        <p className="text-gray-400 mb-12">
          Explore what makes our alumni network powerful
        </p>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-sky-400/40 to-purple-500/40 hover:scale-105 transition duration-300"
            >
              {/* Inner Card */}
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-gray-800">

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 mb-4">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {f.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}