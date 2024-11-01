
declare module 'astro-imagetools/components' {
  import { AstroComponentFactory } from 'astro';

  interface ImageProps {
    src: string;
    alt: string;
    class?: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    formats?: string[];
  }

  export const Image: AstroComponentFactory<ImageProps>;
}