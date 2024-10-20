import { motion } from "framer-motion";
import { useState } from "react";

const phrases = ['"bon appétit"', '"dobrú chuť"', '"смачного"'];

export default function TransitionOverlay() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[1]);

  const getRandomPhrase = () => {
    const index = Math.round(Math.random() * phrases.length);
    return phrases[index];
  };

  return (
    <motion.div
      className="transition-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      onAnimationComplete={() => setCurrentPhrase(getRandomPhrase())}>
      {currentPhrase}
    </motion.div>
  );
}
