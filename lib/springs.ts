import { Transition, Variants } from "framer-motion";

/**
 * Apple Design Spring Physics Presets
 * Derived from Apple WWDC "Designing Fluid Interfaces"
 */

// Critically damped default spring (damping 1.0, no overshoot, response ~0.35s)
export const appleSpringDefault: Transition = {
  type: "spring",
  stiffness: 340,
  damping: 32,
  mass: 0.8
};

// Snappy interface response (for buttons, icons, pills)
export const appleSpringSnappy: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 34,
  mass: 0.7
};

// Momentum / flick spring (damping ~0.8, subtle physical bounce)
export const appleSpringMomentum: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 22,
  mass: 0.9
};

// Sheet / Drawer spring (Apple WWDC 2018: damping 0.8, response 0.3s)
export const appleSpringSheet: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 26,
  mass: 0.85
};

// Instant tactile press for pointer-down feedback (SKILL.md §1 & §10)
export const appleTapTransition: Transition = {
  type: "spring",
  stiffness: 600,
  damping: 35
};

// Standard stagger containers
export const appleStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const appleFadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: appleSpringDefault
  }
};

/**
 * Rubber-banding boundary resistance function (SKILL.md §9)
 * (overshoot * dimension * constant) / (dimension + constant * |overshoot|)
 */
export function rubberband(overshoot: number, dimension: number = 300, constant: number = 0.55): number {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

/**
 * Apple Momentum Projection (SKILL.md §6)
 * decelerationRate ≈ 0.998 for standard Apple scroll feel
 */
export function projectMomentum(initialVelocity: number, decelerationRate: number = 0.998): number {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}
