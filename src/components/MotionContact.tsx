import { motion } from 'motion/react';
import { useState } from 'react';

export default function MotionContact() {
  const [formData, setFormData] = useState({
    name: '',
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
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
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
        <div className="max-w-3xl mx-auto">
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

        {/* Contact Form */}
        <motion.div 
   className="w-[680px] h-[480px] mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20"
  initial={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            opacity: 0,
            y: 50,
            scale: 0.9
          }}
          whileInView={{ 
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            opacity: 1,
            y: 0,
            scale: 1
          }}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            scale: 1.02,
            y: -5
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent text-center">
            Solicitar Consulta Gratuita
          </h3>
          
            <form className="space-y-3" id="contact-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">Teléfono *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">¿Cómo podemos ayudarte? *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={2} 
                required 
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none text-sm ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Cuéntanos brevemente sobre tu proyecto..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm ${
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
              {isSubmitting ? 'Enviando...' : 'Solicitar Consulta'}
            </motion.button>
            
            <motion.p 
              className="text-xs text-gray-600 text-center mt-3"
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
        </div>
      </div>
    </motion.section>
  );
}