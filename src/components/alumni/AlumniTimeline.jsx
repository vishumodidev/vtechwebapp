const milestones = [
    { year: "2018", text: "First batch placed in TCS" },
    { year: "2020", text: "Alumni-led startup in IT staffing" },
    { year: "2023", text: "Alumni delivering corporate training at Accenture" },
    { year: "2025", text: "Alumni network crosses 1,000 members" },
  ];
  
  export default function AlumniTimeline() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit mx-auto">
            Alumni Achievements
          </h2>
  
          <div className="space-y-6">
            {milestones.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-teal-600 font-bold w-16">
                  {item.year}
                </span>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
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
            View More Achievements →
          </button>
        </div>
      </section>
    );
  }
  