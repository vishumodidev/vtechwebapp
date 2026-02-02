import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Zap, Layers, Rocket, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UpskillingPrograms() {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Short-Term Courses & Certifications",
      desc: "Fast-track your learning with intensive modules focused on high-demand skills.",
      icon: <Award className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Career Advancement Training",
      desc: "Strategic programs designed to help you climb the corporate ladder effectively.",
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Tech + Soft Skills Balance",
      desc: "A holistic approach combining technical prowess with essential interpersonal skills.",
      icon: <Layers className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Adaptability for Fast Roles",
      desc: "Prepare for the dynamic nature of modern job roles with agile learning methodologies.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#061A2F] text-white border-y-[12px] border-yellow-500">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#061A2F] to-[#061A2F]"></div>
            <svg className="absolute top-0 right-0 w-1/2 h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 L100 0 L100 100 Z" fill="url(#blueGradient)" />
               <defs>
                 <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#061A2F" stopOpacity="01" />
                 </linearGradient>
               </defs>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
              <Rocket size={14} /> Future Proof Your Career
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight">
              Stay Ahead. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500">
                Stay Relevant.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              In a rapidly evolving landscape, continuous learning is your greatest asset. Equip yourself with the skills of tomorrow, today.
            </p>
            <div className="flex gap-4">
               <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold shadow-[0_4px_20px_rgba(234,88,12,0.4)] hover:shadow-[0_4px_25px_rgba(234,88,12,0.6)] hover:bg-orange-500 transition-all flex items-center gap-2"
              >
                Explore Courses
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
             <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full"></div>
             <img 
               src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="Upskilling" 
               className="relative rounded-2xl shadow-2xl border border-slate-800"
             />
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-orange-500"
             >
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                      <Target size={24} />
                   </div>
                   <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Goal Reached</p>
                      <p className="text-lg font-bold text-slate-900">Top 1% Skills</p>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Accelerate Your Growth</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-orange-500 group"
              >
                <div className="mb-6 p-4 bg-orange-50 rounded-2xl inline-block group-hover:bg-orange-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer className="bg-slate-900 py-10 text-center text-slate-500 border-t border-slate-800">
          <p className="text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            <Award size={16} className="text-orange-500" /> By Certification Board
          </p>
      </footer>
    </div>
  );
}
