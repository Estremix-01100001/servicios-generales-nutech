import { motion } from 'framer-motion';
import { additionalServices } from '../data/services';

export default function MotionServiciosAdicionales() {
  return (
    <section id="servicios-adicionales" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full lg:w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios Adicionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones complementarias para potenciar tu transformación digital
          </p>
        </motion.div>

        {/* Carrusel de Servicios Adicionales */}
        <div className="services-carousel-wrapper">
          <button 
            className="services-nav-button left"
            onClick={() => {
              const carousel = document.getElementById('services-carousel');
              if (carousel) carousel.scrollBy({ left: -400, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div id="services-carousel" className="services-carousel-container">
            <div className="services-carousel-row">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="service-card-carousel bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    {service.subtitle && (
                      <p className="text-sm font-semibold text-primary-600 mb-2">
                        {service.subtitle}
                      </p>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <button 
            className="services-nav-button right"
            onClick={() => {
              const carousel = document.getElementById('services-carousel');
              if (carousel) carousel.scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

