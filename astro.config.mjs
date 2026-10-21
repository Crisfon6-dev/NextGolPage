// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nextgol.com',
  integrations: [
    sitemap({
      // Phase 1 is Spanish-only: /en/ is redirected (vercel.json) and kept out of the sitemap.
      filter: (page) => !page.includes('/en/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
