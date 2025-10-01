import { motion } from 'motion/react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}

const StatCard = ({ icon, title, text, delay = 0 }: StatCardProps) => {
  return (
    <div className="nutech-stat-card">
      <div className="nutech-stat-icon">
        {icon}
      </div>
      <h4 className="nutech-stat-title">
        {title}
      </h4>
      <p className="nutech-stat-text">
        {text}
      </p>
    </div>
  );
};

export default function MotionNutechInfo() {
  // Cajas para "Nutech en pocas palabras" - basadas en la imagen
  const nutechStats = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m0 0h-3"></path>
        </svg>
      ),
      title: "Casos de Uso Identificados",
      text: "Más de 2500 casos de uso identificados"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        </svg>
      ),
      title: "Especializado en Robótica e IA",
      text: "Especializado en robótica e IA"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Años en el Negocio",
      text: "14 años (y contando) en el negocio"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Proyectos Implementados",
      text: "Más de 100 proyectos de automatización implementados para clientes en diferentes segmentos"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 11h6m-6 4h6m-6 4h6"></path>
        </svg>
      ),
      title: "Oficinas Globales",
      text: "2 oficinas en todo el mundo; Lima - Perú y Tampa - USA"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Diversidad de Equipo",
      text: "Nuestro equipo tiene más de 10 nacionalidades"
    }
  ];

  // Cajas para "Nuestro Equipo" - se mantienen las originales
  const teamStats = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Expertos Certificados",
      text: "Especialistas en RPA con sólida visión empresarial y enfoque estratégico."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Experiencia Global",
      text: "Más de cientos de procesos automatizados en distintos países y sectores."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Inteligencia Avanzada",
      text: "Soluciones que integran RPA con aprendizaje automático y reconocimiento óptico de caracteres (OCR)."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: "Estrategia Empresarial",
      text: "Enfoque más allá de la automatización: transformación real de procesos clave."
    }
  ];

  return (
    <section 
      id="academia" 
      className="nutech-section"
    >
      <div className="nutech-container">
        {/* Section Badge */}
        <div className="nutech-badge">
          <div className="nutech-badge-inner">
            <span className="nutech-badge-text">Nutech</span>
          </div>
        </div>

        {/* Nutech en pocas palabras */}
        <div className="nutech-header">
          <h2 className="nutech-title">
            Nutech en pocas palabras
          </h2>
          
          <div className="nutech-description">
            <p>
              Contamos con expertos certificados en RPA que aplican estrategias más allá de la simple automatización de tareas. Hemos implementado cientos de procesos en múltiples sectores usando soluciones inteligentes con IA, aprendizaje automático y OCR.
            </p>
          </div>
          
          {/* Stats Grid para Nutech en pocas palabras */}
          <div className="nutech-stats-container">
            {nutechStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                text={stat.text}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Somos un equipo nacional */}
        <div className="nutech-badge">
          <div className="nutech-badge-inner">
            <span className="nutech-badge-text">Nuestro Equipo</span>
          </div>
        </div>

        <div className="nutech-header">
          <h3 className="nutech-title">
            Somos un equipo nacional con amplia experiencia
          </h3>
          
          {/* Stats Grid para Nuestro Equipo */}
          <div className="nutech-stats-container">
            {teamStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                text={stat.text}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
