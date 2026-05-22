import { useState } from "react";

const faqs = [
  {
    question: "What is this Alumni Platform?",
    answer:
      "This platform connects students and alumni to build a strong professional network.",
  },
  {
    question: "Who can join this website?",
    answer: "Only students and alumni from our university can register.",
  },
  {
    question: "How can I register?",
    answer: "Click on the Register button and fill in your details.",
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we ensure your data is protected with secure authentication.",
  },
  {
    question: "Can I edit my profile later?",
    answer: "Yes, you can update your profile anytime from dashboard.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f172a] text-white py-20 flex items-center justify-center min-h-screen">
      {/* max-w-3xl ব্যবহার করে কন্টেন্ট চওড়া কমানো হয়েছে এবং mx-auto দিয়ে সেন্টারে আনা হয়েছে */}
      <div className="w-full max-w-3xl mx-auto px-6 text-center">
        
        {/* হেডিংটিকে সেন্টারে রাখা হয়েছে */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* FAQ আইটেমগুলোর টেক্সট অ্যালাইনমেন্ট বামে (text-left) রাখা হয়েছে পড়ার সুবিধার জন্য */}
        <div className="text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-5 cursor-pointer hover:border-sky-400 bg-slate-900/50 transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base md:text-lg font-semibold flex justify-between items-center gap-4 select-none">
                <span>{faq.question}</span>
                <span className="text-sky-400 text-xl font-bold shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>

              {openIndex === index && (
                <p className="mt-3 text-gray-400 text-sm md:text-base leading-relaxed transition-all">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}