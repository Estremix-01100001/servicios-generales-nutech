import ServiceCard from './ServiceCard';
import { services } from '../data/services';

export default function MotionServiciosDetallados() {
  return (
    <section 
      id="servicios-detallados" 
      className="servicios-section"
    >
      {/* Background decoration */}
      <div className="servicios-background">
        <div className="servicios-background-decoration blue"></div>
        <div className="servicios-background-decoration purple"></div>
        <div className="servicios-background-decoration pink"></div>
      </div>

      <div className="servicios-container">
        {/* Section Badge */}
        <div className="servicios-badge">
          <div className="servicios-badge-inner">
            <span className="servicios-badge-text">Nuestros Servicios</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="servicios-header">
          <h2 className="servicios-title">
            Transformamos su empresa con tecnología de vanguardia
          </h2>
          
          <p className="servicios-description">
            Soluciones integrales de automatización e inteligencia artificial que revolucionan sus procesos empresariales y maximizan la productividad de su equipo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="servicios-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="servicios-cta">
          <h3 className="servicios-cta-title">
            ¿Listo para revolucionar sus procesos?
          </h3>
          
          <p className="servicios-cta-description">
            Descubra cómo nuestras soluciones de automatización pueden transformar su empresa y aumentar su productividad hasta en un 300%.
          </p>
          
          <a 
            href="#contacto" 
            className="servicios-cta-button"
          >
            Solicitar Consulta Gratuita
            <svg className="servicios-cta-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
