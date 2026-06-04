import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 md:px-20 py-16"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;