import { motion } from 'motion/react';
import { useState } from 'react';

export default function MotionContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      alert('¡Gracias por su consulta! Nos pondremos en contacto con usted pronto.');
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.section 
      id="contacto" 
      className="py-20 bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary-400/10 to-accent-400/10"></div>
        </div>
      </div>
      <div className="container mx-auto px-12 sm:px-16 relative z-10">
        {/* Section Badge */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 border border-primary-400/30 rounded-full shadow-lg backdrop-blur-sm">
            <span className="text-white text-sm font-semibold">Contacto</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-primary-100 to-accent-200 bg-clip-text text-transparent">
            Conversemos sobre el futuro de su empresa
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ¿Quiere saber cómo la automatización puede transformar sus procesos?<br />
            Agenda una reunión gratuita con nuestros especialistas y reciba un diagnóstico inicial adaptado a sus objetivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
            initial={{ 
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              opacity: 0,
              x: -50,
              scale: 0.9
            }}
            whileInView={{ 
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              opacity: 1,
              x: 0,
              scale: 1
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              scale: 1.02,
              y: -5
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Solicitar Consulta Gratuita
            </motion.h3>
            
            <form className="space-y-6" id="contact-form" onSubmit={handleSubmit}>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre y Apellido *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Su nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Empresa *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required 
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nombre de su empresa"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="su@empresa.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Cuéntenos sobre sus objetivos de automatización y los procesos que le gustaría optimizar..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
              </motion.button>
              
              <motion.p 
                className="text-sm text-gray-600 text-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Al enviar este formulario, acepta que procesemos sus datos de acuerdo con nuestra{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Política de Privacidad
                </a>
                .
              </motion.p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ 
              opacity: 0,
              x: 50,
              scale: 0.9
            }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              scale: 1
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Details */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileInView={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Información de Contacto
              </motion.h3>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">Dirección</h4>
                    <p className="text-gray-300">Av. Principal 123, Lima, Perú</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">Teléfono</h4>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-accent-500 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:contacto@nutech.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                      contacto@nutech.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileInView={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Horarios de Atención
              </motion.h3>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex justify-between">
                  <span className="text-gray-300">Lunes - Viernes:</span>
                  <span className="font-semibold text-white">8:30 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado:</span>
                  <span className="font-semibold text-white">9:30 AM - 4:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="font-semibold text-white">Cerrado</span>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="bg-gradient-to-br from-primary-600 to-accent-600 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl"
              initial={{ backgroundColor: "rgb(55, 71, 125)" }}
              whileInView={{ backgroundColor: "rgb(55, 71, 125)" }}
              whileHover={{ 
                backgroundColor: "rgb(45, 58, 107)", 
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                ¿Listo para comenzar?
              </motion.h3>
              
              <motion.p 
                className="text-primary-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Nuestros especialistas están listos para ayudarle a transformar su empresa
              </motion.p>
              
              <motion.a 
                href="tel:+15551234567" 
                className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Llamar Ahora
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
