// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages - configuración correcta
  base: '/servicios-generales-nutech',
  site: 'https://Estremix-01100001.github.io/servicios-generales-nutech',
  output: 'static',
  integrations: [tailwind()]
});