import { motion } from "framer-motion";
import { missionVision } from "../../data/aboutData";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Mission */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {missionVision.mission}
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {missionVision.vision}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
