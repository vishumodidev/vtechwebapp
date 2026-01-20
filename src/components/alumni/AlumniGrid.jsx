import useScrollAnimation from "../common/useScrollAnimation";

const alumni = [
  {
    name: "Anitha R.",
    role: "Software Engineer",
    company: "Infosys",
    quote:
      "The hands-on training at VTech gave me the confidence to crack my first interview.",
    image: "https://ui-avatars.com/api/?name=Anitha+R&background=0D8ABC&color=fff",
  },
  {
    name: "Rahul K.",
    role: "Team Lead",
    company: "IT Services Firm",
    quote:
      "VTech’s corporate training helped me transition from fresher to team lead.",
    image: "https://ui-avatars.com/api/?name=Rahul+K&background=6B21A8&color=fff",
  },
  {
    name: "Sneha P.",
    role: "Data Analyst",
    company: "Startup",
    quote:
      "Mock interviews and soft skills sessions were a game changer for my career.",
    image: "https://ui-avatars.com/api/?name=Sneha+P&background=059669&color=fff",
  },
];

export default function AlumniGrid() {
  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className={`
        py-20 bg-gray-50
        transition-all duration-1000 ease-out
        ${sectionVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {alumni.map((alum, index) => {
          const [cardRef, visible] = useScrollAnimation();

          return (
            <div
              key={index}
              ref={cardRef}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`
                transform transition-all duration-700 ease-out
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"}
              `}
            >
              <div className="text-center bg-white rounded-2xl p-8 shadow-md h-full">
                
                {/* Image with blob */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-purple-600 rounded-[40%] -z-10"></div>
                  <img
                    src={alum.image}
                    alt={alum.name}
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {alum.name}
                </h3>

                <p className="text-sm text-teal-600 font-medium">
                  {alum.role} @ {alum.company}
                </p>

                <p className="mt-3 text-sm text-gray-600 italic">
                  “{alum.quote}”
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
