import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      initial={{ 
        backgroundColor: "rgb(240, 248, 255)", // azul muy claro
        opacity: 0,
        y: 50,
        scale: 0.9
      }}
      whileInView={{ 
        backgroundColor: "rgb(255, 255, 255)", // blanco
        opacity: 1,
        y: 0,
        scale: 1
      }}
      whileHover={{
        backgroundColor: "rgb(248, 250, 252)", // gris muy claro
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
      <motion.div 
        className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6"
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-secondary-800 mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-secondary-600 mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        {description}
      </motion.p>
      
      <motion.a 
        href="#contacto" 
        className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, delay: delay + 0.8 }}
      >
        Solicitar Consulta
      </motion.a>
    </motion.div>
  );
};

export default function MotionServices() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Consultoría en Transformación Digital",
      description: "Lo guiamos en la definición de una estrategia de automatización adaptada a su negocio."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Automatización Robótica de Procesos (RPA)",
      description: "Implementamos soluciones que simplifican sus operaciones, reduciendo costos y tiempos."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
      title: "Gestión de Ciclo de Vida",
      description: "Ofrecemos soporte integral desde la planificación hasta la optimización continua de sus procesos."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: "Inteligencia Artificial aplicada",
      description: "Diseñamos sistemas inteligentes que potencian la toma de decisiones y la productividad."
    }
  ];

  return (
    <motion.section 
      id="servicios" 
      className="py-20 bg-gradient-to-br from-white to-blue-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Badge */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 border border-accent-200 rounded-full">
            <span className="text-accent-600 text-sm font-semibold">Nuestros Servicios</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            Nuestro enfoque es personalizado, escalable y medible, para asegurar retornos visibles en el corto y mediano plazo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
            initial={{ 
              backgroundColor: "rgb(240, 248, 255)",
              scale: 0.9
            }}
            whileInView={{ 
              backgroundColor: "rgb(255, 255, 255)",
              scale: 1
            }}
            whileHover={{
              backgroundColor: "rgb(248, 250, 252)",
              scale: 1.02,
              y: -5
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-secondary-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              ¿Listo para transformar su empresa?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-secondary-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Agende una consulta gratuita y descubra cómo la automatización puede revolucionar sus procesos
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <motion.a 
                href="#contacto" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Reservar Consulta Gratuita
              </motion.a>
              
              <motion.a 
                href="tel:+15551234567" 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Llamar Ahora
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
