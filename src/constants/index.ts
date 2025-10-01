// Constantes centralizadas de la aplicación

export const PARTNERS = [
  { name: "Hayduk", color: "text-blue-600" },
  { name: "Lindcorp", color: "text-secondary-600" },
  { name: "Tambo+", color: "text-green-600" },
  { name: "ARUMA", color: "text-purple-600" },
  { name: "NIUBIZ", color: "text-red-600" },
  { name: "RENIEC", color: "text-blue-600" },
  { name: "PROMPERU", color: "text-secondary-600" },
  { name: "Tambo+", color: "text-green-600" },
  { name: "ARUMA", color: "text-purple-600" },
  { name: "NIUBIZ", color: "text-red-600" }
] as const;

export const ANIMATION_DELAYS = {
  FAST: 100,
  NORMAL: 200,
  SLOW: 400
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200
} as const;

export const MARGINS = {
  MOBILE: 20,
  TABLET: 50,
  DESKTOP: 100
} as const;

export const COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  ACCENT: {
    50: '#fef7ed',
    100: '#fdedd3',
    200: '#fbd9a5',
    300: '#f8c06d',
    400: '#f59e0b',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12'
  },
  SECONDARY: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  }
} as const;

export const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem'
} as const;

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem'
} as const;
