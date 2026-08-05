import { Variants } from "framer-motion";

// Physical micro-compression reaction for the journal container (< 220ms)
export const journalPhysicalReactionVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
    scaleY: 1,
  },
  react: {
    y: [0, 2, 0],
    scale: [1, 0.996, 1],
    scaleY: [1, 0.994, 1],
    transition: {
      duration: 0.21,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// Subtle sway physics for the bookmark ribbon
export const ribbonSwayVariants: Variants = {
  rest: {
    rotate: 0,
    x: 0,
  },
  react: {
    rotate: [0, -1.8, 0.5, 0],
    x: [0, 1.2, 0],
    transition: {
      duration: 0.24,
      ease: "easeOut",
    },
  },
};

// Minimal vertical recoil for the binder clip
export const clipRecoilVariants: Variants = {
  rest: {
    y: 0,
  },
  react: {
    y: [0, 1.5, 0],
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};
