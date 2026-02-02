import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, Globe, BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CorporateTraining() {
  const navigate = useNavigate();

  const modules = [
    {
      title: "Customized Organizational Modules",
      desc: "Tailored learning paths designed to align with your specific business goals and culture.",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Employee Productivity Booster",
      desc: "Strategies and tools to enhance efficiency, time management, and output quality.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "On-site, Online & Hybrid Delivery",
      desc: "Flexible training modes to suit your team's location and schedule preferences.",
      icon: <Globe className="w-8 h-8 text-green-400" />,
    },
    {
      title: "AI, Analytics & Digital Skills",
      desc: "Future-proof your workforce with cutting-edge skills in data and artificial intelligence.",
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#061A2F] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white pt-20 border-y-[12px] border-yellow-500">
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Corporate Learning Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Empowering Teams, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500">
                Elevating Performance.
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Unlock the full potential of your workforce with world-class training programs designed for the modern enterprise.
            </p>
            
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="px-6 py-20 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {module.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics / Trust Section */}
      <section className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16 text-slate-200">Trusted by Forward-Thinking Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos */}
                {['TechCorp', 'InnovateX', 'GlobalSystems', 'FutureWorks'].map((name, i) => (
                    <div key={i} className="flex items-center justify-center h-16 border border-slate-800 rounded-xl bg-slate-900/30">
                        <span className="font-bold text-xl font-mono text-slate-500">{name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer className="py-12 text-center border-t border-slate-900 bg-slate-950">
        <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
          By Corporate L&D Experts
        </p>
      </footer>
    </div>
  );
}
