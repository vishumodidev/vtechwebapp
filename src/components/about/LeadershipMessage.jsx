import { motion } from "framer-motion";
import { leadershipMessage } from "../../data/aboutData";

export default function LeadershipMessage() {
  return (
    <section className="bg-gray-50 py-14 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-4 text-gray-900"
        >
          Leadership Message
        </motion.h3>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 italic text-lg leading-relaxed"
        >
          “{leadershipMessage}”
        </motion.p>
      </motion.div>
    </section>
  );
}
