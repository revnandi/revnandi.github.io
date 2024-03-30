import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://revnandi.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: { theme: "css-variables" },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
  },
});