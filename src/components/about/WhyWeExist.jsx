import useScrollAnimation from "../common/useScrollAnimation";
import { whyChooseUs, ourValues } from "../../data/aboutData";

export default function WhyWeExist() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-[#061A2F] border-y-[12px] border-yellow-500">
      <div className="max-w-7xl mx-auto px-4">

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 animate-scroll ${visible ? "show" : ""}`}
        >
          {/* Why Choose Us */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit">
              Why Choose Us
            </h3>
            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-colors">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h4>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit">
              Our Values
            </h3>
            <div className="space-y-6">
              {ourValues.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h4>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
