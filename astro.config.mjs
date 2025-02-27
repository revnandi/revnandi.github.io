import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://revnandi.dev',
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: { theme: "css-variables" },
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});