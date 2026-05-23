import  { useState } from "react";
import { Search, UserCheck, Shield, UserX, SlidersHorizontal } from "lucide-react";

// Mock Data for User Directory
const initialUsers = [
  { id: 1, name: "Dr. Mahbubul Alam", email: "mahbub.cse@netrouni.edu.bd", batch: "Faculty", role: "Admin", status: "Active" },
  { id: 2, name: "Arifur Rahman", email: "arif.cse18@gmail.com", batch: "CSE '18", role: "Alumni", status: "Active" },
  { id: 3, name: "Nusrat Jahan", email: "nusrat.eee20@gmail.com", batch: "EEE '20", role: "Student", status: "Active" },
  { id: 4, name: "Sajid Hasan", email: "sajid.bba19@gmail.com", batch: "BBA '19", role: "Alumni", status: "Suspended" },
  { id: 5, name: "Taskin Ahmed", email: "taskin.math22@gmail.com", batch: "MATH '22", role: "Student", status: "Active" },
];

const ManageUser = () => {
  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  // Handle Role Modification
  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
    alert(`User role successfully updated to ${newRole}.`);
  };

  // Handle Status Toggle (Suspend / Activate)
  const handleToggleStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === "Active" ? "Suspended" : "Active";
    setUsers(users.map(user => user.id === id ? { ...user, status: nextStatus } : user));
    alert(`User security status changed to ${nextStatus}.`);
  };

  // Filter Pipeline
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(query.toLowerCase()) || 
                          user.email.toLowerCase().includes(query.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          <Shield className="text-[#B08D48]" size={28} />
          User Directory Control
        </h1>
        <p className="text-gray-500 text-sm">
          Audit system memberships, override global access privileges, assign administrators, and manage credential access.
        </p>
      </div>

      {/* Mini Metric Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Evaluated</p>
          <p className="text-xl font-black text-gray-900 mt-0.5">{users.length}</p>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Active Credentials</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">{users.filter(u => u.status === "Active").length}</p>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Administrators</p>
          <p className="text-xl font-black text-purple-600 mt-0.5">{users.filter(u => u.role === "Admin").length}</p>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Suspended Profiles</p>
          <p className="text-xl font-black text-rose-600 mt-0.5">{users.filter(u => u.status === "Suspended").length}</p>
        </div>
      </div>

      {/* Query Control Deck */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search records by system name or email handles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#F4F1EA]/50 text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
          />
        </div>

        <div className="md:w-52 bg-[#F4F1EA]/50 rounded-xl px-3 border border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-[#B08D48]/50 transition-all flex items-center">
          <SlidersHorizontal className="text-gray-400 mr-2" size={16} />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="w-full py-3 bg-transparent text-sm font-bold text-gray-700 outline-none cursor-pointer"
          >
            <option value="All">All Structural Roles</option>
            <option value="Admin">System Admin</option>
            <option value="Alumni">Alumni Registry</option>
            <option value="Student">Enrolled Students</option>
          </select>
        </div>
      </div>

      {/* Registry Ledger Table */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-wider">
                <th className="pb-4 font-semibold">User Profile</th>
                <th className="pb-4 font-semibold">Affiliation / Batch</th>
                <th className="pb-4 font-semibold">System Privileges</th>
                <th className="pb-4 font-semibold">Security State</th>
                <th className="pb-4 text-center font-semibold">Actions Override</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="text-sm font-medium text-gray-700 group">
                  {/* Profile info */}
                  <td className="py-4">
                    <p className="font-bold text-gray-900 group-hover:text-[#B08D48] transition-colors">{user.name}</p>
                    <p className="text-xs text-gray-400 font-medium">{user.email}</p>
                  </td>

                  {/* Batch Affiliation */}
                  <td className="py-4">
                    <span className="text-xs font-bold bg-[#F4F1EA] text-[#0A1F22] px-3 py-1 rounded-lg">
                      {user.batch}
                    </span>
                  </td>

                  {/* System Role Selection Dropdown */}
                  <td className="py-4">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-800 p-2 rounded-xl outline-none border border-transparent cursor-pointer transition-all focus:bg-white focus:ring-1 focus:ring-[#B08D48]"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Alumni">Alumni</option>
                      <option value="Student">Student</option>
                    </select>
                  </td>

                  {/* Security Status Badge */}
                  <td className="py-4">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      user.status === "Active" 
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                        : "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}>
                      {user.status}
                    </span>
                  </td>

                  {/* Operational overrides */}
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => handleToggleStatus(user.id, user.status)}
                        className={`p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 text-xs font-bold ${
                          user.status === "Active"
                            ? "bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white"
                            : "bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                        }`}
                        title={user.status === "Active" ? "Suspend Account" : "Reactivate Account"}
                      >
                        {user.status === "Active" ? (
                          <>
                            <UserX size={15} />
                            <span>Suspend</span>
                          </>
                        ) : (
                          <>
                            <UserCheck size={15} />
                            <span>Reactivate</span>
                          </>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fallback Empty Slate */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-10">
            <p className="text-sm font-bold text-gray-400">No identity profiles matched your filtration parameters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUser;