// src/env.d.ts

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

// Make sure Astro recognizes Tailwind classes for astro:content
declare module "astro:content" {
  interface Render {
    ".md": Promise<{
      Content: import("astro").MarkdownInstance<{}>["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

// Add the global Window interface for dataLayer and gtag
declare global {
  interface Window {
    initializeSkillToggles?: () => void;
    updateTheme: (theme: string) => void;
    dataLayer?: any[];
    gtag?: {
      (command: "js", date: Date): void;
      (command: "config", targetId: string, config?: object): void;
      (command: string, ...args: any[]): void;
    };
  }
}

// Add declarations for CSS and specific Swiper CSS modules
declare module "*.css";
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
