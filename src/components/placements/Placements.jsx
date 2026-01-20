import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../common/useScrollAnimation";

export default function Placements() {
  const navigate = useNavigate();

  const placements = [
    {
      name: "Rahul Sharma",
      company: "Infosys",
      role: "Software Engineer",
      package: "₹6.5 LPA",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Ananya Verma",
      company: "TCS",
      role: "Full Stack Developer",
      package: "₹7.2 LPA",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Suresh Kumar",
      company: "Wipro",
      role: "Cloud Engineer",
      package: "₹8.0 LPA",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Neha Patel",
      company: "Accenture",
      role: "QA Engineer",
      package: "₹5.8 LPA",
      image: "https://i.pravatar.cc/100?img=4",
    },
  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section
      id="placements"
      className="bg-gray-50 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADING ================= */}
        <div
          ref={headingRef}
          className={`mb-12 text-center animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
          <span
            className="
              inline-flex items-center justify-center
              px-8 py-3
              rounded-full
              bg-gradient-to-r from-teal-600 to-teal-500
              text-white font-semibold
              shadow-[0_10px_30px_rgba(13,148,136,0.35)]
            "
          >
            Placements
          </span>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Our students are placed in top IT companies with competitive
            salary packages.
          </p>
        </div>

        {/* ================= PLACEMENT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((item, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white rounded-2xl p-6 text-center shadow-sm
                  hover:shadow-lg transition-all duration-300
                  animate-scroll ${cardVisible ? "show" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-teal-100 object-cover"
                  />
                </div>

                {/* Details */}
                <h3 className="text-lg font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.role}
                </p>

                <p className="text-sm font-medium text-teal-600 mt-2">
                  {item.company}
                </p>

                <div className="mt-4 inline-block px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-600">
                  {item.package}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= VIEW MORE ================= */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigate("/placements")}
            className="
              inline-flex items-center gap-2
              px-8 py-3
              rounded-full
              font-semibold text-white
              bg-teal-600 hover:bg-teal-700
              transition
            "
          >
            View More Placements →
          </button>
        </div>

      </div>
    </section>
  );
}
