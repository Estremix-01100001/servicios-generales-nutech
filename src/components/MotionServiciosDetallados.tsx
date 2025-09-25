import { motion } from 'motion/react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

export default function MotionServiciosDetallados() {
  return (
    <motion.section 
      id="servicios-detallados" 
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-12 sm:px-16">
        {/* Section Badge */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 border border-accent-200 rounded-full">
            <span className="text-accent-600 text-sm font-semibold">Servicios</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Somos su socio de transformación digital desde los primeros pasos hasta las automatizaciones a gran escala
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ayudamos a nuestros clientes a desarrollar sus negocios y procesos, haciendo que el trabajo sea más productivo, eficiente y confiable a través de la automatización robótica de procesos (RPA) y la inteligencia artificial (IA).
          </motion.p>
        </motion.div>

        {/* Three Column Services */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* Trabajos Destacados Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-secondary-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Trabajos destacados
          </motion.h3>
          
          <motion.button 
            className="btn-outline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            LEER MAS
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
