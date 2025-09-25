import { motion } from 'motion/react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      initial={{ 
        backgroundColor: "rgb(240, 248, 255)",
        opacity: 0,
        y: 50,
        scale: 0.9
      }}
      whileInView={{ 
        backgroundColor: "rgb(255, 255, 255)",
        opacity: 1,
        y: 0,
        scale: 1
      }}
      whileHover={{
        backgroundColor: "rgb(248, 250, 252)",
        scale: 1.02,
        y: -5
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Imagen del servicio */}
      <motion.div 
        className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 overflow-hidden"
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
      >
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      
      {/* Título */}
      <motion.h3 
        className="text-2xl font-bold text-secondary-800 mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {service.title}
      </motion.h3>
      
      {/* Lista de características */}
      <motion.ul 
        className="space-y-3 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        {service.features.map((feature, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.8 + (index * 0.1) }}
          >
            <span className="text-accent-600 mr-3 mt-1">•</span>
            <span className="text-secondary-600">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
      
      {/* Botón opcional */}
      {service.hasButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: delay + 1.0 }}
        >
          <button className="btn-outline w-full">
            LEER MAS
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
