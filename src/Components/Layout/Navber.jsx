import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2">
          <Link to={"/"}>
            🎓 Alumni Portal
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to={"/"} className="hover:text-sky-400 transition">
            🏠 Home
          </Link>
          <Link to={"/alumni-directory"} className="hover:text-sky-400 transition">
            🎓 Alumni Directory
          </Link>
          {/* নতুন যুক্ত করা মেনু */}
          <Link to={"/success-stories"} className="hover:text-sky-400 transition">
            🚀 Success Stories
          </Link>
          <Link to={"/events"} className="hover:text-sky-400 transition">
            📢 Events / Notice
          </Link>
          <Link to={"/about"} className="hover:text-sky-400 transition">
            ℹ️ About
          </Link>
        </div>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to={"/login"}
            className="border border-sky-400 px-3 py-1 rounded-md hover:bg-sky-400 hover:text-black transition"
          >
            🔐 Login
          </Link>
          <Link to={"/register"} className="bg-sky-400 text-black px-3 py-1 rounded-md hover:bg-sky-300 transition">
            📝 Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-3">
          <Link to={"/"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
            🏠 Home
          </Link>
          <Link to={"/alumni-directory"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
            🎓 Alumni Directory
          </Link>
          {/* মোবাইলের জন্য নতুন মেনু */}
          <Link to={"/success-stories"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
            🚀 Success Stories
          </Link>
          <Link to={"/events"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
            📢 Events / Notice
          </Link>
          <Link to={"/about"} className="block hover:text-sky-400" onClick={() => setIsOpen(false)}>
            ℹ️ About
          </Link>

          <hr className="border-gray-600" />

          <Link
            to={"/login"}
            className="block border border-sky-400 px-3 py-1 rounded-md text-center"
            onClick={() => setIsOpen(false)}
          >
            🔐 Login
          </Link>
          <Link
            to={"/register"}
            className="block bg-sky-400 text-black px-3 py-1 rounded-md text-center"
            onClick={() => setIsOpen(false)}
          >
            📝 Register
          </Link>
        </div>
      )}
    </nav>
  );
}