import { journey } from "../../data/aboutData";

export default function JourneyTimeline() {
  return (
    <section className="bg-white-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <h3 className="text-3xl font-bold text-gray-900 mb-12 fade-in-soft">
          Our Journey
        </h3>

        <div className="relative border-l-2 border-teal-500 pl-4 space-y-5">
          {journey.map((item, index) => (
            <div
              key={index}
              className="fade-in-soft"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="absolute -left-[9px] w-4 h-4 bg-teal-500 rounded-full"></span>

              <h4 className="text-lg font-semibold text-gray-900">
                {item.year}
              </h4>
              <p className="text-gray-600 mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
