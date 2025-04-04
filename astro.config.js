import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  site: process.env.BASE_URL || "https://mattbirch.co",
  output: "server",
  adapter: node({
    mode: "standalone",
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3001,
  }),
  integrations: [
    tailwind({
      config: { path: "./tailwind.config.js" },
    }),
    react(),
    icon(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
