/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbdcc1',
          300: '#f8c9a2',
          400: '#f5b683',
          500: '#f2a364',
          600: '#d66536',
          700: '#b8542d',
          800: '#9a4324',
          900: '#7c321b',
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
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbdcc1',
          300: '#f8c9a2',
          400: '#f5b683',
          500: '#f2a364',
          600: '#d66536',
          700: '#b8542d',
          800: '#9a4324',
          900: '#7c321b',
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
