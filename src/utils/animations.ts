// Utilidades para animaciones consistentes

export interface AnimationVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
}

export const createFadeInUp = (delay: number = 0): AnimationVariants => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
});

export const createFadeInDown = (delay: number = 0): AnimationVariants => ({
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
});

export const createFadeInLeft = (delay: number = 0): AnimationVariants => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay }
});

export const createFadeInRight = (delay: number = 0): AnimationVariants => ({
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay }
});

export const createScaleIn = (delay: number = 0): AnimationVariants => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay }
});

export const createStaggerContainer = (staggerChildren: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren
    }
  }
});

export const createHoverScale = (scale: number = 1.05) => ({
  whileHover: { scale },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
});

export const createInfiniteScroll = (duration: number = 30) => ({
  initial: { x: 0 },
  animate: { x: "-50%" },
  transition: {
    duration,
    repeat: Infinity,
    ease: "linear"
  }
});
