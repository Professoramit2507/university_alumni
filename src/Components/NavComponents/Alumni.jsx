const alumniData = [
  {
    name: "Rahim Ahmed",
    dept: "CSE",
    batch: "2018",
    company: "Google",
  },
  {
    name: "Sadia Khan",
    dept: "CSE",
    batch: "2019",
    company: "Microsoft",
  },
  {
    name: "Tanvir Hasan",
    dept: "CSE",
    batch: "2017",
    company: "Amazon",
  },
  {
    name: "Nusrat Jahan",
    dept: "CSE",
    batch: "2020",
    company: "Unilever",
  },
  {
    name: "Mahin Chowdhury",
    dept: "CSE",
    batch: "2016",
    company: "Meta",
  },
  {
    name: "Farhan Islam",
    dept: "CSE",
    batch: "2018",
    company: "Tesla",
  },
  {
    name: "Jannat Akter",
    dept: "CSE",
    batch: "2019",
    company: "Daraz",
  },
  {
    name: "Sabbir Hossain",
    dept: "CSE",
    batch: "2015",
    company: "IBM",
  },
  {
    name: "Mim Rahman",
    dept: "CSE",
    batch: "2021",
    company: "Samsung",
  },
];

const Alumni = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-16 px-6">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          🎓 Alumni Directory
        </h1>
        <p className="text-gray-400">
          Browse and connect with alumni from different batches and departments.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="🔍 Search alumni..."
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-gray-700 focus:outline-none focus:border-sky-400"
        />

        <select className="px-4 py-2 rounded-lg bg-slate-800 border border-gray-700">
          <option>All Departments</option>
          <option>CSE</option>
          <option>EEE</option>
          <option>BBA</option>
        </select>
      </div>

      {/* Alumni Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {alumniData.map((alumni, index) => (
          <div
            key={index}
            className="bg-slate-900 p-5 rounded-xl border border-gray-800 hover:border-sky-400 hover:scale-105 transition"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-sky-400 text-black flex items-center justify-center text-xl font-bold mb-4">
              {alumni.name.charAt(0)}
            </div>

            {/* Info */}
            <h3 className="text-lg font-semibold">{alumni.name}</h3>
            <p className="text-gray-400 text-sm">{alumni.dept} • Batch {alumni.batch}</p>
            <p className="text-sky-400 text-sm mt-1">{alumni.company}</p>

            {/* Button */}
            <button className="mt-4 w-full border border-sky-400 py-1 rounded hover:bg-sky-400 hover:text-black transition">
              View Profile
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Alumni;