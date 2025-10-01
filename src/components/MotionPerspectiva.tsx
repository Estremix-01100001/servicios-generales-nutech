import { motion } from 'motion/react';

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InsightCard = ({ icon, title, description, delay = 0 }: InsightCardProps) => {
  return (
    <div className="perspectiva-insight-card">
      <div className="perspectiva-insight-icon">
        {icon}
      </div>
      
      <h3 className="perspectiva-insight-title">
        {title}
      </h3>
      
      <p className="perspectiva-insight-description">
        {description}
      </p>
    </div>
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
    <section 
      id="perspectiva" 
      className="perspectiva-section"
    >
      <div className="perspectiva-container">
        {/* Section Badge */}
        <div className="perspectiva-badge">
          <div className="perspectiva-badge-inner">
            <span className="perspectiva-badge-text">Perspectivas</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="perspectiva-header">
          <h2 className="perspectiva-title">
            Tendencias y conocimiento en transformación digital
          </h2>
          
          <p className="perspectiva-description">
            En Nutech creemos que la innovación debe ser compartida. A través de nuestra sección de Perspectivas le brindamos análisis, artículos y casos de éxito sobre el impacto de la automatización, la inteligencia artificial y otras tecnologías claves para el crecimiento empresarial.
          </p>
        </div>

        {/* Content Grid */}
        <div className="perspectiva-insights-container">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              icon={insight.icon}
              title={insight.title}
              description={insight.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="perspectiva-header">
          <h3 className="perspectiva-title">
            ¿Quiere mantenerse actualizado?
          </h3>
          
          <p className="perspectiva-description">
            Suscríbase a nuestro newsletter y reciba las últimas tendencias en transformación digital directamente en su correo.
          </p>
          
          <a href="#contacto" className="btn-primary">
            Suscribirse Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
