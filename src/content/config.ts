// src/content/config.ts
import { defineCollection, z, type SchemaContext } from "astro:content";
import { format } from "date-fns";

const postsCollection = defineCollection({
  schema: ({ image }: SchemaContext) =>
    z.object({
      author: z.string(),
      categories: z.array(z.string()),
      date: z.string().transform((str) => ({
        raw: new Date(str),
        formatted: format(new Date(str), "MMMM d, yyyy"),
      })),
      featured: z.boolean().default(false),
      image: z.string(),
      title: z.string(),
      description: z.string(),
      alt: z.string().optional(),
      updatedDate: z
        .string()
        .optional()
        .transform((str) =>
          str
            ? {
                raw: new Date(str),
                formatted: format(new Date(str), "MMMM d, yyyy"),
              }
            : undefined,
        ),
      ogImage: z.string().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
