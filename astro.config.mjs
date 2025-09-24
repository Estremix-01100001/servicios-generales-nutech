// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://estremix-01100001.github.io',
  base: '/servicios-generales-nutech',
  output: 'static',
  integrations: [tailwind()]
});