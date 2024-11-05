import type { CollectionEntry } from 'astro:content';

export interface PostDate {
  raw: Date;
  formatted: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  date: PostDate;
  author: string;
  image: {
    src: string;
    alt?: string;
  } | string;
  categories: string[];
  featured?: boolean;
}

export type BlogPost = CollectionEntry<'posts'>;

export function isImageObject(image: any): image is { src: string; alt?: string } {
  return typeof image === 'object' && image !== null && 'src' in image;
}