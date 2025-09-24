/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f2f5',
          100: '#e1e5ea',
          200: '#c3cad4',
          300: '#a5afbe',
          400: '#8794a8',
          500: '#697992',
          600: '#37477D',
          700: '#2d3a6b',
          800: '#232d59',
          900: '#192047',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#1e1e1e',
          900: '#171717',
        },
        accent: {
          50: '#f0f2f5',
          100: '#e1e5ea',
          200: '#c3cad4',
          300: '#a5afbe',
          400: '#8794a8',
          500: '#697992',
          600: '#37477D',
          700: '#2d3a6b',
          800: '#232d59',
          900: '#192047',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
