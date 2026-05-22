import  { useState } from "react";
import { 
  User, 
  IdCard, 
  Briefcase, 
  MapPin, 
  Phone, 
  Calendar, 
  Mail,
  Edit3, 
  Camera 
} from "lucide-react"; // সুন্দর আইকনের জন্য

const DashProfile = () => {
  // ডেমো ডেটা (পরবর্তীতে API থেকে ডাটা আসলে এখানে সেট হবে)
  const [userProfile] = useState({
    name: "Amit Mahmud Amil",
    regNo: "CSE2017024",
    role: "Senior Software Engineer",
    company: "Google LLC",
    location: "California, USA",
    phone: "+1 (555) 019-2834",
    email: "amit.amil@alumni.netrokona.edu",
    experience: "5+ Years",
    dept: "Computer Science & Engineering",
    batch: "2017",
    img: "https://i.pravatar.cc/150?u=amit"
  });

  const handleEditClick = (field) => {
    alert(`${field} পরিবর্তন করার জন্য একটি মডাল বা ফর্ম ওপেন করা যাবে।`);
    // এখানে আপনার এডিট লজিক বা স্টেট চেঞ্জ বসাতে পারেন
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* PROFILE TOP BANNER & AVATAR */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        {/* কভার ব্যানার */}
        <div className="h-40 bg-gradient-to-r from-[#0A1F22] to-[#1A3F44] relative"></div>
        
        {/* প্রোফাইল ইমেজ এবং নাম */}
        <div className="px-8 pb-8 relative flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16">
          <div className="relative group">
            <img
              src={userProfile.img}
              alt={userProfile.name}
              className="w-32 h-32 rounded-3xl object-cover border-4 border-[#F4F1EA] shadow-md bg-white"
            />
            <button 
              onClick={() => handleEditClick("Profile Picture")}
              className="absolute bottom-2 right-2 bg-[#B08D48] text-white p-2 rounded-xl hover:bg-gray-900 transition-colors shadow cursor-pointer"
            >
              <Camera size={16} />
            </button>
          </div>

          <div className="text-center sm:text-left flex-1 mb-2">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
              {userProfile.name}
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">
                Verified
              </span>
            </h1>
            <p className="text-[#B08D48] font-bold text-sm">{userProfile.role} at {userProfile.company}</p>
            <p className="text-xs text-gray-400">{userProfile.dept} | Batch {userProfile.batch}</p>
          </div>

          {/* মেইন এডিট বাটন */}
          <button 
            onClick={() => handleEditClick("Full Profile")}
            className="px-5 py-3 bg-[#0A1F22] hover:bg-[#B08D48] text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm mb-2"
          >
            <Edit3 size={16} />
            Edit Profile
          </button>
        </div>
      </div>

      {/* PROFILE DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ১. একাডেমিক ও ব্যক্তিগত তথ্য */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 space-y-5">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-3 flex justify-between items-center">
            <span>Academic & Personal Info</span>
          </h2>

          <div className="space-y-4">
            <InfoRow 
              icon={<User size={18} className="text-gray-400" />} 
              label="Full Name" 
              value={userProfile.name} 
              onEdit={() => handleEditClick("Name")}
            />
            <InfoRow 
              icon={<IdCard size={18} className="text-gray-400" />} 
              label="Registration No" 
              value={userProfile.regNo} 
              onEdit={() => handleEditClick("Registration No")}
            />
            <InfoRow 
              icon={<Mail size={18} className="text-gray-400" />} 
              label="Email Address" 
              value={userProfile.email} 
              onEdit={() => handleEditClick("Email")}
            />
            <InfoRow 
              icon={<Phone size={18} className="text-gray-400" />} 
              label="Phone Number" 
              value={userProfile.phone} 
              onEdit={() => handleEditClick("Phone Number")}
            />
          </div>
        </div>

        {/* ২. প্রফেশনাল ও ক্যারিয়ার তথ্য */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 space-y-5">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-3 flex justify-between items-center">
            <span>Professional Info</span>
          </h2>

          <div className="space-y-4">
            <InfoRow 
              icon={<Briefcase size={18} className="text-gray-400" />} 
              label="Current Designation" 
              value={userProfile.role} 
              onEdit={() => handleEditClick("Designation")}
            />
            <InfoRow 
              icon={<Briefcase size={18} className="text-gray-400" />} 
              label="Current Company" 
              value={userProfile.company} 
              onEdit={() => handleEditClick("Company")}
            />
            <InfoRow 
              icon={<Calendar size={18} className="text-gray-400" />} 
              label="Experience" 
              value={userProfile.experience} 
              onEdit={() => handleEditClick("Experience")}
            />
            <InfoRow 
              icon={<MapPin size={18} className="text-gray-400" />} 
              label="Job Location" 
              value={userProfile.location} 
              onEdit={() => handleEditClick("Location")}
            />
          </div>
        </div>

      </div>

    </div>
  );
};

// --- সাব কম্পোনেন্ট: প্রতিটি ইনফরমেশন লাইনের জন্য ---
const InfoRow = ({ icon, label, value, onEdit }) => (
  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="p-2 bg-[#F4F1EA] rounded-lg shrink-0">
        {icon}
      </div>
      <div className="overflow-hidden">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="font-bold text-gray-800 text-sm truncate">{value}</p>
      </div>
    </div>
    
    {/* এডিট আইকন বাটন - মাউস হভার করলে সুন্দরভাবে ভেসে উঠবে */}
    <button 
      onClick={onEdit}
      className="p-2 text-gray-400 hover:text-[#B08D48] hover:bg-white rounded-lg shadow-sm sm:opacity-0 group-hover:opacity-100 transition-all cursor-pointer border border-transparent hover:border-gray-100"
      title={`Edit ${label}`}
    >
      <Edit3 size={14} />
    </button>
  </div>
);

export default DashProfile;