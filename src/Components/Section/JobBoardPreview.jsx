import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export function JobBoard() {
  const jobs = [
    { role: "Frontend Engineer (React)", comp: "TechForge Ltd", loc: "Remote (BD)", type: "Full-Time", salary: "৳৮০K - ৳১২০K" },
    { role: "Software Engineer Intern", comp: "BrainStation 23", loc: "Dhaka, BD", type: "Internship", salary: "৳১৫K - ৳২০K" },
    { role: "Data Analyst", comp: "Pathao", loc: "On-site", type: "Full-Time", salary: "Negotiable" },
  ];

  return (
    <section className="w-full bg-zinc-950 text-white py-24 border-b border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full">
            💼 Career Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight pt-2">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Opportunities</span></h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((job, i) => (
            <div key={i} className="group p-5 md:p-6 bg-zinc-900/20 border border-zinc-800/60 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-sky-400 group-hover:bg-sky-400 group-hover:text-zinc-950 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <FaBriefcase size={16} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-bold group-hover:text-sky-400 transition-colors">{job.role}</h3>
                  <p className="text-zinc-400 text-xs font-medium flex items-center gap-2">
                    <span>{job.comp}</span> • <span className="flex items-center gap-1"><FaMapMarkerAlt size={10} /> {job.loc}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:self-center">
                <span className="text-[11px] font-bold px-2.5 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-lg">{job.type}</span>
                <span className="text-xs font-bold text-sky-400 bg-sky-500/5 border border-sky-500/10 px-3 py-1 rounded-lg">{job.salary}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}