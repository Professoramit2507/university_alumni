import { CalendarDays, MapPin } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Alumni Meetup 2026",
      date: "March 15, 2026",
      location: "Dhaka, Bangladesh",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Career Workshop",
      date: "April 10, 2026",
      location: "Online",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
      title: "Tech Talk & Networking",
      date: "May 5, 2026",
      location: "Mymensingh",
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-400 mb-12">
          Stay updated and join our latest alumni events and programs
        </p>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-sky-500/20 transition group"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-3">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <CalendarDays size={16} className="text-sky-400" />
                  {event.date}
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin size={16} className="text-sky-400" />
                  {event.location}
                </div>

                {/* Button */}
                <button className="w-full bg-sky-400 text-black py-2 rounded-lg font-medium hover:bg-sky-300 transition">
                  Register Now
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}