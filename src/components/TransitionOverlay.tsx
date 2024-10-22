import { motion } from "framer-motion";

export default function TransitionOverlay() {
  return (
    <motion.div
      className="transition-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      nutrisave
    </motion.div>
  );
}
