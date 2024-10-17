export const pageVariants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)", // Start as a tiny circle in the center
  },
  animate: {
    clipPath: "circle(150% at 50% 50%)", // Expand to cover the entire screen
    transition: {
      duration: 0.8, // Duration of entry
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "circle(0% at 50% 50%)", // Shrinks back to the center
    transition: {
      duration: 0.8, // Duration of exit
      ease: "easeInOut",
    },
  },
};
