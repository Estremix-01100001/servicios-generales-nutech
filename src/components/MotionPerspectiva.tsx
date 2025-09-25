import { motion } from 'motion/react';

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InsightCard = ({ icon, title, description, delay = 0 }: InsightCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
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
        className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4"
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold text-secondary-800 mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-secondary-600"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function MotionPerspectiva() {
  const insights = [
    {
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: "Análisis de Tendencias",
      description: "Manténgase informado de las últimas tendencias en RPA y descubra cómo estas soluciones pueden aplicarse estratégicamente en su organización."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Casos de Éxito",
      description: "Descubra cómo empresas como la suya han logrado maximizar resultados con nuestras soluciones de automatización."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      title: "Artículos Especializados",
      description: "Contenido técnico y estratégico sobre automatización, IA y transformación digital para líderes empresariales."
    }
  ];

  return (
    <motion.section 
      id="perspectiva" 
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
            <span className="text-accent-600 text-sm font-semibold">Perspectivas</span>
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
            Tendencias y conocimiento en transformación digital
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            En Nutech creemos que la innovación debe ser compartida. A través de nuestra sección de Perspectivas le brindamos análisis, artículos y casos de éxito sobre el impacto de la automatización, la inteligencia artificial y otras tecnologías claves para el crecimiento empresarial.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              icon={insight.icon}
              title={insight.title}
              description={insight.description}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              ¿Quiere mantenerse actualizado?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-secondary-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Suscríbase a nuestro newsletter y reciba las últimas tendencias en transformación digital directamente en su correo.
            </motion.p>
            
            <motion.a 
              href="#contacto" 
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Suscribirse Ahora
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
