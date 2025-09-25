// Configuración centralizada del sitio

export const SITE_CONFIG = {
  // Información básica
  name: "Nutech",
  description: "Especialistas en transformación digital, automatización de procesos (RPA) e inteligencia artificial para empresas.",
  url: "https://Estremix-01100001.github.io/servicios-generales-nutech",
  author: "Nutech - Transformación Digital",
  
  // SEO
  keywords: [
    "transformación digital",
    "RPA",
    "automatización",
    "inteligencia artificial",
    "procesos de negocio",
    "consultoría tecnológica"
  ],
  
  // Redes sociales
  social: {
    linkedin: "https://www.linkedin.com/company/nutechglobal/?originalSubdomain=pe",
    twitter: "@nutech",
  },
  
  // Rutas de navegación
  navigation: [
    { href: "#inicio", label: "Inicio" },
    { href: "#crecimiento", label: "Crecimiento" },
    { href: "#servicios-detallados", label: "Servicios" },
    { href: "#partners", label: "Partners" },
    { href: "#academia", label: "Academia" },
    { href: "#perspectiva", label: "Perspectiva" },
    { href: "#contacto", label: "Contacto" }
  ],
  
  // Breakpoints responsive
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  },
  
  // Configuración de animaciones
  animations: {
    defaultDuration: 0.6,
    fastDuration: 0.3,
    slowDuration: 1.0,
    defaultEase: "easeOut"
  },
  
  // Configuración de márgenes
  margins: {
    desktop: 100,
    tablet: 50,
    mobile: 20
  }
} as const;

export type SiteConfig = typeof SITE_CONFIG;
