import aboutImg from "../../../public/graduation-concept-with-students-holding-blank-certificate-template.png"; // your image

export default function About() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE */}
        <div className="order-1 md:order-1 flex justify-center relative">
          <img
            src={aboutImg}
            alt="About Alumni"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-2xl"
          />

          {/* Glow Effect */}
          <div className="absolute -inset-6 bg-sky-500/20 blur-3xl rounded-xl -z-10"></div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="order-2 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Our Alumni Platform
          </h2>

          <p className="text-gray-300 mb-6">
            Our Alumni Portal is designed to connect students and graduates,
            creating a powerful network for collaboration, mentorship, and
            career growth. We aim to bridge the gap between current students
            and experienced alumni.
          </p>

          <p className="text-gray-400 mb-8">
            Through this platform, you can explore alumni profiles, join events,
            discover job opportunities, and build meaningful professional
            relationships that last a lifetime.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="bg-slate-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-sky-400">5000+</h3>
              <p className="text-sm text-gray-400">Active Alumni</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-sky-400">100+</h3>
              <p className="text-sm text-gray-400">Companies</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-sky-400">50+</h3>
              <p className="text-sm text-gray-400">Events Hosted</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-sky-400">24/7</h3>
              <p className="text-sm text-gray-400">Community Support</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}