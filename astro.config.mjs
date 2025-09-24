// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages - actualiza con tu nombre de repositorio
  base: '/landing-General-services',
  site: 'https://tu-usuario.github.io/landing-General-services',
  output: 'static',
  integrations: [tailwind()]
});