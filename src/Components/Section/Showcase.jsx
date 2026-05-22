// import { Linkedin, Mail } from "lucide-react";

export default function AlumniShowcase() {
  const alumni = [
    {
      name: "Abir Hasan",
      role: "Software Engineer",
      company: "Google",
      image: "https://i.pravatar.cc/300?img=1",
       des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur eum quod dolore mollitia repudiandae explicabo!"
    },
    {
      name: "Amith Hasan Anik",
      role: "Software Engineer",
      company: "Microsoft",
      image: "https://i.pravatar.cc/300?img=2",
      des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur eum quod dolore mollitia repudiandae explicabo!"
    },
    {
      name: "Amit Mahmud Amil",
      role: "Data Scientist",
      company: "Amazon",
      image: "https://i.pravatar.cc/300?img=3",
       des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur eum quod dolore mollitia repudiandae explicabo!"
    },
    {
      name: "Mahin Tanzim ",
      role: "Frontend Developer",
      company: "Meta",
      image: "https://i.pravatar.cc/300?img=4",
       des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum autem voluptatum iure consequatur eum quod dolore mollitia repudiandae explicabo!"
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Proud Alumni
        </h2>
        <p className="text-gray-400 mb-12">
          Meet some of our successful graduates making an impact worldwide
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-sky-500/20 transition"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sky-400 text-sm">{person.role}</p>
                <p className="text-gray-400 text-sm mb-4">{person.company}</p>
                <p className="text-blue-400 text-sm mb-4">{person.des}</p>

                {/* Social Icons */}
                {/* <div className="flex gap-3">
                  <button className="p-2 bg-slate-700 rounded-lg hover:bg-sky-400 hover:text-black transition">
                    <Linkedin size={16} />
                  </button>
                  <button className="p-2 bg-slate-700 rounded-lg hover:bg-sky-400 hover:text-black transition">
                    <Mail size={16} />
                  </button>
                </div> */}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}