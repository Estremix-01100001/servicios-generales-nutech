import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

/**
 * Componente para revelar elementos al hacer scroll
 * Optimizado para performance con Intersection Observer
 */
export default function ScrollReveal({ 
  children, 
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true
}: ScrollRevealProps) {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ 
        once: once, // Solo anima una vez para mejor performance
        amount: 0.3, // Se activa cuando 30% es visible
        margin: "0px 0px -100px 0px" // Empieza antes de que sea visible
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // easeInOut suave
      }}
    >
      {children}
    </motion.div>
  );
}

