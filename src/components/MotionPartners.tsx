import { motion } from 'motion/react';
import '../../styles/components/MotionPartners.css';

export default function MotionPartners() {
  const partners = [
    { name: "Hayduk", color: "text-blue-600" },
    { name: "Lindcorp", color: "text-secondary-600" },
    { name: "Tambo+", color: "text-green-600" },
    { name: "ARUMA", color: "text-purple-600" },
    { name: "NIUBIZ", color: "text-red-600" },
    { name: "RENIEC", color: "text-blue-600" },
    { name: "PROMPERU", color: "text-secondary-600" },
    { name: "Tambo+", color: "text-green-600" },
    { name: "ARUMA", color: "text-purple-600" },
    { name: "NIUBIZ", color: "text-red-600" }
  ];

  return (
    <motion.section 
      id="partners" 
      className="partners-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="partners-container">
        {/* Section Badge */}
        <motion.div 
          className="partners-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="partners-badge-inner">
            <span className="partners-badge-text">Partners</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="partners-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nuestros Partners
          </motion.h2>
          
          <motion.p 
            className="partners-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contamos con los mejores Partners en Latinoamérica que nos permite brindarles las mejores soluciones de negocio y enfocados a la transformación digital para su empresa.
          </motion.p>
        </motion.div>

        {/* Partners Logos - Infinite Loop */}
        <div className="partners-loop-container">
          <motion.div 
            className="partners-loop"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            <div className="partners-set">
              {partners.map((partner, index) => (
                <motion.div 
                  key={`first-${index}`}
                  className="partners-card"
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
                  <span className={`partners-card-text ${partner.color.replace('text-', '')}`}>
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="partners-set">
              {partners.map((partner, index) => (
                <motion.div 
                  key={`second-${index}`}
                  className="partners-card"
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
                  <span className={`partners-card-text ${partner.color.replace('text-', '')}`}>
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
