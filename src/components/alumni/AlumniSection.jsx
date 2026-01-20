import useScrollAnimation from "../hooks/useScrollAnimation";

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

export default function AlumniSection() {
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
      <h2 className="text-3xl font-bold text-center mb-14 text-gray-900">
        Alumni Success Stories
      </h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {alumni.map((alum, index) => (
          <AlumniCard key={index} alum={alum} index={index} />
        ))}
      </div>
    </section>
  );
}
