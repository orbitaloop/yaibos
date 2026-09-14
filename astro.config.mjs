import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yaibos.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
