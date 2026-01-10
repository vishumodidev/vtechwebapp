import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../../assets/images/hero.png";
import hero2 from "../../assets/images/hero.png";
import hero3 from "../../assets/images/hero.png";

const slides = [
  {
    badge: "Real-Time Training & Placement Support",
    titleLine1: "Industry-aligned programs",
    titleLine2: "hands-on projects,",
    highlight: "Amazing",
    description: "Personalized mentorship for engineering graduates.",
    image: hero1,
  },
  {
    badge: "Hire-Train-Deploy Programs",
    titleLine1: "Job-ready talent",
    titleLine2: "built for",
    highlight: "Enterprises",
    description: "Customized training aligned with real industry needs.",
    image: hero2,
  },
  {
    badge: "Finishing School for Engineers",
    titleLine1: "Transform graduates",
    titleLine2: "into",
    highlight: "Professionals",
    description: "Skill-focused learning with placement assistance.",
    image: hero3,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FDF1EB] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* ===== LEFT CONTENT ===== */}
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {slides[current].badge}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="block">
                {slides[current].titleLine1}
              </span>
              <span className="block">
                {slides[current].titleLine2}{" "}
                <span className="text-orange-500">
                  {slides[current].highlight}
                </span>
              </span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-lg">
              {slides[current].description}
            </p>

            <div className="mt-8">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-teal-500/30">
                Contact Us
              </button>
            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="relative flex justify-center">
            <motion.img
              src={slides[current].image}
              alt="Hero Slide"
              className="w-full max-w-md relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Decorative Shapes */}
            <div className="absolute -z-10 w-64 h-64 bg-teal-500 rounded-xl rotate-12 top-10 right-10 opacity-90"></div>
            <div className="absolute -z-20 w-72 h-72 bg-orange-400 rounded-xl -rotate-12 top-16 right-16 opacity-80"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ===== DOT CONTROLS ===== */}
      <div className="flex justify-center gap-2 pb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              current === index ? "bg-teal-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
