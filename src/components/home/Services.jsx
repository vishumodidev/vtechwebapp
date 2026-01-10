import useScrollAnimation from "../common/useScrollAnimation";

export default function Services() {
  const services = [
    {
      title: "Career-Oriented Training Programs",
      icon: "🎓",
      desc:
        "Specialized programs designed to bridge the gap between academics and industry.",
      points: [
        "Java, Python, Cloud, AI, DevOps",
        "Soft skills & interview preparation",
        "Live projects & internships",
      ],
    },
    {
      title: "Hire-Train-Deploy Model",
      icon: "🚀",
      desc:
        "Our flagship model delivering job-ready talent to companies.",
      points: [
        "Hire promising candidates",
        "Customized industry training",
        "Direct deployment to projects",
      ],
    },
    {
      title: "Finishing School for Engineers",
      icon: "🧠",
      desc:
        "We prepare graduates to be professional, confident, and employable.",
      points: [
        "Personal mentorship",
        "Industry-aligned curriculum",
        "Placement-ready preparation",
      ],
    },
    {
      title: "Corporate Talent Solutions",
      icon: "🤝",
      desc:
        "Scalable workforce solutions for modern enterprises.",
      points: [
        "Pre-trained talent acquisition",
        "Customized training modules",
        "Upskilling & reskilling teams",
      ],
    },
    {
      title: "Pan-India Placement Services",
      icon: "🌐",
      desc:
        "A strong placement ecosystem across India.",
      points: [
        "12,000+ student placements",
        "IT firms & startup partnerships",
        "Transparent placement tracking",
      ],
    },
  ];

  // Scroll animation for heading
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section className="bg-[#FDF1EB] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div
          ref={headingRef}
          className={`text-center mb-14 animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-600">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Empowering Careers. Enabling Businesses.
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            From skill development to large-scale hiring, VTech delivers
            outcome-driven solutions for students and enterprises.
          </p>
        </div>

        {/* ===== Service Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 animate-scroll ${
                  cardVisible ? "show" : ""
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-500 font-semibold">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
