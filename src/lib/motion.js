export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const easing = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 22,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const cardReveal = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: easing,
    },
  },
};

export const subtleHover = {
  y: -6,
  scale: 1.02,
  transition: {
    duration: 0.25,
    ease: easing,
  },
};

export const imageHover = {
  scale: 1.03,
  transition: {
    duration: 0.35,
    ease: easing,
  },
};
