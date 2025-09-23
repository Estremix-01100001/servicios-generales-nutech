// Esquema de base de datos para servicios generales

export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  price?: string;
  features: string[];
  category: ServiceCategory;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  isActive: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  tags: string[];
  publishedAt: Date;
  isPublished: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  isActive: boolean;
}

export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
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
