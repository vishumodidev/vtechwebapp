import useScrollAnimation from "../common/useScrollAnimation";

export default function AllPlacements() {
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
    {
      name: "Amit Singh",
      company: "Cognizant",
      role: "Data Analyst",
      package: "₹6.0 LPA",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Priya Nair",
      company: "HCL Technologies",
      role: "DevOps Engineer",
      package: "₹7.5 LPA",
      image: "https://i.pravatar.cc/100?img=6",
    },
    {
      name: "Vikram Joshi",
      company: "IBM",
      role: "AI Specialist",
      package: "₹9.0 LPA",
      image: "https://i.pravatar.cc/100?img=7",
    },
    {
      name: "Sneha Reddy",
      company: "Capgemini",
      role: "Cybersecurity Analyst",
      package: "₹6.8 LPA",
      image: "https://i.pravatar.cc/100?img=8",
    },

  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div
          ref={headingRef}
          className={`mb-12 text-center animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
          <span className="inline-flex px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold">
            All Placements
          </span>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Complete list of students placed in top IT companies.
          </p>
        </div>

        {/* ALL PLACEMENT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((item, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white rounded-2xl p-6 text-center shadow-sm
                hover:shadow-lg transition-all animate-scroll ${
                  cardVisible ? "show" : ""
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-teal-100 object-cover"
                  />
                </div>

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

      </div>
    </section>
  );
}
