// Tipos centralizados para toda la aplicación

export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    linkedin: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  features: string[];
  hasButton?: boolean;
}

export interface Partner {
  name: string;
  color: string;
  logo?: string;
  website?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon?: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface ResponsiveBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}
