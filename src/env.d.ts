/// <reference path="../.astro/types.d.ts" />
import "astro/client";
import "vite/client";

interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Make sure Astro recognizes Tailwind classes
declare module "astro:content" {
  interface Render {
    ".md": Promise<{
      Content: import("astro").MarkdownInstance<{}>["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}
