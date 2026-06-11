// // import { Users, Briefcase, Building2 } from "lucide-react";
// // //import heroImg from "../../../public/Gemini_Generated_Image_sl4jhlsl4jhlsl4j-removebg-preview (1).png";      // right side image
// // import bgImg from "../../../public/uni.avif";          // background image

// // export default function Hero() {
// //   return (
// //     <section className="relative text-white overflow-hidden">

// //       {/* Background Image */}
// //       <div className="absolute inset-0">
// //         <img
// //           src={bgImg}
// //           alt="background"
// //           className="w-full h-full object-cover"
// //         />
// //         {/* Dark Overlay */}
// //         <div className="absolute inset-0 bg-slate-900/80"></div>
// //       </div>

// //       {/* Content */}
// //       <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

// //         {/* Left Content */}
// //         <div>
// //           <div className="inline-block border border-sky-400 text-sky-400 px-4 py-1 rounded-full text-sm mb-6">
// //             🎓 WELCOME TO ALUMNI PORTAL
// //           </div>

// //           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
// //             Stay <span className="text-sky-400">Connected.</span><br />
// //             Inspire Others.<br />
// //             Grow <span className="text-sky-400">Together.</span>
// //           </h1>

// //           <p className="text-gray-300 mb-8 max-w-lg">
// //             Join our alumni community to network, share experiences, discover
// //             opportunities, and make a difference together.
// //           </p>

// //           {/* Buttons */}
// //           <div className="flex flex-wrap gap-4 mb-10">
// //             <button className="bg-sky-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-sky-300 transition">
// //               👥 Join Now
// //             </button>

// //             <button className="border border-gray-400 px-6 py-3 rounded-lg hover:border-sky-400 hover:text-sky-400 transition">
// //               📅 Explore Events
// //             </button>
// //           </div>

// //           {/* Stats */}
// //           <div className="flex flex-wrap gap-8">
// //             <div className="flex items-center gap-3">
// //               <Users className="text-sky-400" />
// //               <div>
// //                 <h3 className="text-xl font-bold">5K+</h3>
// //                 <p className="text-sm text-gray-400">Alumni Members</p>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <Building2 className="text-sky-400" />
// //               <div>
// //                 <h3 className="text-xl font-bold">50+</h3>
// //                 <p className="text-sm text-gray-400">Departments</p>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <Briefcase className="text-sky-400" />
// //               <div>
// //                 <h3 className="text-xl font-bold">100+</h3>
// //                 <p className="text-sm text-gray-400">Opportunities</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="relative flex justify-center">
// //   {/* <img
// //     src={heroImg}
// //     alt="graduates"
// //     className="w-[120%] md:w-[130%] lg:w-[140%] max-w-none rounded-xl shadow-2xl"
// //   /> */}

// //   {/* Glow Effect */}
// //   <div className="absolute -inset-6 bg-sky-500/20 blur-3xl rounded-xl -z-10"></div>
// // </div>

// //       </div>
// //     </section>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Users,
//   Briefcase,
//   Building2,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// // import heroImg1 from "../../../public/Gemini_Generated_Image_sl4jhlsl4jhlsl4j-removebg-preview (1).png"; // স্লাইড ১ এর ইমেজ
// // import heroImg2 from "../../../public/another_image1.png"; // স্লাইড ২ এর ইমেজ
// // import heroImg3 from "../../../public/another_image2.png"; // স্লাইড ৩ এর ইমেজ
// import bgImg from "../../../public/uni.avif"; // background image

// // স্লাইডারের ডেটা (ডায়নামিক টেক্সট ও কন্টেন্ট)
// const sliderData = [
//   {
//     badge: "🎓 WELCOME TO ALUMNI PORTAL",
//     title: (
//       <>
//         Stay <span className="text-sky-400">Connected.</span>
//         <br />
//         Inspire Others.
//         <br />
//         Grow <span className="text-sky-400">Together.</span>
//       </>
//     ),
//     description:
//       "Join our alumni community to network, share experiences, discover opportunities, and make a difference together.",
//     btn1: "👥 Join Now",
//     btn2: "📅 Explore Events",
//     img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop", // ফ্যালব্যাক ইমেজ (heroImg3 দিয়ে রিপ্লেস করবেন)
//   },
//   {
//     badge: "🚀 MENTORSHIP PROGRAM",
//     title: (
//       <>
//         Guide the <span className="text-sky-400">Next Gen.</span>
//         <br />
//         Share Expertise.
//         <br />
//         Build the <span className="text-sky-400">Future.</span>
//       </>
//     ),
//     description:
//       "Empower current final year students by becoming a mentor. Share your industry knowledge and build a stronger community.",
//     btn1: "🤝 Become a Mentor",
//     btn2: "📖 Learn More",
//     img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop", // ফ্যালব্যাক ইমেজ (heroImg2 দিয়ে রিপ্লেস করবেন)
//   },
//   {
//     badge: "💼 CAREER OPPORTUNITIES",
//     title: (
//       <>
//         Discover <span className="text-sky-400">Jobs.</span>
//         <br />
//         Post Referrals.
//         <br />
//         Elevate <span className="text-sky-400">Careers.</span>
//       </>
//     ),
//     description:
//       "Is your tech team hiring? Share active job postings or internal referrals directly with talented alumni and students.",
//     btn1: "💼 Post a Job",
//     btn2: "🔍 Browse Jobs",
//     img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop", // ফ্যালব্যাক ইমেজ (heroImg3 দিয়ে রিপ্লেস করবেন)
//   },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   // অটো-প্লে স্লাইডার (প্রতি ৫ সেকেন্ড পরপর স্লাইড চেঞ্জ হবে)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
//   const prevSlide = () =>
//     setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

//   // অ্যানিমেশন ভ্যারিয়েন্টস
//   const slideVariants = {
//     initial: { opacity: 0, x: 50 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     exit: { opacity: 0, x: -50, transition: { duration: 0.4, ease: "easeIn" } },
//   };

//   return (
//     <section className="relative text-white overflow-hidden bg-slate-900 min-h-[650px] flex items-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={bgImg}
//           alt="background"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[2px]"></div>
//       </div>

//       {/* Main Content Content Container */}
//       <div className="relative max-w-7xl mx-auto px-6 py-20 w-full z-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             variants={slideVariants}
//             className="grid md:grid-cols-2 gap-12 items-center"
//           >
//             {/* Left Content */}
//             <div className="space-y-6">
//               <span className="inline-block border border-sky-400 text-sky-400 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
//                 {sliderData[current].badge}
//               </span>

//               <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight min-h-[160px] md:min-h-[230px]">
//                 {sliderData[current].title}
//               </h1>

//               <p className="text-gray-300 max-w-lg text-base md:text-lg leading-relaxed min-h-[70px]">
//                 {sliderData[current].description}
//               </p>

//               {/* Buttons */}
//               <div className="flex flex-wrap gap-4 pt-2">
//                 <button className="bg-sky-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-sky-300 transition-all cursor-pointer shadow-lg shadow-sky-400/20">
//                   {sliderData[current].btn1}
//                 </button>

//                 <button className="border border-gray-400 px-6 py-3 rounded-lg font-bold hover:border-sky-400 hover:text-sky-400 transition-all cursor-pointer">
//                   {sliderData[current].btn2}
//                 </button>
//               </div>
//             </div>

//             {/* Right Image Content */}
//             <div className="relative flex justify-center items-center">
//               <div className="relative w-[85%] md:w-[100%] max-w-md aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl">
//                 <img
//                   src={sliderData[current].img}
//                   alt="slider visual"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Glow Effect */}
//               <div className="absolute -inset-6 bg-sky-500/15 blur-3xl rounded-full -z-10 animate-pulse"></div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* STATS AREA (ফিক্সড থাকবে, স্লাইডারের সাথে চেঞ্জ হবে না) */}
//         <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
//           <StatBox
//             icon={<Users className="text-sky-400" />}
//             count="5K+"
//             label="Alumni Members"
//           />
//           <StatBox
//             icon={<Building2 className="text-sky-400" />}
//             count="50+"
//             label="Departments"
//           />
//           <StatBox
//             icon={<Briefcase className="text-sky-400" />}
//             count="100+ "
//             label="Opportunities"
//           />
//         </div>

//         {/* SLIDER CONTROLS (ম্যানুয়াল নেভিগেশন বাটন) */}
//         <div className="absolute bottom-6 right-6 flex items-center gap-2">
//           <button
//             onClick={prevSlide}
//             className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-sky-400 hover:text-black transition-all cursor-pointer text-gray-300"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {/* স্লাইড ইন্ডিকেটর ডটস */}
//           <div className="flex gap-1.5 px-2">
//             {sliderData.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-6 bg-sky-400" : "w-2 bg-white/20"}`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={nextSlide}
//             className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-sky-400 hover:text-black transition-all cursor-pointer text-gray-300"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // স্ট্যাটকার্ড হেল্পার
// const StatBox = ({ icon, count, label }) => (
//   <div className="flex items-center gap-3">
//     <div className="p-2 bg-white/5 rounded-xl border border-white/5">
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-xl font-bold tracking-tight">{count}</h3>
//       <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
//         {label}
//       </p>
//     </div>
//   </div>
// );




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// স্লাইডারের ডেটা
const sliderData = [
  {
    badge: "🎓 WELCOME TO ALUMNI PORTAL",
    title: (
      <>
        Stay <span className="text-sky-400">Connected.</span>
        <br />
        Inspire Others.
        <br />
        Grow <span className="text-sky-400">Together.</span>
      </>
    ),
    description:
      "Join our alumni community to network, share experiences, discover opportunities, and make a difference together.",
    btn1: "👥 Join Now",
    btn2: "📅 Explore Events",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    badge: "🚀 MENTORSHIP PROGRAM",
    title: (
      <>
        Guide the <span className="text-sky-400">Next Gen.</span>
        <br />
        Share Expertise.
        <br />
        Build the <span className="text-sky-400">Future.</span>
      </>
    ),
    description:
      "Empower current final year students by becoming a mentor. Share your industry knowledge and build a stronger community.",
    btn1: "🤝 Become a Mentor",
    btn2: "📖 Learn More",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  },
  {
    badge: "💼 CAREER OPPORTUNITIES",
    title: (
      <>
        Discover <span className="text-sky-400">Jobs.</span>
        <br />
        Post Referrals.
        <br />
        Elevate <span className="text-sky-400">Careers.</span>
      </>
    ),
    description:
      "Is your tech team hiring? Share active job postings or internal referrals directly with talented alumni and students.",
    btn1: "💼 Post a Job",
    btn2: "🔍 Browse Jobs",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // অটো-প্লে স্লাইডার (প্রতি ৫ সেকেন্ড পরপর স্লাইড চেঞ্জ হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

  // ইমেজ এবং টেক্সট ট্রানজিশন অ্যানিমেশন এফেক্ট
  const slideVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.01, transition: { duration: 0.35, ease: "easeIn" } },
  };

  return (
    <section className="relative w-full bg-zinc-950 py-12 flex flex-col items-center overflow-hidden font-sans border-b border-zinc-900">
      
      {/* 🌌 Ambient Soft Light Glows (ডার্ক থিমে গ্লো দেখতে অসাধারণ লাগবে) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl w-full mx-auto px-6 flex flex-col gap-12">
        
        {/* ===== CAROUSEL CONTAINER (Dark Container Removed) ===== */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border border-zinc-800/80 bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideVariants}
              className="absolute inset-0 w-full h-full"
            >
              {/* Core Slide Image */}
              <img
                src={sliderData[current].img}
                alt="Alumni Visual"
                className="w-full h-full object-cover opacity-35"
              />

              {/* 🖤 Gradient Overlay for Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent md:bg-gradient-to-r md:from-zinc-950 md:via-zinc-950/30 md:to-transparent" />

              {/* 📝 Content Floating on top of the image */}
              <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6 md:p-16 max-w-2xl text-white space-y-4 md:space-y-6 z-10">
                
                {/* Badge Indicator */}
                <motion.span 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="inline-block self-start border border-sky-400/30 bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-xs"
                >
                  {sliderData[current].badge}
                </motion.span>

                {/* Main Hero Title */}
                <motion.h1 
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-md"
                >
                  {sliderData[current].title}
                </motion.h1>

                {/* Short Subtitle / Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-xs md:text-base text-zinc-400 max-w-lg leading-relaxed font-normal"
                >
                  {sliderData[current].description}
                </motion.p>

                {/* Buttons */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3 pt-2"
                >
                  <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950 px-5 py-2.5 rounded-xl text-xs md:text-sm font-black hover:from-sky-300 hover:to-blue-400 transition-all cursor-pointer shadow-lg shadow-sky-500/20 active:scale-95">
                    {sliderData[current].btn1}
                  </button>

                  <button className="border border-zinc-700 bg-zinc-800/40 text-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold hover:bg-zinc-800 hover:border-zinc-500 transition-all cursor-pointer backdrop-blur-xs active:scale-95">
                    {sliderData[current].btn2}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 🎮 SLIDER CONTROLS */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-2 z-20">
            <button
              onClick={prevSlide}
              className="p-2 bg-zinc-950/40 border border-zinc-800 rounded-xl hover:bg-sky-400 hover:text-zinc-950 transition-all cursor-pointer text-white backdrop-blur-md"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Slide Progress Indicator Dots */}
            <div className="flex gap-1 px-1">
              {sliderData.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "w-4 bg-sky-400" : "w-1.5 bg-zinc-700"}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 bg-zinc-950/40 border border-zinc-800 rounded-xl hover:bg-sky-400 hover:text-zinc-950 transition-all cursor-pointer text-white backdrop-blur-md"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ===== GLOBAL STATS AREA ===== */}
        <div className="flex flex-wrap justify-between md:justify-start gap-6 md:gap-16 pt-6 px-4 border-t border-zinc-900 w-full">
          <StatBox
            icon={<Users className="text-sky-400 w-5 h-5" />}
            count="5K+"
            label="Alumni Members"
          />
          <StatBox
            icon={<Building2 className="text-sky-400 w-5 h-5" />}
            count="50+"
            label="Departments"
          />
          <StatBox
            icon={<Briefcase className="text-sky-400 w-5 h-5" />}
            count="100+"
            label="Opportunities"
          />
        </div>

      </div>
    </section>
  );
}

// স্ট্যাটকার্ড হেল্পকার (Dark Premium Mode)
const StatBox = ({ icon, count, label }) => (
  <div className="flex items-center gap-3">
    <div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800/60 shadow-md shadow-black/20">
      {icon}
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-black text-white tracking-tight">{count}</h3>
      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
        {label}
      </p>
    </div>
  </div>
);