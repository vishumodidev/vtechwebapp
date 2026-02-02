import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import useScrollAnimation from "../components/common/useScrollAnimation";

export default function TrainingPlacements() {
  const navigate = useNavigate();
  const [sectionRef, sectionVisible] = useScrollAnimation();

  const highlights = [
    {
      title: "Industry-Ready Programs",
      desc: "Curriculum designed by experts to align with current corporate needs.",
    },
    {
      title: "Resume Building & Interview Prep",
      desc: "Professional guidance to craft the perfect resume and ace interviews.",
    },
    {
      title: "Technical + Soft Skills",
      desc: "Holistic development ensuring you are technically sound and culturally fit.",
    },
    {
      title: "Campus-to-Corporate Transition",
      desc: "Smooth transition support to help you adapt to professional environments.",
    },
  ];

  return (
    <div className="bg-[#061A2F] min-h-screen pt-20 text-white selection:bg-blue-500 selection:text-white border-y-[12px] border-yellow-500">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit mx-auto pb-2">
            Training & Placements
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            From Campus to Career — We Make You Job-Ready.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Training Session" 
              className="relative rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-700"
            />
          </div>

          {/* Points Grid */}
          <div ref={sectionRef} className={`space-y-8 animate-scroll ${sectionVisible ? "show" : ""}`}>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
              Why Choose Our Training?
            </h2>
            <div className="grid gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-slate-700">
                  <div className="flex-shrink-0 text-blue-400 mt-1">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
                By VTech Placement Team
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
              >
                Enroll Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-slate-900/50 py-16 text-center text-white border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-4">Ready to launch your career?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of students who have successfully transitioned into top corporate roles.
        </p>
        <button
           onClick={() => navigate("/contact")}
           className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-200 transition-colors"
        >
          Contact Us Today
        </button>
      </section>
    </div>
  );
}
