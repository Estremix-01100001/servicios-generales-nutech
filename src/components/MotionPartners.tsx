import { motion } from 'motion/react';

export default function MotionPartners() {
  const partners = [
    { name: "dzine", color: "text-secondary-600" },
    { name: "ROCKETBOT", color: "text-red-600" },
    { name: "AUTOMATION ANYWHERE", color: "text-blue-600" },
    { name: "Global Seis", color: "text-secondary-600" },
    { name: "Autonomy", color: "text-secondary-600" },
    { name: "ACEROYALTY", color: "text-secondary-600" },
    { name: "UiPath", color: "text-red-600" }
  ];

  return (
    <motion.section 
      id="partners" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-12 sm:px-16">
        {/* Section Badge */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-100 border border-accent-200 rounded-full">
            <span className="text-accent-600 text-xs sm:text-sm font-semibold">Partners</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nuestros Partners
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contamos con los mejores Partners en Latinoamérica que nos permite brindarles las mejores soluciones de negocio y enfocados a la transformación digital para su empresa.
          </motion.p>
        </motion.div>

        {/* Partners Logos - Infinite Loop */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="flex animate-scroll"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-12 flex-shrink-0">
              {partners.map((partner, index) => (
                <motion.div 
                  key={`first-${index}`}
                  className="w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ 
                    backgroundColor: "rgb(240, 248, 255)",
                    scale: 0.8,
                    opacity: 0
                  }}
                  whileInView={{ 
                    backgroundColor: "rgb(255, 255, 255)",
                    scale: 1,
                    opacity: 1
                  }}
                  whileHover={{
                    backgroundColor: "rgb(248, 250, 252)",
                    scale: 1.05,
                    y: -2
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <span className={`${partner.color} font-bold text-sm sm:text-base lg:text-lg`}>
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-12 flex-shrink-0">
              {partners.map((partner, index) => (
                <motion.div 
                  key={`second-${index}`}
                  className="w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ 
                    backgroundColor: "rgb(240, 248, 255)",
                    scale: 0.8,
                    opacity: 0
                  }}
                  whileInView={{ 
                    backgroundColor: "rgb(255, 255, 255)",
                    scale: 1,
                    opacity: 1
                  }}
                  whileHover={{
                    backgroundColor: "rgb(248, 250, 252)",
                    scale: 1.05,
                    y: -2
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index + partners.length) * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <span className={`${partner.color} font-bold text-sm sm:text-base lg:text-lg`}>
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
}
