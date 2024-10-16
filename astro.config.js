<<<<<<< HEAD
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
=======
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  output: "static",
  adapter: vercel(),
  server: {
    port: 3000,
  },
  site: "https://mattbirch.co",
>>>>>>> origin/main
  integrations: [
    react(),
    tailwind({
      config: { path: './tailwind.config.js' },
    }),
  ],
<<<<<<< HEAD
  build: {
    inlineStylesheets: 'auto',
  },
=======
>>>>>>> origin/main
});
