import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.BASE_URL || 'https://mattbirch.co',
  output: 'server',
  adapter: node({
    mode: 'standalone',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3001,
  }),
  integrations: [
    react(),
    tailwind({
      config: { path: './tailwind.config.js' },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
