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
  integrations: [
    tailwind({
      config: { path: "./tailwind.config.js" },
    }),
    react(),
    icon(),
  ],
});
