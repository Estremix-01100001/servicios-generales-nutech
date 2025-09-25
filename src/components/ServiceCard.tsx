import { motion } from 'motion/react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
      initial={{ 
        opacity: 0,
        y: 50
      }}
      whileInView={{ 
        opacity: 1,
        y: 0
      }}
      whileHover={{
        scale: 1.02,
        y: -5
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      {/* Imagen del servicio con fondo oscuro */}
      <div className="mb-4 sm:mb-6">
        <div className="w-full h-40 sm:h-48 bg-secondary-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Título */}
      <h3 className="text-lg sm:text-xl font-bold text-secondary-800 mb-3 sm:mb-4 leading-tight">
        {service.description}
      </h3>
      
      {/* Descripción de características */}
      <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
        {service.features[0]}
      </p>
      
      {/* Botón opcional */}
      {service.hasButton && (
        <div className="mt-4">
          <button className="btn-outline w-full text-sm px-4 py-2">
            LEER MAS
          </button>
        </div>
      )}
    </motion.div>
  );
}
