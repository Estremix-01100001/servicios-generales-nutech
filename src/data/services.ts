export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  icon?: string;
  description: string;
  features: string[];
  category?: 'core' | 'complementary' | 'consulting';
  featured?: boolean;
}

// 🧩 CORE SERVICES - Servicios estratégicos principales
export const coreServices: Service[] = [
  {
    id: "rpa",
    title: "RPA (Robotic Process Automation)",
    subtitle: "Automatización Robótica de Procesos",
    image: "/servicios-generales-nutech/rpa.png",
    description: "Automatización de tareas repetitivas para aumentar la productividad hasta en 300%",
    features: [
      "Automatización de procesos back-office",
      "Integración con sistemas legacy",
      "Reducción de errores humanos",
      "ROI comprobado en 6 meses"
    ],
    category: 'core',
    featured: true
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    subtitle: "Machine Learning & Analytics",
    image: "/servicios-generales-nutech/automatización.png",
    description: "Soluciones de IA para toma de decisiones inteligentes y análisis predictivo",
    features: [
      "Machine Learning y Deep Learning",
      "Análisis predictivo avanzado",
      "Procesamiento de lenguaje natural (NLP)",
      "Computer Vision y OCR"
    ],
    category: 'core',
    featured: true
  },
  {
    id: "transformacion-digital",
    title: "Transformación Digital",
    subtitle: "Modernización Empresarial 360°",
    image: "/servicios-generales-nutech/transformacion-digital.jpg",
    description: "Transformación completa de procesos mediante tecnologías digitales avanzadas",
    features: [
      "Diagnóstico digital completo",
      "Roadmap de transformación",
      "Implementación ágil",
      "Change management"
    ],
    category: 'core',
    featured: true
  }
];

// Mantener mainServices para compatibilidad
export const mainServices = coreServices;

// ⚙️ COMPLEMENTARIOS - Servicios de soporte técnico
export const complementaryServices: Service[] = [
  {
    id: "cybersecurity",
    title: "Seguridad & Ciberseguridad",
    subtitle: "Protección Digital Integral",
    image: "/servicios-generales-nutech/seguridad-ciberseguridad.jpg",
    description: "Protección integral frente a amenazas digitales y cumplimiento normativo",
    features: [
      "Auditorías de seguridad",
      "Gestión de vulnerabilidades",
      "Cumplimiento ISO 27001",
      "SOC y monitoreo 24/7"
    ],
    category: 'complementary'
  },
  {
    id: "it-staffing",
    title: "IT Staffing",
    subtitle: "Talento Tecnológico Especializado",
    image: "/servicios-generales-nutech/it-staffing.jpg",
    description: "Outsourcing de personal TI altamente capacitado y certificado",
    features: [
      "Desarrolladores senior",
      "Arquitectos de soluciones",
      "Especialistas DevOps",
      "Consultores certificados"
    ],
    category: 'complementary'
  },
  {
    id: "web-mobile",
    title: "Desarrollo Web / Mobile",
    subtitle: "Aplicaciones Empresariales",
    image: "/servicios-generales-nutech/desarrollo-web-mobile.jpg",
    description: "Creación de plataformas digitales personalizadas y escalables",
    features: [
      "Apps móviles nativas",
      "Progressive Web Apps",
      "Integraciones API",
      "Cloud-native architecture"
    ],
    category: 'complementary'
  }
];

// 📈 CONSULTORÍA & FORMACIÓN - Servicios estratégicos y educativos
export const consultingServices: Service[] = [
  {
    id: "executive-training",
    title: "Capacitación Ejecutiva",
    subtitle: "Formación de Líderes Digitales",
    image: "/servicios-generales-nutech/capacitacion-ejecutiva.jpg",
    description: "Programas de formación para líderes en transformación digital",
    features: [
      "Workshops ejecutivos",
      "Certificaciones técnicas",
      "Training on-demand",
      "Mentoring estratégico"
    ],
    category: 'consulting'
  },
  {
    id: "consultoria-tecnologica",
    title: "Consultoría Tecnológica",
    subtitle: "Asesoría Estratégica Digital",
    image: "/servicios-generales-nutech/consultoria-tecnologica.jpg",
    description: "Consultoría especializada para adopción de tecnologías emergentes",
    features: [
      "Assessment tecnológico",
      "Arquitectura empresarial",
      "Estrategia cloud",
      "Roadmap de innovación"
    ],
    category: 'consulting'
  },
  {
    id: "analisis-datos",
    title: "Análisis de Datos",
    subtitle: "Business Intelligence & Analytics",
    image: "/servicios-generales-nutech/analisis-datos.jpg",
    description: "Transformación de datos en insights accionables para decisiones estratégicas",
    features: [
      "Data warehousing",
      "Dashboards ejecutivos",
      "Análisis predictivo",
      "Big Data & Analytics"
    ],
    category: 'consulting'
  }
];

// Mantener additionalServices para compatibilidad
export const additionalServices: Service[] = [...complementaryServices, ...consultingServices];

// Mantener compatibilidad con el array original
export const services: Service[] = [...mainServices, ...additionalServices];
