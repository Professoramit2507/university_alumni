import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Mock Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Credentials
    const demoEmail = "cse@neu.ac.bd";
    const demoPass = "amit2507";

    if (email === demoEmail && password === demoPass) {
      setError("");
      // Simulate redirection to dashboard
      navigate ("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F1EA] p-4 md:p-8 font-sans overflow-hidden relative">
      {/* Background Decorative Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#B08D48]/10 rounded-full blur-[120px] z-0"
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative z-10 w-full max-w-6xl h-auto md:h-[750px] flex flex-col md:flex-row overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] bg-white/80 backdrop-blur-sm"
      >
        {/* LEFT SIDE: FORM SECTION */}
        <motion.div
          initial="initial"
          animate="animate"
          className="relative z-20 w-full md:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-20 bg-white"
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center">
                <div className="h-5 w-5 border-2 border-white rotate-45"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900">
                Netrokona University
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Welcome back
            </h1>
            <p className="text-gray-500 font-medium">
              Log in to your demo account
            </p>
          </motion.div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <motion.div variants={fadeInUp}>
              <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#B08D48] focus:ring-4 focus:ring-[#B08D48]/10 transition-all outline-none"
                placeholder="cse@neu.ac.bd "
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#B08D48] focus:ring-4 focus:ring-[#B08D48]/10 transition-all outline-none"
                placeholder="amit2507"
              />
            </motion.div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs font-bold ml-1"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-[#B08D48] to-[#8D6E35] text-white font-bold rounded-2xl shadow-xl shadow-[#B08D48]/30 mt-4"
            >
              Sign In
            </motion.button>
          </form>

          <p className="mt-8 text-center text-[10px] text-gray-400">
            Demo Hint:{" "}
            <span className="text-gray-900 font-bold">
              cse@neu.ac.bd / amit2507
            </span>
          </p>
        </motion.div>

        {/* RIGHT SIDE: IMAGE SECTION */}
        <div className="hidden md:block relative w-1/2 overflow-hidden bg-[#0A1F22]">
          <div className="absolute top-0 left-0 h-full w-32 bg-white -translate-x-16 skew-x-[-8deg] z-10"></div>
          <motion.div
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 z-0"
          >
            <img
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2070&auto=format&fit=crop"
              className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-overlay"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#102A2D] via-transparent to-black/90"></div>
          </motion.div>

          <div className="relative z-20 h-full flex flex-col justify-center p-20 text-white">
            <div className="space-y-3 mb-16">
              <h2 className="text-6xl font-extralight tracking-[0.25em] opacity-40">
                INNOVATE.
              </h2>
              <h2 className="text-6xl font-extralight tracking-[0.25em] opacity-40">
                DISCOVER.
              </h2>
              <h2 className="text-6xl font-black tracking-[0.25em] text-[#B08D48]">
                CONNECT.
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
