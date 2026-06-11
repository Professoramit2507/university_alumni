import { FaFacebookF, FaTwitter, FaGlobe, FaEnvelope, FaMapPin, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative w-full bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-900 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-zinc-950 font-black text-sm">
                🎓
              </div>
              <h2 className="text-xl font-black text-white tracking-tight">
                Alumni <span className="text-sky-400">Portal</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-normal">
              Connecting students and alumni, sharing premium industry opportunities, and building an unstoppable global tech ecosystem.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              {["Home", "Alumni Directory", "Events", "About"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-sky-400 transition-colors duration-200 flex items-center gap-1 group">
                    {link}
                    <FiArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-sky-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm font-normal">
              <li className="flex items-center gap-2.5 text-zinc-400">
                <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sky-400 flex items-center justify-center">
                  <FaEnvelope size={12} />
                </div>
                <span>email@example.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-400">
                <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sky-400 flex items-center justify-center">
                  <FaMapPin size={12} />
                </div>
                <span>Mymensingh, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Stay Updated</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Subscribe to get notified about upcoming alumni meetups and active recruitment cycles.
            </p>
            <div className="flex gap-2 w-full max-w-xs">
              <input type="email" placeholder="Your email address" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500/50 transition-colors" />
              <button className="bg-zinc-900 border border-zinc-800 text-white hover:bg-sky-400 hover:text-zinc-950 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-95 shrink-0">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div className="text-zinc-500">
            © {new Date().getFullYear()} Alumni Portal. All rights reserved.
          </div>

          <div className="flex items-center gap-2.5">
            {[
              { icon: <FaGlobe size={13} />, href: "#" },
              { icon: <FaFacebookF size={13} />, href: "#" },
              { icon: <FaTwitter size={13} />, href: "#" },
            ].map((social, index) => (
              <a key={index} href={social.href} className="p-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-sky-400 hover:text-zinc-950 transition-all text-zinc-400 shadow-sm active:scale-90 flex items-center justify-center">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}