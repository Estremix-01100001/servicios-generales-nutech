import { motion } from 'motion/react';

interface ServiceColumnProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  button?: React.ReactNode;
  delay?: number;
}

const ServiceColumn = ({ icon, title, items, button, delay = 0 }: ServiceColumnProps) => {
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
      <motion.div 
        className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6"
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-secondary-800 mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {title}
      </motion.h3>
      
      <motion.ul 
        className="space-y-3 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        {items.map((item, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.8 + (index * 0.1) }}
          >
            <span className="text-accent-600 mr-3 mt-1">&gt;</span>
            <span className="text-secondary-600">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
      
      {button && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: delay + 1.0 }}
        >
          {button}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function MotionServiciosDetallados() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      title: "CONSULTIVO",
      items: [
        "Minería de procesos para el descubrimiento de potencial de automatización",
        "Automatización inteligente",
        "Análisis de casos de uso (RPA + AI)",
        "Asesoramiento de gestión"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        </svg>
      ),
      title: "AUTOMATIZACIÓN",
      items: [
        "Metodología Nutech probada y marco de mejores prácticas para el desarrollo de RPA.",
        "Equipo híbrido de consultores certificados para distintas etapas de las necesidades de transformación digital",
        "Proceso esbelto y desarrollo organizacional"
      ],
      button: (
        <button className="btn-outline w-full">
          LEER MAS
        </button>
      )
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        </svg>
      ),
      title: "GESTIÓN DEL CICLO DE VIDA",
      items: [
        "Plataforma en la nube Nutech Robotics as a Service (RaaS)",
        "Servicios de subcontratación de procesos comerciales (R-BPO)",
        "Soluciones personalizadas en las instalaciones"
      ]
    }
  ];

  return (
    <motion.section 
      id="servicios-detallados" 
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
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
            <ServiceColumn
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
              button={service.button}
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
