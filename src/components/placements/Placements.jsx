import useScrollAnimation from "../common/useScrollAnimation";

export default function Placements() {
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
      name: "Amit Joshi",
      company: "Capgemini",
      role: "Java Developer",
      package: "₹6.0 LPA",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Priya Singh",
      company: "Cognizant",
      role: "UI Developer",
      package: "₹7.5 LPA",
      image: "https://i.pravatar.cc/100?img=6",
    },
    {
      name: "Vikas Mehta",
      company: "HCL",
      role: "DevOps Engineer",
      package: "₹8.4 LPA",
      image: "https://i.pravatar.cc/100?img=7",
    },
    {
      name: "Sneha Rao",
      company: "IBM",
      role: "Data Analyst",
      package: "₹9.0 LPA",
      image: "https://i.pravatar.cc/100?img=8",
    },
  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-14 animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold rounded-full bg-teal-100 text-teal-700">
            Placements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Successful Placement Stories
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Real students. Real companies. Real career outcomes.
          </p>
        </div>

        {/* Placement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((item, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 animate-scroll ${
                  cardVisible ? "show" : ""
                }`}
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

      </div>
    </section>
  );
}
