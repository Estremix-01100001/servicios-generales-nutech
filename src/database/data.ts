// Datos de ejemplo para el proyecto de servicios generales
import type { Service, ServiceCategory, Testimonial, TeamMember, CompanyInfo } from './schema';

export const companyInfo: CompanyInfo = {
  name: "Nutech",
  description: "Especialistas en transformación digital, automatización de procesos (RPA) e inteligencia artificial para empresas.",
  address: "Av. Javier Prado Este 4200, San Isidro, Lima",
  phone: "+1 (813) 595-4933",
  email: "sfernandez@nutechcorp.com",
  website: "https://nutechcorp.com",
  socialMedia: {
    facebook: "https://facebook.com/nutechcorp",
    instagram: "https://instagram.com/nutechcorp",
    linkedin: "https://linkedin.com/company/nutechcorp"
  },
  businessHours: {
    monday: "8:30 AM - 6:30 PM",
    tuesday: "8:30 AM - 6:30 PM",
    wednesday: "8:30 AM - 6:30 PM",
    thursday: "8:30 AM - 6:30 PM",
    friday: "8:30 AM - 6:30 PM",
    saturday: "9:30 AM - 4:30 PM",
    sunday: "Cerrado"
  }
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "1",
    name: "RPA - Automatización Robótica",
    description: "Automatización Robótica de Procesos",
    icon: "🤖",
    color: "#3B82F6",
    isActive: true
  },
  {
    id: "2",
    name: "Inteligencia Artificial",
    description: "Machine Learning & Analytics",
    icon: "🧠",
    color: "#10B981",
    isActive: true
  },
  {
    id: "3",
    name: "Transformación Digital",
    description: "Modernización Empresarial",
    icon: "🚀",
    color: "#F59E0B",
    isActive: true
  }
];

export const services: Service[] = [
  {
    id: "1",
    name: "Seguridad & Ciberseguridad",
    description: "Protección integral frente a amenazas digitales y cumplimiento normativo",
    shortDescription: "Protección Digital Integral",
    icon: "🛡️",
    image: "/assets/images/seguridad.jpg",
    price: "Consultar",
    features: [
      "Auditorías de seguridad",
      "Gestión de vulnerabilidades",
      "Cumplimiento ISO 27001",
      "SOC y monitoreo 24/7"
    ],
    category: serviceCategories[2],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    name: "IT Staffing",
    description: "Outsourcing de personal TI altamente capacitado y certificado",
    shortDescription: "Talento Tecnológico Especializado",
    icon: "👥",
    image: "/assets/images/staffing.jpg",
    price: "Consultar",
    features: [
      "Desarrolladores senior",
      "Arquitectos de soluciones",
      "Especialistas DevOps",
      "Consultores certificados"
    ],
    category: serviceCategories[2],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3",
    name: "Desarrollo Web / Mobile",
    description: "Creación de plataformas digitales personalizadas y escalables",
    shortDescription: "Aplicaciones Empresariales",
    icon: "📱",
    image: "/assets/images/desarrollo.jpg",
    price: "Consultar",
    features: [
      "Apps móviles nativas",
      "Progressive Web Apps",
      "Integraciones API",
      "Cloud-native architecture"
    ],
    category: serviceCategories[2],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "4",
    name: "Capacitación Ejecutiva",
    description: "Programas de formación para líderes en transformación digital",
    shortDescription: "Formación de Líderes Digitales",
    icon: "🎓",
    image: "/assets/images/capacitacion.jpg",
    price: "Consultar",
    features: [
      "Workshops ejecutivos",
      "Certificaciones técnicas",
      "Training on-demand",
      "Mentoring estratégico"
    ],
    category: serviceCategories[2],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5",
    name: "Consultoría Tecnológica",
    description: "Consultoría especializada para adopción de tecnologías emergentes",
    shortDescription: "Asesoría Estratégica Digital",
    icon: "💡",
    image: "/assets/images/consultoria.jpg",
    price: "Consultar",
    features: [
      "Assessment tecnológico",
      "Arquitectura empresarial",
      "Estrategia cloud",
      "Roadmap de innovación"
    ],
    category: serviceCategories[2],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "6",
    name: "Análisis de Datos",
    description: "Transformación de datos en insights accionables para decisiones estratégicas",
    shortDescription: "Business Intelligence & Analytics",
    icon: "📊",
    image: "/assets/images/analytics.jpg",
    price: "Consultar",
    features: [
      "Data warehousing",
      "Dashboards ejecutivos",
      "Análisis predictivo",
      "Big Data & Analytics"
    ],
    category: serviceCategories[1],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    role: "Propietaria de Casa",
    company: "Residencial Los Pinos",
    content: "Excelente servicio de limpieza. Muy profesionales y puntuales. Mi casa quedó impecable.",
    rating: 5,
    avatar: "/assets/images/testimonial-1.jpg",
    isActive: true,
    createdAt: new Date()
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    role: "Gerente",
    company: "Empresa ABC",
    content: "El servicio de mantenimiento eléctrico ha sido excepcional. Muy recomendado para empresas.",
    rating: 5,
    avatar: "/assets/images/testimonial-2.jpg",
    isActive: true,
    createdAt: new Date()
  },
  {
    id: "3",
    name: "Ana Martínez",
    role: "Directora",
    company: "Centro Comercial Plaza",
    content: "La limpieza comercial nocturna es perfecta para nuestro centro comercial. Muy satisfechos.",
    rating: 5,
    avatar: "/assets/images/testimonial-3.jpg",
    isActive: true,
    createdAt: new Date()
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Roberto Silva",
    role: "Director General",
    bio: "Más de 15 años de experiencia en servicios generales y gestión de equipos.",
    image: "/assets/images/team-1.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/roberto-silva",
      email: "roberto@serviciosgenerales.com"
    },
    isActive: true
  },
  {
    id: "2",
    name: "Laura Fernández",
    role: "Supervisora de Calidad",
    bio: "Especialista en control de calidad y capacitación de personal.",
    image: "/assets/images/team-2.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/laura-fernandez",
      email: "laura@serviciosgenerales.com"
    },
    isActive: true
  },
  {
    id: "3",
    name: "Miguel Torres",
    role: "Técnico Especializado",
    bio: "Técnico certificado en mantenimiento eléctrico y sistemas de seguridad.",
    image: "/assets/images/team-3.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/miguel-torres",
      email: "miguel@serviciosgenerales.com"
    },
    isActive: true
  }
];
