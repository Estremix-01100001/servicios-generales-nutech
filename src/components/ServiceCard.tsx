import { Service } from '../data/services';
import '../styles/components/ServiceCard.css';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card">
      {/* Header con imagen y título */}
      <div className="service-card-header">
        <div className="service-card-image-container">
          <img 
            src={service.image} 
            alt={service.title} 
            className="service-card-image"
            loading="lazy"
            onError={(e) => {
              console.log('Error loading image:', service.image);
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback si la imagen no carga */}
          <div className="service-card-fallback">
            <div className="service-card-fallback-title">{service.title}</div>
            {service.subtitle && (
              <div className="service-card-fallback-subtitle">{service.subtitle}</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Título principal */}
      <h3 className="service-card-title">
        {service.description}
      </h3>
      
      {/* Descripción */}
      <p className="service-card-description">
        {service.features[0]}
      </p>
      
      {/* Botón opcional */}
      {service.hasButton && (
        <div className="service-card-button-container">
          <button className="service-card-button">
            LEER MAS
          </button>
        </div>
      )}
    </div>
  );
}
