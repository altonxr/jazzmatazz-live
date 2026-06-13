// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Helper to create reduced motion variants
const withReducedMotion = (animation) => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
    };
  }
  return animation;
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: prefersReducedMotion() ? 0 : 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: prefersReducedMotion() ? 0.3 : 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: prefersReducedMotion() ? 0 : -50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: prefersReducedMotion() ? 0.3 : 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: prefersReducedMotion() ? 0 : -60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: prefersReducedMotion() ? 0.3 : 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: prefersReducedMotion() ? 0 : 60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: prefersReducedMotion() ? 0.3 : 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeScale = {
  hidden: {
    opacity: 0,
    scale: prefersReducedMotion() ? 1 : 0.94,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: prefersReducedMotion() ? 0.3 : 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.12,
      delayChildren: prefersReducedMotion() ? 0 : 0.08,
    },
  },
};

export const cinematicReveal = {
  hidden: {
    opacity: 0,
    filter: prefersReducedMotion() ? "blur(0px)" : "blur(12px)",
    y: prefersReducedMotion() ? 0 : 40,
  },

  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,

    transition: {
      duration: prefersReducedMotion() ? 0.3 : 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slowFloat = {
  animate: prefersReducedMotion() ? {} : {
    y: [0, -10, 0],

    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const subtleRotate = {
  animate: prefersReducedMotion() ? {} : {
    rotate: [0, 3, 0],

    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};