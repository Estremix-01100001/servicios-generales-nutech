import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card">
      {/* Imagen */}
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
      </div>
      
      {/* Título */}
      {service.title && (
        <h3 className="service-card-title">
          {service.title}
        </h3>
      )}
      
      {/* Descripción */}
      <p className="service-card-description">
        {service.features[0]}
      </p>
      
    </div>
  );
}
