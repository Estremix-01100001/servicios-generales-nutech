import ServiceCard from './ServiceCard';
import { services } from '../data/services';

export default function MotionServiciosDetallados() {
  return (
    <section 
      id="servicios-detallados" 
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 border border-primary-400/30 rounded-full shadow-lg backdrop-blur-sm">
            <span className="text-sm font-semibold text-white">Nuestros Servicios</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-black">
            Transformamos su empresa con tecnología de vanguardia
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Soluciones integrales de automatización e inteligencia artificial que revolucionan sus procesos empresariales y maximizan la productividad de su equipo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-secondary-900 via-primary-900 to-secondary-800 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para revolucionar sus procesos?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubra cómo nuestras soluciones de automatización pueden transformar su empresa y aumentar su productividad hasta en un 300%.
          </p>
          
          <a 
            href="#contacto" 
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitar Consulta Gratuita
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
