import { useState } from "react";
import faqImg from "../../..//public/tiny-business-people-with-giant-faq-letters-gadget-users-searching-instructions-useful-information-flat-vector-illustration-customer-support-solution-concept-banner-landing-web-page_74855-23409.avif"; // your image

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
    <section className="bg-[#0f172a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
        {/* LEFT: FAQ */}
        <div>
          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl mb-4 p-4 cursor-pointer hover:border-sky-400 transition"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold flex justify-between">
                {faq.question}
                <span className="text-sky-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>

              {openIndex === index && (
                <p className="mt-3 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center order-1 md:order-2 relative">
          <img
            src={faqImg}
            alt="FAQ Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-2xl"
          />

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-sky-500/20 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
}
