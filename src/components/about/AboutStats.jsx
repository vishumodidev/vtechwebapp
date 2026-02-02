import CountUp from "react-countup";
import useScrollAnimation from "../common/useScrollAnimation";

export default function AboutStats() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="about" className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* BADGE */}
        <div className="mt-14 mb-8">
            <span
            className="
              text-4xl md:text-5xl font-extrabold
              bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent
              pb-2
            "
          >
            About Us
          </span>
        </div>

        {/* DESCRIPTION */}
        <div
          ref={ref}
          className={`animate-scroll ${visible ? "show" : ""}`}
        >
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-14">
            We are passionate about empowering learners worldwide with
            high-quality, accessible & engaging education. Our mission is
            offering a diverse range of courses.
          </p>

          {/* OUR STORY */}
          <div className="max-w-4xl mx-auto text-left mt-12 pl-4 md:pl-0">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">Our Story</h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg leading-relaxed marker:text-gray-900">
              <li>
                <span className="font-bold text-gray-900">Who we are: </span> 
                VTech Integrated Solutions is a trusted career accelerator for engineering graduates across India. Since 2000, we’ve been shaping futures by combining technical training with real-world industry exposure.
              </li>
              <li>
                <span className="font-bold text-gray-900">What we do: </span>
                We act as a <i>Finishing School</i>, bridging the gap between academic learning and corporate expectations. Our programs are designed to make students job-ready, confident, and future-focused.
              </li>
              <li>
                <span className="font-bold text-gray-900">Our impact: </span>
                Thousands of graduates have launched successful careers through our mentorship, even during challenging times like the pandemic.
              </li>
            </ul>

          </div>

          {/* ACHIEVEMENTS */}
          <div className="max-w-4xl mx-auto text-left mt-12 pl-4 md:pl-0">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">Achievements</h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg leading-relaxed marker:text-gray-900">
              <li>
                <span className="font-bold text-gray-900">20+ years of service</span> in training and placements.
              </li>
              <li>
                <span className="font-bold text-gray-900">Thousands of successful alumni</span> working in top IT companies worldwide.
              </li>
              <li>
                <span className="font-bold text-gray-900">Resilience during COVID-19,</span> ensuring uninterrupted placements and support.
              </li>
              <li>
                <span className="font-bold text-gray-900">Recognition</span> as one of Bangalore’s leading training and placement institutes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
