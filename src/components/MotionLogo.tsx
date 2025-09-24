import { motion } from 'motion/react';

export default function MotionLogo() {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img 
        src="https://raw.githubusercontent.com/Estremix-01100001/servicios-generales-nutech/main/public/favicon.png" 
        alt="Nutech" 
        className="w-32 h-32"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    </motion.div>
  );
}
