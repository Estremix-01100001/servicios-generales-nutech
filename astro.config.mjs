// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://servicios-generales-nutech.vercel.app',
  output: 'static',
  integrations: [tailwind()]
});