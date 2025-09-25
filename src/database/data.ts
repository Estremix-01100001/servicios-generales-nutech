// Datos de ejemplo para el proyecto de servicios generales
import type { Service, ServiceCategory, Testimonial, TeamMember, CompanyInfo } from './schema';

export const companyInfo: CompanyInfo = {
  name: "Nutech",
  description: "Especialistas en transformación digital, automatización de procesos (RPA) e inteligencia artificial para empresas.",
  address: "Av. Principal 123, Lima, Perú",
  phone: "+1 (555) 123-4567",
  email: "contacto@nutech.com",
  website: "https://nutech.com",
  socialMedia: {
    linkedin: "https://linkedin.com/company/nutech"
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

export const serviceCategories: ServiceCategory[] = [];

export const services: Service[] = [];

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
