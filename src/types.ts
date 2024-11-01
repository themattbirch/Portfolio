// src/types.ts
import type { ImageMetadata } from 'astro';

// Date handling
export interface FormattedDate {
  raw: Date;         
  formatted: string;
}

export interface BlogPostFrontmatter {
  author: string;
  categories: string[];
  date: FormattedDate;
  featured: boolean;
  image: ImageMetadata;
  title: string;
  description: string;
  alt?: string;
  updatedDate?: FormattedDate;
  ogImage?: string;
}
