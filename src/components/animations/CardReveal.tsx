import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardRevealProps {
  children: ReactNode;
  index?: number;
  hueA?: number;
  hueB?: number;
}

/**
 * Componente para cards con animación scroll-triggered
 * Inspirado en el ejemplo de Framer Motion
 */
export default function CardReveal({ 
  children, 
  index = 0,
  hueA = 220,
  hueB = 250
}: CardRevealProps) {
  // Colores basados en la paleta de la landing
  const hue = (h: number) => `hsl(${h}, 70%, 55%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.8
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay: index * 0.1 // Stagger por índice
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ 
        once: true, 
        amount: 0.4 
      }}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      style={{
        position: 'relative'
      }}
    >
      {/* Splash de color de fondo (opcional) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: background,
          opacity: 0.05,
          borderRadius: '1rem',
          zIndex: -1
        }}
      />
      
      {children}
    </motion.div>
  );
}

