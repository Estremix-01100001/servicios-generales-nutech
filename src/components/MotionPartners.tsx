import { motion } from 'motion/react';

export default function MotionPartners() {
  // Certificaciones y Alianzas Tecnológicas
  const certifications = [
    { 
      name: "UiPath", 
      type: "RPA Partner", 
      color: "text-orange-600",
      logo: "/partners/uipath.png"
    },
    { 
      name: "Automation Anywhere", 
      type: "Gold Partner", 
      color: "text-orange-500",
      logo: "/partners/automation-anywhere.png"
    },
    { 
      name: "Microsoft Azure", 
      type: "Certified", 
      color: "text-blue-600",
      logo: "/partners/azure.png"
    },
    { 
      name: "AWS", 
      type: "Partner Network", 
      color: "text-orange-400",
      logo: "/partners/aws.png"
    },
    { 
      name: "ISO 27001", 
      type: "Certified", 
      color: "text-green-600",
      logo: "/partners/iso-27001.png"
    },
    { 
      name: "ISO 9001", 
      type: "Quality Management", 
      color: "text-blue-500",
      logo: "/partners/iso-9001.png"
    },
    { 
      name: "Blue Prism", 
      type: "Partner", 
      color: "text-blue-700",
      logo: "/partners/blue-prism.png"
    },
    { 
      name: "Power Automate", 
      type: "Expert", 
      color: "text-purple-600",
      logo: "/partners/power-automate.png"
    },
    { 
      name: "SAP", 
      type: "Technology Partner", 
      color: "text-blue-800",
      logo: "/partners/sap.png"
    },
    { 
      name: "Salesforce", 
      type: "AppExchange Partner", 
      color: "text-blue-400",
      logo: "/partners/salesforce.png"
    }
  ];

  // Clientes corporativos
  const clients = [
    { name: "Hayduk", color: "text-blue-600" },
    { name: "Lindcorp", color: "text-secondary-600" },
    { name: "Tambo+", color: "text-green-600" },
    { name: "ARUMA", color: "text-purple-600" },
    { name: "NIUBIZ", color: "text-red-600" },
    { name: "RENIEC", color: "text-blue-600" },
    { name: "PROMPERU", color: "text-secondary-600" }
  ];

  return (
    <motion.section 
      id="partners" 
      className="partners-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="partners-container">
        {/* Section Badge */}
        <motion.div 
          className="partners-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="partners-badge-inner">
            <span className="partners-badge-text">Partners</span>
          </div>
        </motion.div>

        {/* Certificaciones y Alianzas Tecnológicas */}
        <motion.div 
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="partners-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Certificaciones y Alianzas Tecnológicas
          </motion.h2>
          
          <motion.p 
            className="partners-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Somos expertos certificados en las principales plataformas de automatización y tecnología, garantizando soluciones de clase mundial.
          </motion.p>
        </motion.div>

        {/* Certificaciones Carousel - Primera fila */}
        <div className="certifications-carousel-wrapper">
          <button 
            className="carousel-nav-button left"
            onClick={() => {
              const carousel = document.getElementById('carousel-row-1');
              if (carousel) carousel.scrollBy({ left: -300, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div id="carousel-row-1" className="certifications-carousel-container">
            <div className="certifications-carousel-row">
              {certifications.slice(0, 5).map((cert, index) => (
                <div 
                  key={`cert-row1-${index}`}
                  className="certification-badge"
                >
                  <div className="certification-logo">
                    <svg className="certification-star w-16 h-16" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                        fill="currentColor"
                        className="star-fill"
                      />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="star-stroke" fill="none" />
                      <path 
                        d="M9 12L11 14L15 10" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="certification-name">
                    {cert.name}
                  </h3>
                  <p className="certification-type">
                    {cert.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav-button right"
            onClick={() => {
              const carousel = document.getElementById('carousel-row-1');
              if (carousel) carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Certificaciones Carousel - Segunda fila */}
        <div className="certifications-carousel-wrapper">
          <button 
            className="carousel-nav-button left"
            onClick={() => {
              const carousel = document.getElementById('carousel-row-2');
              if (carousel) carousel.scrollBy({ left: -300, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div id="carousel-row-2" className="certifications-carousel-container">
            <div className="certifications-carousel-row">
              {certifications.slice(5, 10).map((cert, index) => (
                <div 
                  key={`cert-row2-${index}`}
                  className="certification-badge"
                >
                  <div className="certification-logo">
                    <svg className="certification-star w-16 h-16" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                        fill="currentColor"
                        className="star-fill"
                      />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="star-stroke" fill="none" />
                      <path 
                        d="M9 12L11 14L15 10" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="certification-name">
                    {cert.name}
                  </h3>
                  <p className="certification-type">
                    {cert.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav-button right"
            onClick={() => {
              const carousel = document.getElementById('carousel-row-2');
              if (carousel) carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Separador */}
        <div className="partners-divider"></div>

        {/* Clientes Corporativos */}
        <motion.div 
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3 
            className="partners-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Clientes que Confían en Nosotros
          </motion.h3>
        </motion.div>

        {/* Clients Logos - Infinite Loop */}
        <div className="partners-loop-container">
          <motion.div 
            className="partners-loop"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            <div className="partners-set">
              {clients.map((client, index) => (
                <motion.div 
                  key={`first-${index}`}
                  className="partners-card"
                  initial={{ 
                    backgroundColor: "rgb(240, 248, 255)",
                    scale: 0.8,
                    opacity: 0
                  }}
                  whileInView={{ 
                    backgroundColor: "rgb(255, 255, 255)",
                    scale: 1,
                    opacity: 1
                  }}
                  whileHover={{
                    backgroundColor: "rgb(248, 250, 252)",
                    scale: 1.05,
                    y: -2
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <span className={`partners-card-text ${client.color.replace('text-', '')}`}>
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="partners-set">
              {clients.map((client, index) => (
                <motion.div 
                  key={`second-${index}`}
                  className="partners-card"
                  initial={{ 
                    backgroundColor: "rgb(240, 248, 255)",
                    scale: 0.8,
                    opacity: 0
                  }}
                  whileInView={{ 
                    backgroundColor: "rgb(255, 255, 255)",
                    scale: 1,
                    opacity: 1
                  }}
                  whileHover={{
                    backgroundColor: "rgb(248, 250, 252)",
                    scale: 1.05,
                    y: -2
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index + clients.length) * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <span className={`partners-card-text ${client.color.replace('text-', '')}`}>
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
