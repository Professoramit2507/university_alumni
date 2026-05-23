
import { Users, Calendar, HeartHandshake, CheckCircle2, XCircle, ShieldAlert, ArrowUpRight } from "lucide-react";

const pendingUsers = [
  { id: 1, name: "Arifur Rahman", email: "arif.cse18@gmail.com", batch: "CSE '18", role: "Alumni", status: "Pending" },
  { id: 2, name: "Nusrat Jahan", email: "nusrat.eee20@gmail.com", batch: "EEE '20", role: "Student", status: "Pending" },
  { id: 3, name: "Imran Khan", email: "imran.bba17@gmail.com", batch: "BBA '17", role: "Alumni", status: "Pending" },
];

const AdminDashboard = () => {
  
  const handleAction = (name, action) => {
    alert(`Successfully processing ${name} account to state: ${action === 'approve' ? 'Approved' : 'Rejected'}.`);
  };

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          <ShieldAlert className="text-[#B08D48]" size={28} />
          Admin Governance Control
        </h1>
        <p className="text-gray-500 text-sm">
          Core verification interface, credential monitoring, campaign orchestration, and user processing control decks.
        </p>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Members</p>
            <h3 className="text-2xl font-black text-gray-900 mt-1">5,240</h3>
          </div>
          <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl">
            <Users size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Pending Tasks</p>
            <h3 className="text-2xl font-black text-amber-600 mt-1">12 Actions</h3>
          </div>
          <div className="p-3.5 bg-amber-50 text-amber-600 rounded-2xl">
            <ShieldAlert size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Active Campaigns</p>
            <h3 className="text-2xl font-black text-gray-900 mt-1">4 Live</h3>
          </div>
          <div className="p-3.5 bg-purple-50 text-purple-600 rounded-2xl">
            <Calendar size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Capital Raised</p>
            <h3 className="text-2xl font-black text-emerald-600 mt-1">BDT 1.25M</h3>
          </div>
          <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl">
            <HeartHandshake size={22} />
          </div>
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Pending Registrations</h3>
              <p className="text-xs text-gray-400">Validate incoming candidate profiles against active enrollment rosters.</p>
            </div>
            <span className="text-xs font-bold text-[#B08D48] flex items-center gap-1 cursor-pointer hover:underline">
              View Ledger <ArrowUpRight size={14} />
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-wider">
                  <th className="pb-3 font-semibold">User Profile</th>
                  <th className="pb-3 font-semibold">Batch / Designation</th>
                  <th className="pb-3 text-center font-semibold">Verification Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {pendingUsers.map((user) => (
                  <tr key={user.id} className="text-sm font-medium text-gray-700 group">
                    <td className="py-4">
                      <p className="font-bold text-gray-900 group-hover:text-[#B08D48] transition-colors">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-xs font-bold text-gray-800">{user.batch}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wide">{user.role}</p>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleAction(user.name, "approve")}
                          className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
                          title="Authorize Profile"
                        >
                          <CheckCircle2 size={16} />
                        </button>
                        <button
                          onClick={() => handleAction(user.name, "reject")}
                          className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
                          title="Decline Profile"
                        >
                          <XCircle size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Administration Sidebar Modules */}
        <div className="space-y-6">
          <div className="bg-[#0A1F22] text-white p-6 rounded-[2rem] shadow-sm">
            <h3 className="font-bold text-base text-[#B08D48] mb-4">Quick Operations</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-white/5 hover:bg-[#B08D48] hover:text-white rounded-xl text-xs font-bold tracking-wide text-gray-300 transition-all text-left px-4 cursor-pointer">
                📢 Dispatch Campus Broadcast Notice
              </button>
              <button className="w-full py-3 bg-white/5 hover:bg-[#B08D48] hover:text-white rounded-xl text-xs font-bold tracking-wide text-gray-300 transition-all text-left px-4 cursor-pointer">
                🎁 Initiate New Funding Drive
              </button>
              <button className="w-full py-3 bg-white/5 hover:bg-red-500 hover:text-white rounded-xl text-xs font-bold tracking-wide text-red-400 transition-all text-left px-4 cursor-pointer">
                🔒 Engage Server Maintenance Mode
              </button>
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/50 p-6 rounded-[2rem]">
            <h4 className="font-bold text-sm text-amber-800 mb-2">Security Directive</h4>
            <p className="text-xs text-amber-700 leading-relaxed">
              Manual vetting against internal enrollment databases is required before authorizing profiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;