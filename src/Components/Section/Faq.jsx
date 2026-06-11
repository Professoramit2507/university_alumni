import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this Alumni Platform?",
    answer: "This platform connects students and alumni to build a strong professional network, offering job referrals, event updates, and direct messaging.",
  },
  {
    question: "Who can join this website?",
    answer: "Only verified current students and alumni from our university can register. Each profile goes through an institutional verification process.",
  },
  {
    question: "How can I register?",
    answer: "Click on the 'Register' button in the top navigation, select your batch and department, fill in your details, and submit for approval.",
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we ensure your data is highly protected. Only registered members can access directories, and you can control your info visibility from privacy settings.",
  },
  {
    question: "Can I edit my profile later?",
    answer: "Absolutely! You can update your current role, company, skills, contact info, and profile picture anytime from your personalized dashboard.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-zinc-950 text-white py-24 overflow-hidden font-sans border-b border-zinc-900">
      
      {/* 🌌 Ambient Tech Glow */}
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* ===== SECTION HEADING ===== */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full backdrop-blur-xs">
            💬 Help Center
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Questions</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-normal">
            Got questions? We have got answers. Explore the most common queries about our community network.
          </p>
        </div>

        {/* ===== 2-COLUMN CONTENT GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 📸 LEFT COLUMN: TECH/ILLUSTRATION IMAGE */}
          <div className="lg:col-span-5 w-full aspect-square max-w-[420px] mx-auto lg:mx-0">
            <div className="relative w-full h-full rounded-[2.5rem] border border-zinc-800/80 bg-zinc-900 p-4 shadow-2xl shadow-black/50 group overflow-hidden">
              {/* Image Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" 
                alt="FAQ Illustration"
                className="w-full h-full object-cover rounded-[1.8rem] opacity-70 group-hover:scale-102 group-hover:opacity-85 transition-all duration-700"
              />
            </div>
          </div>

          {/* 🗂️ RIGHT COLUMN: PREMIUM ACCORDION ITEMS */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-[1.5rem] border transition-all duration-300 cursor-pointer ${
                    isOpen 
                      ? "border-sky-500/40 bg-zinc-900/60 shadow-lg shadow-sky-500/[0.02]" 
                      : "border-zinc-800/70 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Accordion Header */}
                  <div className="p-5 md:p-6 flex justify-between items-center gap-4 select-none">
                    <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-sky-400" : "text-white"}`}>
                      {faq.question}
                    </h3>
                    <div className={`p-1.5 rounded-xl border transition-all duration-300 shrink-0 ${
                      isOpen 
                        ? "bg-sky-500/10 border-sky-400/30 text-sky-400 rotate-180" 
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  {/* Accordion Content Container with Framer Motion height interpolation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-zinc-800/50">
                          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}