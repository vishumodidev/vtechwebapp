import useScrollAnimation from "../common/useScrollAnimation";
import { ArrowRight, Briefcase, Users, LineChart, ShieldCheck } from "lucide-react";

import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link

export default function Services() {
  const navigate = useNavigate(); // Hook

  const services = [
    {
      title: "Training & Placements",
      tagline: "From Campus to Career — We Make You Job-Ready.",
      icon: <Briefcase size={40} className="text-blue-600" />,
      bg: "bg-blue-50",
      accent: "text-blue-600",
      buttonBg: "bg-blue-600",
      path: "/training-placements", // Linked Path
      points: [
        "Industry-ready programs",
        "Resume building & interview prep",
        "Technical + soft skills",
        "Campus-to-corporate transition",
      ],
      creator: "VTech Placement Team",
    },
    // ... (other services remain unchanged)
    {
      title: "Corporate Training",
      tagline: "Empowering Teams, Elevating Performance.",
      icon: <LineChart size={40} className="text-purple-600" />,
      bg: "bg-purple-50",
      accent: "text-purple-600",
      buttonBg: "bg-purple-600",
      path: "/corporate-training",
      points: [
        "Customized organizational modules",
        "Employee productivity booster",
        "On-site, online & hybrid delivery",
        "AI, analytics & digital skills",
      ],
      creator: "Corporate L&D Experts",
    },
    {
      title: "Staffing Solutions",
      tagline: "Right Talent, Right Time.",
      icon: <Users size={40} className="text-pink-600" />,
      bg: "bg-pink-50",
      accent: "text-pink-600",
      buttonBg: "bg-pink-600",
      path: "/staffing-solutions",
      points: [
        "Pre-screened qualified candidates",
        "Contract & permanent staffing",
        "End-to-end recruitment support",
        "Expertise in niche roles",
      ],
      creator: "HR Solutions Group",
    },
    {
      title: "Upskilling Programs",
      tagline: "Stay Ahead, Stay Relevant.",
      icon: <ShieldCheck size={40} className="text-orange-600" />,
      bg: "bg-orange-50",
      accent: "text-orange-600",
      buttonBg: "bg-orange-600",
      path: "/upskilling-programs",
      points: [
        "Short-term courses & certifications",
        "Career advancement training",
        "Tech + soft skills balance",
        "Adaptability for fast roles",
      ],
      creator: "Certification Board",
    },
  ];

  // Scroll animation for heading
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* ===== Heading ===== */}
        <div
          ref={headingRef}
          className={`text-center mb-16 animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
          <div className="mb-6">
             <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide uppercase">
                Our Expertise
             </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Services We Offer
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            From training and placements to corporate learning and staffing,
            VTech delivers end-to-end workforce solutions.
          </p>
        </div>

        {/* ===== Service Cards (Grid) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:shadow-lg animate-scroll ${
                  service.bg
                } ${cardVisible ? "show" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  
                  {/* Left: Illustration / Icon Area */}
                  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      {/* Mobile Arrow (visible here for layout balance usually, but we keep it below for consistency?)
                          Actually, let's put the arrow absolute or flexed. 
                          The design had arrow bottom right. Let's keep structure simple. */}
                    </div>
                    
                    <p className="text-base text-slate-600 font-medium mb-4 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Restored Points */}
                    <ul className="space-y-1.5 mb-4">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                           <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.buttonBg}`}></span>
                           <span className="opacity-90">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto pt-2">
                      <p className={`text-xs font-bold tracking-wide uppercase ${service.accent}`}>
                        By {service.creator}
                      </p>
                      
                      {service.path ? (
                        <Link
                          to={service.path}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[-45deg] ${service.buttonBg}`}
                          aria-label={`View ${service.title}`}
                        >
                          <ArrowRight size={20} />
                        </Link>
                      ) : (
                        <button 
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[-45deg] ${service.buttonBg}`}
                          aria-label={`View ${service.title}`}
                        >
                          <ArrowRight size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
