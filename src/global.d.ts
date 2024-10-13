/// <reference types="astro/client" />

declare module 'kwesforms';

declare global {
  interface Window {
    initializeSkillToggles?: () => void;
    updateTheme: (theme: string) => void;
  }
}

export {};