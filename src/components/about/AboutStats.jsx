import CountUp from "react-countup";
import useScrollAnimation from "../common/useScrollAnimation";

export default function AboutStats() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="about" className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* BADGE */}
        <div className="mt-14 mb-8">
          <button
            className="
              inline-flex items-center justify-center
              px-8 py-3
              rounded-full
              bg-gradient-to-r from-teal-600 to-teal-500
              text-white font-semibold
              shadow-[0_10px_30px_rgba(13,148,136,0.35)]
              hover:shadow-[0_15px_40px_rgba(13,148,136,0.45)]
              transition-all duration-300 ease-out
            "
          >
            About Us
          </button>
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

          {/* STATS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">

            {/* STAT 1 */}
            <div className="flex flex-col items-center px-10">
              <h3 className="text-4xl font-extrabold text-gray-900">
                {visible && <CountUp end={25} duration={2} />}+
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Years of Learning <br /> Legacy
              </p>
            </div>

            <div className="hidden md:block h-16 w-px bg-gray-300" />

            {/* STAT 2 */}
            <div className="flex flex-col items-center px-10">
              <h3 className="text-4xl font-extrabold text-gray-900">
                {visible && <CountUp end={56} duration={2} />}k
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
              Number Of students Enrolled
              <br /> 
              </p>
            </div>
            <div className="flex flex-col items-center px-10">
              <h3 className="text-4xl font-extrabold text-gray-900">
                {visible && <CountUp end={56} duration={2} />}k
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
              Number Of students Enrolled
              <br /> 
              </p>
            </div>
            <div className="flex flex-col items-center px-10">
              <h3 className="text-4xl font-extrabold text-gray-900">
                {visible && <CountUp end={4} duration={2} />}LPA
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
              Average CTC
              <br /> 
              </p>
            </div>

            <div className="hidden md:block h-16 w-px bg-gray-300" />

            {/* STAT 3 */}
            <div className="flex flex-col items-center px-10">
              <h3 className="text-4xl font-extrabold text-gray-900">
                {visible && <CountUp end={12} duration={2} />}LPA
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Highest Package   <br /> 
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
