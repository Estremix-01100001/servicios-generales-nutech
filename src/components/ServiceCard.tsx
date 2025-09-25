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
      {/* Imagen del servicio */}
      <div 
        className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 overflow-hidden bg-gray-100 border-2 border-gray-200"
      >
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      
      {/* Título */}
      <h3 className="text-2xl font-bold text-secondary-800 mb-6">
        {service.title}
      </h3>
      
      {/* Lista de características */}
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-600 mr-3 mt-1">•</span>
            <span className="text-secondary-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Botón opcional */}
      {service.hasButton && (
        <div>
          <button className="btn-outline w-full">
            LEER MAS
          </button>
        </div>
      )}
    </motion.div>
  );
}
