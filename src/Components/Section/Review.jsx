import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "Software Engineer, Google",
      image: "https://i.pravatar.cc/100?img=5",
      review:
        "This alumni platform helped me connect with amazing seniors and opened doors to great opportunities.",
    },
    {
      name: "Sadia Khan",
      role: "UI/UX Designer, Microsoft",
      image: "https://i.pravatar.cc/100?img=6",
      review:
        "The mentorship system is incredible. I got valuable career guidance from experienced alumni.",
    },
    {
      name: "Tanvir Hasan",
      role: "Data Scientist, Amazon",
      image: "https://i.pravatar.cc/100?img=7",
      review:
        "I found my first internship through this portal. Highly recommended for every student!",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Alumni Say
        </h2>
        <p className="text-gray-400 mb-12">
          Hear from our successful graduates and their experiences
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-900 p-6 rounded-2xl border border-gray-800 hover:border-sky-400 transition relative"
            >
              
              {/* Stars */}
              <div className="flex mb-4 text-sky-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 text-sm mb-6">
                "{t.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-700"
                />

                <div className="text-left">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-sky-500/5 opacity-0 hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}