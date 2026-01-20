import useScrollAnimation from "../common/useScrollAnimation";
import { journey } from "../../data/aboutData";

export default function JourneyTimeline() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div
          ref={ref}
          className={`animate-scroll ${visible ? "show" : ""}`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Our Journey
          </h3>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-teal-500 pl-8 space-y-10">

            {journey.map((item, index) => (
              <div
                key={index}
                className={`relative animate-scroll ${
                  visible ? "show" : ""
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Bullet */}
                <span
                  className="
                    absolute -left-[17px] top-1
                    w-4 h-4
                    bg-teal-500
                    rounded-full
                    border-4 border-white
                  "
                ></span>

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.year}
                </h4>

                <p className="text-gray-600 mt-1 leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
