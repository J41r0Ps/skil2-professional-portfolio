/**
 * Shared framer-motion variant factories.
 *
 * All variants animate `transform` and `opacity` only, so they run on the
 * compositor (no layout/paint work). Sections wrap children in
 * `staggerContainer` (see hoc/SectionWrapper), and children opt in with
 * `fadeIn` / `textVariant` etc. — the parent's `whileInView` triggers them.
 */

/** Heading entrance: small drop-in with a spring settle. */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -24,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.1,
        delay: delay,
      },
    },
  };
};

/**
 * Directional fade.
 *
 * @param {"left"|"right"|"up"|"down"|""} direction  Where the element travels FROM.
 * @param {"tween"|"spring"|""} type                 framer transition type.
 * @param {number} delay                             Seconds before starting.
 * @param {number} duration                          Seconds to run.
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/** Scale-up entrance from zero. */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/** Slide in from fully off-screen (used by the contact form panels). */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/** Parent container that staggers its children's variants. */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
