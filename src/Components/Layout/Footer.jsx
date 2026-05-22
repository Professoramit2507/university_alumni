

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">🎓 Alumni Portal</h2>
          <p className="text-sm">
            Connecting students and alumni, sharing opportunities, and building a strong community.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-sky-400">🏠 Home</a></li>
            <li><a href="#" className="hover:text-sky-400">🎓 Alumni Directory</a></li>
            <li><a href="#" className="hover:text-sky-400">📢 Events</a></li>
            <li><a href="#" className="hover:text-sky-400">ℹ️ About</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-2">📧 email@example.com</p>
          <p className="text-sm mb-4">📍 Mymensingh, Bangladesh</p>

          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-sky-400">🌐</a>
            <a href="#" className="hover:text-sky-400">📘</a>
            <a href="#" className="hover:text-sky-400">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Alumni Portal. All rights reserved.
      </div>

    </footer>

    );
};

export default Footer;