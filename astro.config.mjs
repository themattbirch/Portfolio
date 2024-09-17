import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), svelte(), react(), icon()],
  site: "https://mattbirch.co",

  content: {
    fields: [{ name: "slug", type: "string" }],
  },
  build: {
    viewTransitions: true,
  },
});
