import useScrollAnimation from "../common/useScrollAnimation";
import { leadershipMessage } from "../../data/aboutData";

export default function LeadershipMessage() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="bg-gray-50 py-14 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Scroll animation wrapper */}
        <div
          ref={ref}
          className={`animate-scroll ${visible ? "show" : ""}`}
        >
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Leadership Message
          </h3>

          {/* Quote */}
          <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
            “{leadershipMessage}”
          </p>
        </div>

      </div>
    </section>
  );
}
