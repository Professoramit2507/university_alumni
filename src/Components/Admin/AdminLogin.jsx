import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsAuthenticating(true);

    // Hardcoded static administrative parameters
    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin";

    // Artificially introducing a low-latency process delay to emphasize security hashing visual effects
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("isAdminAuthenticated", "true");
        sessionStorage.setItem("adminEmail", email);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid Administrative Credentials. Access Denied.");
        setIsAuthenticating(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex items-center justify-center p-0 sm:p-6 lg:p-12 selection:bg-[#B08D48]/30">
      
      {/* Main Structural Wrapper Layout Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white w-full max-w-5xl min-h-[640px] rounded-none sm:rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
      >
        
        {/* LEFT COLUMN: INTERACTIVE AUTHENTICATION FRAME (5 Columns) */}
        <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center relative">
          
          {/* Header Icon & Branding Context */}
          <div className="text-center lg:text-left mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-14 w-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 border border-red-100 shadow-inner"
            >
              <ShieldAlert size={28} />
            </motion.div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Admin Gatekeeper</h1>
            <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-wider">Authorized Systems Personnel Only</p>
          </div>

          {/* Error Alert Display with AnimatePresence Height Adjustments */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                className="mb-5 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl text-center shadow-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Secure Interactive Entry Form */}
          <form onSubmit={handleAdminLogin} className="space-y-5">
            {/* Email Input Field */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Secure Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-gray-400 transition-colors group-focus-within:text-[#B08D48]" size={18} />
                <input
                  type="email"
                  required
                  disabled={isAuthenticating}
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#F4F1EA]/50 text-sm font-semibold text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {/* Password Input Field */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Master Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  disabled={isAuthenticating}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-[#F4F1EA]/50 text-sm font-semibold text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  tabIndex="-1"
                  disabled={isAuthenticating}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 cursor-pointer disabled:opacity-30"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Control Action Button */}
            <motion.button
              whileHover={{ scale: isAuthenticating ? 1 : 1.01 }}
              whileTap={{ scale: isAuthenticating ? 1 : 0.99 }}
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-4 bg-[#0A1F22] hover:bg-[#B08D48] text-white font-black text-sm rounded-xl transition-colors cursor-pointer shadow-lg shadow-[#0A1F22]/10 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isAuthenticating ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Verifying Security Clearance...
                </>
              ) : (
                "Enter Admin Dashboard"
              )}
            </motion.button>
          </form>
        </div>

        {/* RIGHT COLUMN: LUXURY GRAPHICAL ARTWORK BANNER (7 Columns) */}
        <div className="hidden lg:col-span-7 bg-[#0A1F22] relative flex-col justify-between p-16 overflow-hidden lg:flex">
          
          {/* Architectural Ambient Blur Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B08D48]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Floating Subtle Geometric Matrix Layout Background */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none scale-125">
            <div className="w-[400px] h-[400px] border border-white/40 rounded-full absolute rotate-45" />
            <div className="w-[300px] h-[300px] border-2 border-dashed border-[#B08D48] rounded-full absolute -rotate-12" />
            <div className="w-[500px] h-[500px] border border-white/20 rounded-[4rem] absolute rotate-12" />
          </div>

          {/* Top Brand Logo Accent */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="h-9 w-9 bg-[#B08D48] rounded-xl flex items-center justify-center shadow-lg shadow-[#B08D48]/20">
              <div className="h-4 w-4 border-2 border-white rotate-45"></div>
            </div>
            <span className="text-sm font-black text-white tracking-wider uppercase">
              Netrokona University
            </span>
          </div>

          {/* Center Copywriting Block with Staggered Motion Entry animations */}
          <div className="relative z-10 my-auto max-w-md space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-black text-white tracking-tight leading-none"
            >
              Centralized Management <br />
              <span className="text-[#B08D48]">& Governance.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400 text-sm leading-relaxed font-medium"
            >
              Access full database audit trails, orchestrate active capital funding initiatives, verify academic registration registries, and control localized network permissions.
            </motion.p>
          </div>

          {/* Bottom Security Compliance Notice */}
          <div className="relative z-10 border-t border-white/5 pt-6 flex justify-between text-[11px] font-bold text-gray-500 tracking-wide uppercase">
            <span>Security Layer: TLS 1.3</span>
            <span>Netrokona Uni © 2026</span>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default AdminLogin;