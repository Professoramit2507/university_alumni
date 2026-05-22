import { useState } from "react";
import { Heart,  ShieldCheck, Award, Users, GraduationCap } from "lucide-react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedFund, setSelectedFund] = useState("Scholarship Fund");

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount || selectedAmount;
    alert(`ধন্যবাদ! আপনি ${selectedFund}-এ ৳${finalAmount} অনুদান দেওয়ার জন্য পেমেন্ট গেটওয়েতে যাচ্ছেন।`);
  };

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          <Heart className="text-rose-500 fill-rose-500" size={28} />
          Donation & Fundraiser
        </h1>
        <p className="text-gray-500 text-sm">
          আপনার ছোট একটি অবদান আমাদের বিশ্ববিদ্যালয়ের বর্তমান শিক্ষার্থীদের ভবিষ্যৎ গড়তে এবং ক্যাম্পাসের উন্নয়নে বড় ভূমিকা রাখবে।
        </p>
      </div>

      {/* QUICK STATS / IMPACT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-amber-50 rounded-2xl text-[#B08D48]">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">৳১২,৫০,০০০+</h3>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Total Scholarship Given</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-emerald-50 rounded-2xl text-emerald-600">
            <Users size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">১৫০+ শিক্ষার্থী</h3>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Students Assisted</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-blue-50 rounded-2xl text-blue-600">
            <Award size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">৩টি সক্রিয় ফান্ড</h3>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Active Campaigns</p>
          </div>
        </div>
      </div>

      {/* MAIN DONATION FORM LEAOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT/CENTER: FORM */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-6 lg:p-8 shadow-sm lg:col-span-2">
          <form onSubmit={handleDonationSubmit} className="space-y-6">
            
            {/* ১. ফান্ড সিলেকশন */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Select a Cause / Fund</label>
              <select
                value={selectedFund}
                onChange={(e) => setSelectedFund(e.target.value)}
                className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-bold text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all cursor-pointer"
              >
                <option value="Scholarship Fund">Student Scholarship Fund (মেধাবী ও অসচ্ছল তহবিল)</option>
                <option value="Campus & Lab Development">Campus & Technology Lab Development</option>
                <option value="Emergency Relief Fund">Emergency Disaster & Relief Campaign</option>
              </select>
            </div>

            {/* ২. কুইক অ্যামাউন্ট সিলেক্টর */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Select Donation Amount (BDT)</label>
              <div className="flex flex-wrap gap-2.5">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`px-5 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      selectedAmount === amount && !customAmount
                        ? "bg-[#0A1F22] text-white shadow-md"
                        : "bg-[#F4F1EA]/60 text-gray-700 hover:bg-[#F4F1EA]"
                    }`}
                  >
                    ৳ {amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* ৩. কাস্টম অ্যামাউন্ট ইনপুট */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Or Enter Custom Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-400 font-bold text-sm">৳</span>
                <input
                  type="number"
                  placeholder="Enter custom BDT amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-8 pr-4 py-3 bg-[#F4F1EA]/50 text-sm font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* ৪. সাবমিট বাটন */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0A1F22] hover:bg-[#B08D48] text-white font-black text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-[#0A1F22]/10 flex items-center justify-center gap-2"
            >
              <Heart size={16} className="fill-white" />
              Proceed to Secure Payment
            </button>
          </form>
        </div>

        {/* RIGHT: SECURITY & INFO SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0A1F22] to-slate-900 text-white p-6 rounded-[2rem] shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <ShieldCheck className="text-[#B08D48]" size={20} />
              100% Secure & Transparent
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              আপনার পাঠানো সমস্ত অনুদান সরাসরি বিশ্ববিদ্যালয়ের সেন্ট্রাল অডিট ট্রাস্টের ফান্ডে জমা হয়। প্রতি বছর ড্যাশবোর্ডে এর অডিট রিপোর্ট প্রকাশ করা হবে।
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-gray-300">
                <span>Payment Gateways:</span>
                <span className="text-[#B08D48]">bKash, Nagad, Visa, Master Card</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F1EA]/50 border border-gray-100 p-6 rounded-[2rem]">
            <h4 className="font-bold text-sm text-gray-900 mb-2">Tax Exemption Info</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              শিক্ষা প্রতিষ্ঠানে প্রদত্ত সকল অনুদান সরকারি নিয়ম অনুযায়ী সম্পূর্ণ আয়কর (Tax) মুক্ত সুবিধা পাওয়ার যোগ্য। পেমেন্ট শেষে ইনভয়েসটি সংগ্রহে রাখুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;