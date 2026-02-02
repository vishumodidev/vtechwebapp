import { motion } from "framer-motion";
import { ArrowRight, UserCheck, Users, Search, Award, Briefcase, Network } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StaffingSolutions() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Pre-Screened Qualified Candidates",
      desc: "Access a curated pool of top-tier professionals vetted for skills, culture fit, and reliability.",
      icon: <UserCheck className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Contract & Permanent Staffing",
      desc: "Flexible hiring models to scale your workforce up or down based on business demands.",
      icon: <Briefcase className="w-8 h-8 text-rose-500" />,
    },
    {
      title: "End-to-End Recruitment Support",
      desc: "We handle everything from sourcing and interviewing to onboarding and compliance.",
      icon: <Search className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Expertise in Niche Roles",
      desc: "Specialized sourcing for hard-to-fill positions in tech, engineering, and leadership.",
      icon: <Award className="w-8 h-8 text-pink-600" />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 selection:bg-pink-100 selection:text-pink-900">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 opacity-50 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              <Network size={16} /> Talent & Recruitment
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-none">
              Right Talent. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500">
                Right Time.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              We bridge the gap between ambition and opportunity, connecting world-class organizations with exceptional talent.
            </p>
            <div className="flex flex-wrap gap-4">
               <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition-all flex items-center gap-2"
              >
                Find Talent
                <ArrowRight size={18} />
              </motion.button>
              <button 
                 onClick={() => navigate("/contact")}
                 className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-pink-500 hover:text-pink-600 transition-colors"
              >
                Looking for a Job?
              </button>
            </div>
          </motion.div>

          {/* Visual abstract representation of connection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
             <img 
               src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="Team Meeting"
               className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-1">Success Stories</p>
                <div className="flex items-center gap-2">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                          {i === 3 ? "2k+" : ""}
                        </div>
                      ))}
                   </div>
                   <span className="font-bold">Placements this year</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Staffing Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Whether you need temporary support or long-term leadership, we have the network and expertise to deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400">
          <p className="text-sm font-medium tracking-widest uppercase">
            By HR Solutions Group
          </p>
      </footer>
    </div>
  );
}
