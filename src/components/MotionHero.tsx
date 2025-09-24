import { motion } from 'motion/react';

export default function MotionHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleText = "Agrega valor a las organizaciones a través de la transformación digital";
  const letters = titleText.split("");

  return (
    <motion.div 
      className="text-center max-w-5xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Título Principal */}
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight mb-6 md:mb-8 text-white"
        variants={itemVariants}
      >
        <motion.span className="block" variants={itemVariants}>
          Agrega valor a las
        </motion.span>
        <motion.span className="block" variants={itemVariants}>
          organizaciones
        </motion.span>
        <motion.span className="block" variants={itemVariants}>
          a través de la
        </motion.span>
        <motion.span 
          className="relative inline-block"
          variants={itemVariants}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="letter"
              variants={letterVariants}
              custom={index}
              whileHover={{
                scale: 1.2,
                color: "#3B82F6",
                textShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto"
        variants={itemVariants}
      >
        Optimizamos sus Procesos de Negocio, con Automatización e Inteligencia Artificial de vanguardia
      </motion.p>

      {/* Botones */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        variants={itemVariants}
      >
        <motion.a 
          href="#servicios-detallados" 
          className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Ver servicios</span>
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </motion.svg>
        </motion.a>

        <motion.a 
          href="#contacto" 
          className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Contacto</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
