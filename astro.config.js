// astro.config.js
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.BASE_URL || "https://mattbirch.co",
  output: "static",
  integrations: [
    tailwind({ config: { path: "./tailwind.config.js" } }),
    react(),
    icon(),
    sitemap({ changefreq: "weekly", priority: 0.7, lastmod: new Date() }),
  ],
});
