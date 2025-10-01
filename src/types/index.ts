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

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
