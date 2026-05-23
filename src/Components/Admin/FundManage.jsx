import  { useState } from "react";
import { Coins, PlusCircle, ArrowUpRight, TrendingUp, ShieldCheck, Landmark, Receipt, X } from "lucide-react";

// Mock Data for Existing Strategic Trust Accounts
const initialCampaigns = [
  {
    id: 1,
    title: "Student Scholarship Endowment",
    target: 2000000,
    raised: 1250000,
    donorsCount: 340,
    status: "Active"
  },
  {
    id: 2,
    title: "Next-Gen AI & Robotics Lab Floor",
    target: 5000000,
    raised: 4100000,
    donorsCount: 185,
    status: "Active"
  },
  {
    id: 3,
    title: "Flood & Disaster Emergency Response",
    target: 1000000,
    raised: 1000000,
    donorsCount: 512,
    status: "Completed"
  }
];

// Mock Data for Recent Incoming Invoices
const recentTransactions = [
  { id: "TXN-9821", donor: "Sabbir Rahman", fund: "Scholarship Fund", amount: 15000, date: "May 22, 2026" },
  { id: "TXN-9754", donor: "Anika Tasnim", fund: "AI & Robotics Lab", amount: 50000, date: "May 20, 2026" },
  { id: "TXN-9610", donor: "Anonymous Alumni", fund: "Scholarship Fund", amount: 5000, date: "May 19, 2026" },
];

const FundManage = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Campaign Form State Management
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");

  // Handler: Instantiate New Funding Drive
  const handleCreateCampaign = (e) => {
    e.preventDefault();
    const newDrive = {
      id: Date.now(),
      title,
      target: parseInt(target) || 0,
      raised: 0,
      donorsCount: 0,
      status: "Active"
    };
    setCampaigns([newDrive, ...campaigns]);
    setIsModalOpen(false);
    setTitle("");
    setTarget("");
  };

  // Helper: Calculate Mathematical Percentages
  const getPercentage = (raised, target) => {
    const pct = (raised / target) * 100;
    return pct > 100 ? 100 : Math.round(pct);
  };

  return (
    <div className="space-y-8 relative">
      {/* Upper Descriptive Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <Coins className="text-[#B08D48]" size={28} />
            Treasury & Endowments
          </h1>
          <p className="text-gray-500 text-sm">
            Monitor strategic institutional trust pools, track inbound electronic wire ledgers, and manage capital campaigns.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0A1F22] hover:bg-[#B08D48] text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer self-start sm:self-auto shadow-sm"
        >
          <PlusCircle size={18} />
          Launch Funding Drive
        </button>
      </div>

      {/* Grid: Funding Drives Status Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {campaigns.map((camp) => {
          const completionPct = getPercentage(camp.raised, camp.target);
          return (
            <div key={camp.id} className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="font-bold text-gray-900 text-base leading-tight">{camp.title}</h3>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                    camp.status === "Active" 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                      : "bg-blue-50 text-blue-700 border border-blue-100"
                  }`}>
                    {camp.status}
                  </span>
                </div>

                {/* Capital Metrics Breakdown */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Raised Pool</span>
                    <span className="text-lg font-black text-gray-900">৳{camp.raised.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-gray-500">
                    <span>Target Metric</span>
                    <span>৳{camp.target.toLocaleString()}</span>
                  </div>
                </div>

                {/* Graphical Progression Bar */}
                <div className="space-y-1.5 mb-2">
                  <div className="w-full bg-[#F4F1EA] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#B08D48] h-full transition-all duration-500 rounded-full" 
                      style={{ width: `${completionPct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-400">
                    <span>{camp.donorsCount} Global Donors</span>
                    <span className="text-[#B08D48]">{completionPct}% Allocated</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Fiscal Inflow Split Ledger View */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        {/* Table: Real-Time Transaction Logs */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm xl:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Inbound Audit Stream</h3>
              <p className="text-xs text-gray-400">Verified institutional ledger inputs arriving across localized payment pipelines.</p>
            </div>
            <span className="text-xs font-bold text-[#B08D48] flex items-center gap-1 cursor-pointer hover:underline">
              Export Receipts <ArrowUpRight size={14} />
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Transaction ID</th>
                  <th className="pb-3 font-semibold">Endorsee Identity</th>
                  <th className="pb-3 font-semibold">Target Fund</th>
                  <th className="pb-3 text-right font-semibold">Capital Transferred</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentTransactions.map((tx) => (
                  <tr key={tx.id} className="text-sm font-medium text-gray-700">
                    <td className="py-4 font-mono text-xs text-gray-500 flex items-center gap-1.5">
                      <Receipt size={14} className="text-gray-400" />
                      {tx.id}
                    </td>
                    <td className="py-4 text-gray-900 font-bold">{tx.donor}</td>
                    <td className="py-4 text-xs font-semibold text-slate-500">{tx.fund}</td>
                    <td className="py-4 text-right font-black text-emerald-600">৳{tx.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informational Corporate Sidebar Cards */}
        <div className="space-y-6">
          <div className="bg-[#0A1F22] text-white p-6 rounded-[2rem] shadow-sm">
            <h3 className="font-bold text-base text-[#B08D48] mb-3 flex items-center gap-2">
              <Landmark size={18} />
            Central Bank Trust</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              All financial endpoints hook into centralized banking arrangements governed under secure university charter frameworks.
            </p>
            <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-bold text-gray-300">
              <span>Settlement Layer:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={14} /> Operational
              </span>
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/50 p-6 rounded-[2rem] flex gap-3">
            <TrendingUp className="text-amber-700 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="font-bold text-sm text-amber-800 mb-1">Fiscal Target Projections</h4>
              <p className="text-xs text-amber-700 leading-relaxed">
                Current financial trends place development pipeline allocations ahead of programmatic schedule projections by 12%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL MODIFIER DRAWER: DRIVE GENERATION MECHANISM */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-md p-6 lg:p-8 shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 cursor-pointer p-1.5 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">Instantiate Trust Capital Fund</h2>
            <p className="text-gray-400 text-xs mb-6">Spin up a programmatic donation channel targetable by all platform members.</p>

            <form onSubmit={handleCreateCampaign} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Campaign Operational Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Library Digital Catalog Extension"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Target Threshold Allocation (BDT)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g., 1500000"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-50 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 bg-gray-100 text-gray-600 text-xs font-bold rounded-xl hover:bg-gray-200 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#0A1F22] hover:bg-[#B08D48] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Deploy Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundManage;