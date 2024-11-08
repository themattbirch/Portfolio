/// <reference types="astro/client" />

declare module 'kwesforms';

declare global {
  interface Window {
    initializeSkillToggles?: () => void;
    updateTheme: (theme: string) => void;
    dataLayer?: any[];
    gtag?: {
      (command: 'js', date: Date): void;
      (command: 'config', targetId: string, config?: object): void;
      (command: string, ...args: any[]): void;
    };
  }
}

export {};