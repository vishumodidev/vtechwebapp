import { whyWeExist } from "../../data/aboutData";

export default function WhyWeExist() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 animate-fadeIn">
          Why We Exist
        </h3>
        <ul className="space-y-3">
          {whyWeExist.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-gray-700 animate-slideUp"
            >
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
