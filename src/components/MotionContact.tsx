import { useState } from 'react';
import '../../styles/components/MotionContact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function MotionContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    </section>
  );
}