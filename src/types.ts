// src/types.ts
import type { ImageMetadata } from "astro";
import type { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react"; // 👈 Add this new import

// Date handling
export interface FormattedDate {
  raw: Date; // Raw Date object
  formatted: string; // Formatted display version
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
export interface Skill {
  name: string;
  description?: string;
  // 👇 Change this back to the component type
  icon?: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  level?: string;
}
