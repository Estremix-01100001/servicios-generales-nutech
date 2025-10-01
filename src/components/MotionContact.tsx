import { useForm } from '../hooks/useForm';
import { FormData } from '../types';

export default function MotionContact() {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit: handleFormSubmit,
    resetForm
  } = useForm(initialFormData);

  const onSubmit = async (data: FormData) => {
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('¡Gracias por su consulta! Nos pondremos en contacto con usted pronto.');
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    handleFormSubmit(e, onSubmit);
  };

  return (
    <section 
      id="contacto" 
      className="contact-section"
    >
      {/* Background Pattern */}
      <div className="contact-background">
        <div className="contact-background-pattern"></div>
        <div className="contact-background-overlay">
          <div className="contact-background-gradient"></div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-content">
        {/* Section Badge */}
        <div className="contact-badge">
          <div className="contact-badge-inner">
            <span className="contact-badge-text">Contacto</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Conversemos sobre el futuro de su empresa
          </h2>
          <p className="contact-description">
            ¿Quiere saber cómo la automatización puede transformar sus procesos?<br />
            Agenda una reunión gratuita con nuestros especialistas y reciba un diagnóstico inicial adaptado a sus objetivos.
          </p>
        </div>

        {/* Grid de Formulario e Información */}
        <div className="contact-grid">
          {/* Información de Contacto */}
          <div className="contact-info-container">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Información de Contacto</h3>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-label">Dirección</h4>
                  <p className="contact-info-text">Av. Principal 123, Lima, Perú</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-label">Teléfono</h4>
                  <p className="contact-info-text">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-label">Email</h4>
                  <p className="contact-info-text">contacto@nutech.com</p>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3 className="contact-info-title">Horarios de Atención</h3>
              
              <div className="contact-schedule-item">
                <span className="contact-schedule-day">Lunes - Viernes:</span>
                <span className="contact-schedule-time">8:30 AM - 6:30 PM</span>
              </div>

              <div className="contact-schedule-item">
                <span className="contact-schedule-day">Sábado:</span>
                <span className="contact-schedule-time">9:30 AM - 4:30 PM</span>
              </div>

              <div className="contact-schedule-item">
                <span className="contact-schedule-day">Domingo:</span>
                <span className="contact-schedule-time">Cerrado</span>
              </div>
            </div>

            <div className="contact-cta-card">
              <h3 className="contact-cta-title">¿Listo para comenzar?</h3>
              <p className="contact-cta-description">
                Nuestros especialistas están listos para ayudarle a transformar su empresa
              </p>
              <a href="tel:+1 (555) 123-4567" className="contact-cta-button">
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
          <h3 className="contact-form-title">
            Solicitar Consulta Gratuita
          </h3>
          
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-fields">
              <div className="contact-field">
                <label htmlFor="name" className="contact-label">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`contact-input ${errors.name ? 'error' : ''}`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="contact-error">{errors.name}</p>
                )}
              </div>
              
              <div className="contact-field">
                <label htmlFor="email" className="contact-label">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`contact-input ${errors.email ? 'error' : ''}`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="contact-error">{errors.email}</p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="phone" className="contact-label">Teléfono *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`contact-input ${errors.phone ? 'error' : ''}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="contact-error">{errors.phone}</p>
                )}
              </div>
            </div>
            
            <div className="contact-field">
              <label htmlFor="message" className="contact-label">¿Cómo podemos ayudarte? *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={2} 
                required 
                value={formData.message}
                onChange={handleInputChange}
                className={`contact-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Cuéntanos brevemente sobre tu proyecto..."
              ></textarea>
              {errors.message && (
                <p className="contact-error">{errors.message}</p>
              )}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`contact-submit-button ${isSubmitting ? 'submitting' : ''}`}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Consulta'}
            </button>
            
            <p className="contact-privacy">
              Al enviar este formulario, acepta que procesemos sus datos de acuerdo con nuestra{' '}
              <a href="#" className="contact-privacy-link">
                Política de Privacidad
              </a>
              .
            </p>
          </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}