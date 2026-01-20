import useScrollAnimation from "../common/useScrollAnimation";
import { whyWeExist } from "../../data/aboutData";

export default function WhyWeExist() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-4xl mx-auto px-4">

        {/* Scroll animation wrapper */}
        <div
          ref={ref}
          className={`animate-scroll ${visible ? "show" : ""}`}
        >
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white/90">
            Why We Exist
          </h3>

          {/* List */}
          <ul className="space-y-3">
            {whyWeExist.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-white/90"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <span className="text-teal-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
