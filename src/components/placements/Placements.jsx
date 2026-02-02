import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../common/useScrollAnimation";
import { ArrowRight } from "lucide-react";

// Logos
import accenture from "../../assets/images/clogos/accenture.png";
import deloitte from "../../assets/images/clogos/deloitte.png";
import ey from "../../assets/images/clogos/ey.png";
import grantthornton from "../../assets/images/clogos/grantthornton.png";
import jpmorgan from "../../assets/images/clogos/jpmorgan.avif";
import kpmg from "../../assets/images/clogos/kpmg.png";
import pwc from "../../assets/images/clogos/pwc.png";
import rsm from "../../assets/images/clogos/rsm.png";

export default function Placements() {
  const navigate = useNavigate();
  const [headingRef, headingVisible] = useScrollAnimation();

  const logos = [
    { name: "JPMorgan Chase", src: jpmorgan },
    { name: "Deloitte", src: deloitte },
    { name: "EY", src: ey },
    { name: "KPMG", src: kpmg },
    { name: "PWC", src: pwc },
    { name: "Accenture", src: accenture },
    { name: "Grant Thornton", src: grantthornton },
    { name: "RSM", src: rsm },
  ];

  // Duplicate for seamless loop
  const sliderLogos = [...logos, ...logos];

  return (
    <section
      id="placements"
      className="bg-[#061A2F] py-20 md:py-32 overflow-hidden border-y-[12px] border-yellow-500"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ================= HEADING ================= */}
        <div
          ref={headingRef}
          className={`mb-16 animate-scroll ${
            headingVisible ? "show" : ""
          }`}
        >
          <h2
            className="
              text-4xl md:text-6xl font-extrabold mb-6
              bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent
              w-fit mx-auto
            "
          >
            Placements
          </h2>
        </div>

        {/* ================= LOGO SLIDER ================= */}
        <div className="mb-20 relative w-full overflow-hidden mask-gradient-x">
            {/* Gradient Masks for fade effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#061A2F] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#061A2F] to-transparent z-10"></div>

            <div className="animate-marquee flex gap-12 md:gap-20 items-center">
                {sliderLogos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-32 md:w-40 opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                        <img 
                          src={logo.src} 
                          alt={logo.name} 
                          className="w-full h-auto object-contain max-h-16"
                        />
                    </div>
                ))}
            </div>
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => navigate("/training-placements")}
            className="
              group
              inline-flex items-center gap-2
              px-8 py-4
              rounded-full
              font-bold text-white
              bg-blue-600 hover:bg-blue-500
              shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]
              transition-all duration-300
            "
          >
            Explore Placements
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
