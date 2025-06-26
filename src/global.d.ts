/// <reference types="astro/client" />

declare module "kwesforms";

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
declare module "*.css";

// explicitly cover Swiper’s CSS entry-points
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
