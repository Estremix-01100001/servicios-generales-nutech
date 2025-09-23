// Datos de ejemplo para el proyecto de servicios generales
import type { Service, ServiceCategory, Testimonial, TeamMember, CompanyInfo } from './schema';

export const companyInfo: CompanyInfo = {
  name: "Servicios Generales Pro",
  description: "Ofrecemos servicios de limpieza, mantenimiento y soluciones integrales para hogares y empresas.",
  address: "Av. Principal 123, Ciudad, País",
  phone: "+1 (555) 123-4567",
  email: "info@serviciosgenerales.com",
  website: "https://serviciosgenerales.com",
  socialMedia: {
    facebook: "https://facebook.com/serviciosgenerales",
    instagram: "https://instagram.com/serviciosgenerales",
    linkedin: "https://linkedin.com/company/serviciosgenerales"
  },
  businessHours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Cerrado"
  }
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "1",
    name: "Limpieza",
    description: "Servicios de limpieza residencial y comercial",
    icon: "🧹",
    color: "#3B82F6",
    isActive: true
  },
  {
    id: "2",
    name: "Mantenimiento",
    description: "Mantenimiento preventivo y correctivo",
    icon: "🔧",
    color: "#10B981",
    isActive: true
  },
  {
    id: "3",
    name: "Jardinería",
    description: "Cuidado y mantenimiento de jardines",
    icon: "🌱",
    color: "#059669",
    isActive: true
  },
  {
    id: "4",
    name: "Seguridad",
    description: "Servicios de seguridad y vigilancia",
    icon: "🛡️",
    color: "#DC2626",
    isActive: true
  }
];

export const services: Service[] = [
  {
    id: "1",
    name: "Limpieza Residencial",
    description: "Servicio completo de limpieza para hogares, incluyendo todas las habitaciones, baños, cocina y áreas comunes.",
    shortDescription: "Limpieza completa de hogares",
    icon: "🏠",
    image: "/assets/images/limpieza-residencial.jpg",
    price: "Desde $50/hora",
    features: [
      "Limpieza de todas las habitaciones",
      "Desinfección de baños y cocina",
      "Aspirado y trapeado",
      "Limpieza de ventanas",
      "Productos ecológicos"
    ],
    category: serviceCategories[0],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    name: "Limpieza Comercial",
    description: "Servicios de limpieza para oficinas, tiendas y espacios comerciales con horarios flexibles.",
    shortDescription: "Limpieza para espacios comerciales",
    icon: "🏢",
    image: "/assets/images/limpieza-comercial.jpg",
    price: "Desde $80/hora",
    features: [
      "Limpieza nocturna disponible",
      "Mantenimiento de oficinas",
      "Limpieza de cristales",
      "Desinfección profunda",
      "Personal capacitado"
    ],
    category: serviceCategories[0],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3",
    name: "Mantenimiento Eléctrico",
    description: "Servicios de mantenimiento y reparación eléctrica para hogares y empresas.",
    shortDescription: "Reparaciones y mantenimiento eléctrico",
    icon: "⚡",
    image: "/assets/images/mantenimiento-electrico.jpg",
    price: "Desde $100/hora",
    features: [
      "Instalaciones eléctricas",
      "Reparación de cortocircuitos",
      "Instalación de luminarias",
      "Mantenimiento preventivo",
      "Certificaciones vigentes"
    ],
    category: serviceCategories[1],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "4",
    name: "Jardinería y Paisajismo",
    description: "Diseño, mantenimiento y cuidado de jardines residenciales y comerciales.",
    shortDescription: "Cuidado y diseño de jardines",
    icon: "🌿",
    image: "/assets/images/jardineria.jpg",
    price: "Desde $60/hora",
    features: [
      "Diseño de jardines",
      "Podado y mantenimiento",
      "Sistema de riego",
      "Plantación de especies",
      "Mantenimiento mensual"
    ],
    category: serviceCategories[2],
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
