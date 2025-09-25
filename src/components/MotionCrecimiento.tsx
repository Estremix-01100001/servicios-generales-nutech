import { motion } from 'motion/react';

interface CrecimientoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const CrecimientoCard = ({ title, description, icon, delay = 0 }: CrecimientoCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
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
      <div className="mb-4 sm:mb-6">
        <motion.div 
          className="w-full h-40 sm:h-48 bg-secondary-800 rounded-lg flex items-center justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {icon}
        </motion.div>
      </div>
      
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-secondary-800 mb-3 sm:mb-4 leading-tight"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-sm sm:text-base text-secondary-600 leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function MotionCrecimiento() {
  const cards = [
    {
      title: "SERVICIOS DE RPA E IA QUE AUMENTARÁN LA PRODUCTIVIDAD",
      description: "Brindamos herramientas digitales que ahorran tiempo y eliminan el trabajo rutinario monótono, lo que permite a sus empleados concentrarse en otras tareas.",
      icon: (
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-white mb-2">RPA</div>
          <div className="text-xs sm:text-sm text-gray-300">Robotic Process Automation</div>
          <div className="mt-3 sm:mt-4 flex justify-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-600 rounded flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
              </svg>
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-500 rounded flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-400 rounded flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "SOLUCIONES DE AUTOMATIZACIÓN PARA DIFERENTES INDUSTRIAS",
      description: "La digitalización de los procesos comerciales genera numerosos beneficios para las empresas de diferentes sectores o dentro de sus funciones clave para su progreso.",
      icon: (
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
              </svg>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs sm:text-sm">Colaboración Humano-Robot</div>
        </div>
      )
    },
    {
      title: "PIONEROS EN LA AUTOMATIZACIÓN DE PROCESOS EMPRESARIALES",
      description: "Resolver los desafíos comerciales de nuestros clientes con soluciones de automatización ha sido nuestro principio absoluto desde nuestra formación en el 2011.",
      icon: (
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="text-white text-xs sm:text-sm">Inteligencia Artificial</div>
          <div className="mt-2 flex justify-center space-x-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.section 
      id="crecimiento" 
      className=" bg-gradient-to-b from-white via-blue-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Badge */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-100 border border-accent-200 rounded-full">
            <span className="text-accent-600 text-xs sm:text-sm font-semibold">Crecimiento</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-4 sm:mb-6 leading-tight">
            Crecimiento y productividad de la transformación digital
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {cards.map((card, index) => (
            <CrecimientoCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl mx-auto"
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
              className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              ¿Listo para revolucionar sus procesos?
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg text-secondary-600 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Descubra cómo nuestras soluciones de automatización pueden transformar su empresa
            </motion.p>
            
            <motion.a 
              href="#contacto" 
              className="btn-primary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Solicitar Consulta Gratuita
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
