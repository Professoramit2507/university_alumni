// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold flex items-center gap-2">
//           <Link to={"/"}>
//             🎓 Alumni Portal
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link to={"/"} className="hover:text-sky-400 transition">
//             🏠 Home
//           </Link>
//           <Link to={"/alumni-directory"} className="hover:text-sky-400 transition">
//             🎓 Alumni Directory
//           </Link>
//           {/* নতুন যুক্ত করা মেনু */}
//           <Link to={"/success-stories"} className="hover:text-sky-400 transition">
//             🚀 Success Stories
//           </Link>
//           <Link to={"/events"} className="hover:text-sky-400 transition">
//             📢 Events / Notice
//           </Link>
//           <Link to={"/about"} className="hover:text-sky-400 transition">
//             ℹ️ About
//           </Link>
//         </div>

//         {/* Auth Buttons Desktop */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link
//             to={"/login"}
//             className="border border-sky-400 px-3 py-1 rounded-md hover:bg-sky-400 hover:text-black transition"
//           >
//             🔐 Login
//           </Link>
//           <Link to={"/register"} className="bg-sky-400 text-black px-3 py-1 rounded-md hover:bg-sky-300 transition">
//             📝 Register
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-3">
//           <Link to={"/"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
//             🏠 Home
//           </Link>
//           <Link to={"/alumni-directory"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
//             🎓 Alumni Directory
//           </Link>
//           {/* মোবাইলের জন্য নতুন মেনু */}
//           <Link to={"/success-stories"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
//             🚀 Success Stories
//           </Link>
//           <Link to={"/events"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
//             📢 Events / Notice
//           </Link>
//           <Link to={"/about"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
//             ℹ️ About
//           </Link>

//           <hr className="border-gray-600" />

//           <Link
//             to={"/login"}
//             className="block border border-sky-400 px-3 py-1 rounded-md text-center"
//             onClick={() => setIsOpen(false)}
//           >
//             🔐 Login
//           </Link>
//           <Link
//             to={"/register"}
//             className="block bg-sky-400 text-black px-3 py-1 rounded-md text-center"
//             onClick={() => setIsOpen(false)}
//           >
//             📝 Register
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }



import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Home, Users, Rocket, Bell, Info, LogIn, UserPlus } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রল করলে শ্যাডো এবং ব্লার এফেক্ট পরিবর্তনের জন্য
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" />, end: true },
    { to: "/alumni-directory", label: "Alumni Directory", icon: <Users className="w-4 h-4" /> },
    { to: "/success-stories", label: "Success Stories", icon: <Rocket className="w-4 h-4" /> },
    { to: "/events", label: "Events / Notice", icon: <Bell className="w-4 h-4" /> },
    { to: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 border-b ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-xl border-zinc-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
          : "py-5 bg-white/60 backdrop-blur-md border-zinc-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* ===== LOGO AREA ===== */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative p-2 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-xl text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-lg font-black tracking-tight text-zinc-800 uppercase font-sans">
              Alumni<span className="text-sky-500">Portal</span>
            </span>
          </Link>
        </div>

        {/* ===== DESKTOP NAVIGATION ===== */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded-xl transition-all duration-300 group ${
                  isActive ? "text-sky-600" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {/* Sliding Underline Animation */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 rounded-full ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* ===== DESKTOP AUTH BUTTONS ===== */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold cursor-pointer uppercase tracking-widest text-zinc-700 rounded-full group bg-gradient-to-br from-sky-400 to-blue-500 transition duration-300">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-1.5">
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </span>
            </button>
          </Link>

          <Link to="/register">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold cursor-pointer uppercase tracking-widest text-white rounded-full group bg-gradient-to-br from-sky-400 to-blue-500 transition duration-300 shadow-sm shadow-sky-500/20 hover:shadow-md hover:shadow-sky-500/30">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full group-hover:from-sky-400 group-hover:to-blue-500 flex items-center gap-1.5">
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </span>
            </button>
          </Link>
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-500 hover:text-zinc-800 focus:outline-none transition duration-300 cursor-pointer"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-200 ${isOpen ? "w-0 opacity-0" : "w-4"}`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ===== MOBILE DROPDOWN MENU ===== */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/98 border-b border-zinc-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-100 opacity-100 py-6 px-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2" onClick={() => setIsOpen(false)}>
          {navLinks.map((link) => (
            <li key={link.to} className="list-none">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-sky-50 text-sky-600 border-l-4 border-sky-500"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}

          {/* Mobile Auth Actions */}
          <div className="pt-4 mt-2 border-t border-zinc-100 flex flex-col gap-2">
            <Link to="/login" className="text-center text-sm font-bold text-zinc-700 py-3 hover:bg-zinc-50 rounded-xl transition-all flex items-center justify-center gap-2">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="text-center text-sm font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-xl shadow-md shadow-sky-500/10 flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}