import { Users, Briefcase, Building2 } from "lucide-react";
//import heroImg from "../../../public/Gemini_Generated_Image_sl4jhlsl4jhlsl4j-removebg-preview (1).png";      // right side image
import bgImg from "../../../public/uni.avif";          // background image

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <div className="inline-block border border-sky-400 text-sky-400 px-4 py-1 rounded-full text-sm mb-6">
            🎓 WELCOME TO ALUMNI PORTAL
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stay <span className="text-sky-400">Connected.</span><br />
            Inspire Others.<br />
            Grow <span className="text-sky-400">Together.</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-lg">
            Join our alumni community to network, share experiences, discover
            opportunities, and make a difference together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-sky-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-sky-300 transition">
              👥 Join Now
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:border-sky-400 hover:text-sky-400 transition">
              📅 Explore Events
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Users className="text-sky-400" />
              <div>
                <h3 className="text-xl font-bold">5K+</h3>
                <p className="text-sm text-gray-400">Alumni Members</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="text-sky-400" />
              <div>
                <h3 className="text-xl font-bold">50+</h3>
                <p className="text-sm text-gray-400">Departments</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="text-sky-400" />
              <div>
                <h3 className="text-xl font-bold">100+</h3>
                <p className="text-sm text-gray-400">Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
  {/* <img
    src={heroImg}
    alt="graduates"
    className="w-[120%] md:w-[130%] lg:w-[140%] max-w-none rounded-xl shadow-2xl"
  /> */}

  {/* Glow Effect */}
  <div className="absolute -inset-6 bg-sky-500/20 blur-3xl rounded-xl -z-10"></div>
</div>

      </div>
    </section>
  );
}