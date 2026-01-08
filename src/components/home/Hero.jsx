import heroImage from "../../assets/images/hero.png"; 
// replace with your actual image path
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#FDF1EB]">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
      {/* BADGE */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"
      >
        Launch Your Tech Career With Real-Time Training & Guaranteed Placement Support
      </motion.span>

      {/* HEADING */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="block"
        >
          Industry-aligned programs
        </motion.span>

        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="block"
        >
          hands-on projects,{" "}
          <motion.span
            className="text-orange-500 inline-block"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Amazing
          </motion.span>
        </motion.span>
      </motion.h1>

      {/* PARAGRAPH */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-5 text-gray-600 max-w-lg"
      >
        personalized mentorship for engineering graduates.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 flex items-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-teal-500/30"
        >
          Contact Us
        </motion.button>

        {/* <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 text-gray-700 font-medium"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
            ▶
          </span>
          How it Works
        </motion.button> */}
      </motion.div>
    </div>
  

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
        <motion.img
  src={heroImage}
  alt="Hero"
  className="w-full max-w-md"
  animate={{ y: [0, -20, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

  <div className="absolute -z-10 w-64 h-64 bg-teal-500 rounded-xl rotate-12 top-10 right-10 opacity-90"></div>
  <div className="absolute -z-20 w-72 h-72 bg-orange-400 rounded-xl -rotate-12 top-16 right-16 opacity-80"></div>
</div>


      </div>
    </section>
  );
}
