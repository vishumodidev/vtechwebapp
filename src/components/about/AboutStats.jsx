import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function AboutStats() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* BADGE */}
        <div className="mt-14">
  <button
    className="
      inline-flex items-center justify-center
      px-8 py-3
      rounded-full
      bg-gradient-to-r from-teal-600 to-teal-500
      text-white font-semibold
      shadow-[0_10px_30px_rgba(13,148,136,0.35)]
      hover:shadow-[0_15px_40px_rgba(13,148,136,0.45)]
      hover:scale-[1.03]
      active:scale-[0.97]
      transition-all duration-300 ease-out
    "
  >
    About Us
  </button>
</div>


        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-14"
        >
          We are passionate about empowering learners worldwide with
          high-quality, accessible & engaging education. Our mission is offering
          a diverse range of courses.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0"
        >

          {/* STAT 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center px-10"
          >
            <h3 className="text-4xl font-extrabold text-gray-900">
              <CountUp end={25} duration={2} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Years of Learning <br /> Education Experience
            </p>
          </motion.div>

          <div className="hidden md:block h-16 w-px bg-gray-300" />

          {/* STAT 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center px-10"
          >
            <h3 className="text-4xl font-extrabold text-gray-900">
              <CountUp end={56} duration={2} />k
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Students Enrolled in <br /> LMSZONE Courses
            </p>
          </motion.div>

          <div className="hidden md:block h-16 w-px bg-gray-300" />

          {/* STAT 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center px-10"
          >
            <h3 className="text-4xl font-extrabold text-gray-900">
              <CountUp end={170} duration={2} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Experienced Teacher’s <br /> Service
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
