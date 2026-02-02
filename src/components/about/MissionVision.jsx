import useScrollAnimation from "../common/useScrollAnimation";
import { missionVision } from "../../data/aboutData";

export default function MissionVision() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-[#061A2F] overflow-hidden border-y-[12px] border-yellow-500">
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
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit">
              Mission
            </h3>
            <p className="text-white/90 leading-relaxed">
              {missionVision.mission}
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit">
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
