import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card">
      {/* Solo imagen ocupando toda la caja */}
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
