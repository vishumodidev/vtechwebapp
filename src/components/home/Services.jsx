import useScrollAnimation from "../common/useScrollAnimation";

export default function Services() {
  const services = [
    {
      title: "Training & Placements",
      tagline: "From Campus to Career — We Make You Job-Ready.",
      icon: "🎓",
      points: [
        "Industry-ready programs aligned with corporate needs",
        "Resume building & interview preparation",
        "Technical + soft skills development",
        "Campus-to-corporate transition support",
      ],
      cta: "Start Your Journey →",
    },
    {
      title: "Corporate Training",
      tagline: "Empowering Teams, Elevating Performance.",
      icon: "🏢",
      points: [
        "Customized modules for organizations",
        "Employee productivity & collaboration",
        "On-site, online & hybrid delivery",
        "AI, analytics, agile & digital skills",
      ],
      cta: "Request a Proposal →",
    },
    {
      title: "Staffing Solutions",
      tagline: "Right Talent, Right Time.",
      icon: "🤝",
      points: [
        "Pre-screened qualified candidates",
        "Contract & permanent staffing",
        "End-to-end recruitment support",
        "Expertise in niche roles",
      ],
      cta: "Hire With Us →",
    },
    {
      title: "Upskilling Programs",
      tagline: "Stay Ahead, Stay Relevant.",
      icon: "📈",
      points: [
        "Short-term courses & certifications",
        "Career advancement focused training",
        "Technology + soft skills balance",
        "Adaptability for fast-changing roles",
      ],
      cta: "Explore Courses →",
    },
  ];

  // Scroll animation for heading
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="services" className="bg-blue-900 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div
          ref={headingRef}
          className={`text-center mb-14 animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
         <div className="mt-14 mb-8">
          <button
            className="
              inline-flex items-center justify-center
              px-8 py-3
              rounded-full
              bg-gradient-to-r from-teal-600 to-teal-500
              text-white font-semibold
              shadow-[0_10px_30px_rgba(13,148,136,0.35)]
              hover:shadow-[0_15px_40px_rgba(13,148,136,0.45)]
              transition-all duration-300 ease-out
            "
          >
            Our Services
          </button>
        </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Empowering Careers. Enabling Businesses.
          </h2>

          <p className="max-w-3xl mx-auto text-white">
            From training and placements to corporate learning and staffing,
            VTech delivers end-to-end workforce solutions.
          </p>
        </div>

        {/* ===== Service Cards (2x2 Desktop) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-scroll ${
                  cardVisible ? "show" : ""
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-semibold text-teal-600 mb-4">
                  {service.tagline}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-500 font-semibold">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="
                  inline-flex items-center
                  text-sm font-semibold
                  text-white
                  px-6 py-3
                  rounded-full
                  bg-gradient-to-r from-teal-600 to-teal-500
                  shadow-md hover:shadow-lg
                  hover:scale-[1.03]
                  transition-all
                ">
                  {service.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
