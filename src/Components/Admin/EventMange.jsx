import  { useState } from "react";
import { Calendar, PlusCircle, MapPin,  Clock, Trash2, Globe, EyeOff, X } from "lucide-react";

// Mock Data for Active University Events
const initialEvents = [
  {
    id: 1,
    title: "Grand Alumni Reunion 2026",
    date: "December 24, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Central Campus Auditorium",
    capacity: 1200,
    registered: 845,
    status: "Published"
  },
  {
    id: 2,
    title: "National Tech Fest & Hackathon",
    date: "October 12, 2026",
    time: "10:00 AM - 08:00 PM",
    location: "CSE Simulation Lab Floor",
    capacity: 350,
    registered: 310,
    status: "Published"
  },
  {
    id: 3,
    title: "Corporate Networking Gala Night",
    date: "July 05, 2026",
    time: "06:30 PM - 10:00 PM",
    location: "Grand Palace Hotel, Dhaka",
    capacity: 150,
    registered: 150,
    status: "Draft"
  }
];

const EventMange = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State Configurations
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newCapacity, setNewCapacity] = useState("");

  // Handler: Toggle Publication Visibility State
  const toggleStatus = (id) => {
    setEvents(events.map(ev => 
      ev.id === id ? { ...ev, status: ev.status === "Published" ? "Draft" : "Published" } : ev
    ));
  };

  // Handler: Delete Event Entry
  const deleteEvent = (id) => {
    if (confirm("Are you sure you want to permanently delete this event?")) {
      setEvents(events.filter(ev => ev.id !== id));
    }
  };

  // Handler: Form Submission
  const handleCreateEvent = (e) => {
    e.preventDefault();
    const eventObj = {
      id: Date.now(),
      title: newTitle,
      date: newDate,
      time: newTime,
      location: newLocation,
      capacity: parseInt(newCapacity) || 0,
      registered: 0,
      status: "Draft"
    };
    setEvents([eventObj, ...events]);
    setIsModalOpen(false);
    // Reset Form Input Buffers
    setNewTitle(""); setNewDate(""); setNewTime(""); setNewLocation(""); setNewCapacity("");
  };

  return (
    <div className="space-y-8 relative">
      {/* Upper Title Deck */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <Calendar className="text-[#B08D48]" size={28} />
            Event Orchestration
          </h1>
          <p className="text-gray-500 text-sm">
            Schedule university events, configure auditorium logistics, configure ticketing thresholds, and audit guest parameters.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0A1F22] hover:bg-[#B08D48] text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer self-start sm:self-auto shadow-sm"
        >
          <PlusCircle size={18} />
          Create New Event
        </button>
      </div>

      {/* Primary Corporate Listings */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative"
          >
            <div>
              {/* Event Metadata Segment */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#B08D48] transition-colors">
                    {ev.title}
                  </h3>
                  <span className={`inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider mt-1.5 ${
                    ev.status === "Published" 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}>
                    {ev.status}
                  </span>
                </div>

                {/* Micro Seating Indicator */}
                <div className="text-right shrink-0">
                  <p className="text-xl font-black text-gray-800">{ev.registered}<span className="text-xs text-gray-400 font-medium">/{ev.capacity}</span></p>
                  <p className="text-[9px] font-extrabold uppercase text-gray-400 tracking-wider">Seats Occupied</p>
                </div>
              </div>

              {/* Spatial and Temporal Parameters */}
              <div className="space-y-2.5 border-t border-b border-gray-50 py-4 my-4 text-xs font-semibold text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-[#B08D48]" />
                  <span className="text-gray-700">{ev.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-blue-500" />
                  <span>{ev.time}</span>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <MapPin size={15} className="text-rose-500" />
                  <span>{ev.location}</span>
                </div>
              </div>
            </div>

            {/* Action Bar Triggers */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <button
                onClick={() => toggleStatus(ev.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                  ev.status === "Published"
                    ? "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-transparent"
                }`}
              >
                {ev.status === "Published" ? (
                  <>
                    <EyeOff size={14} />
                    Unpublish / Delist
                  </>
                ) : (
                  <>
                    <Globe size={14} />
                    Go Live / Publish
                  </>
                )}
              </button>

              <button
                onClick={() => deleteEvent(ev.id)}
                className="p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all cursor-pointer border border-rose-100 hover:border-transparent"
                title="Purge Event Track"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL WINDOW OVERLAY: CREATE EVENT CREATION FLOW */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-xl p-6 lg:p-8 shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Exit Trigger */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 cursor-pointer p-1.5 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">Deploy New Campaign</h2>
            <p className="text-gray-400 text-xs mb-6">Initialize a scheduling ledger entry across student and alumni directory viewports.</p>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Event Assignment Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Annual Networking Gala Session"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Target Date</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., November 15, 2026"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Time Parameters</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 02:00 PM - 05:00 PM"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Spatial Location / Hub Address</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Seminar Room 302 or Zoom Webinar Link"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F4F1EA]/50 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D48]/50 border border-transparent focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Max Seating Capacity Threshold</label>
                <input
                  type="number"
                  required
                  placeholder="e.g., 500"
                  value={newCapacity}
                  onChange={(e) => setNewCapacity(e.target.value)}
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
                  Save as Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventMange;