import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
      {/* Header con imagen y título */}
      <div className="mb-4 sm:mb-6">
        <div className="w-full h-40 sm:h-48 bg-secondary-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-contain p-4"
            loading="lazy"
            onError={(e) => {
              console.log('Error loading image:', service.image);
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback si la imagen no carga */}
          <div className="text-center text-white">
            <div className="text-3xl sm:text-4xl font-bold mb-2">{service.title}</div>
            {service.subtitle && (
              <div className="text-xs sm:text-sm text-gray-300">{service.subtitle}</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Título principal */}
      <h3 className="text-lg sm:text-xl font-bold text-secondary-800 mb-3 sm:mb-4 leading-tight">
        {service.description}
      </h3>
      
      {/* Descripción */}
      <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
        {service.features[0]}
      </p>
      
      {/* Botón opcional */}
      {service.hasButton && (
        <div className="mt-4">
          <button className="bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-700 transition-colors duration-300">
            LEER MAS
          </button>
        </div>
      )}
    </div>
  );
}
