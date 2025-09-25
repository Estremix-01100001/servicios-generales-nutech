import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Imagen del servicio */}
      <div className="mb-6">
        <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mb-6 overflow-hidden border border-blue-100">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-contain p-6"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Título del servicio */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {service.title}
        </h3>
        {service.subtitle && (
          <p className="text-sm text-blue-600 font-medium">
            {service.subtitle}
          </p>
        )}
      </div>
      
      {/* Descripción principal */}
      <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        {service.description}
      </h4>
      
      {/* Lista de características */}
      <ul className="space-y-3 mb-6">
        {service.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Botón opcional */}
      {service.hasButton && (
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            LEER MAS
          </button>
        </div>
      )}
    </div>
  );
}
