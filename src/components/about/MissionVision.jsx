import useScrollAnimation from "../common/useScrollAnimation";
import { missionVision } from "../../data/aboutData";

export default function MissionVision() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-blue-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Scroll animation wrapper */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 animate-scroll ${
            visible ? "show" : ""
          }`}
        >
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Mission
            </h3>
            <p className="text-white/90 leading-relaxed">
              {missionVision.mission}
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Vision
            </h3>
            <p className="text-white/90 leading-relaxed">
              {missionVision.vision}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
