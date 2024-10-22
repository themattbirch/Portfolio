// config.ts
import { defineCollection, z } from "astro:content";
import { format } from 'date-fns';

const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            author: z.string(),
            categories: z.array(z.string()),
            date: z.string().transform((str) => ({
                raw: new Date(str), // Keep the raw Date object for sorting
                formatted: format(new Date(str), "MMMM d, yyyy"), // Keep the formatted string for display
            })),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            description: z.string(),
            alt: z.string().optional(), // Optional alt text for the image
            updatedDate: z
                .string()
                .optional()
                .transform((str) =>
                    str
                        ? {
                            raw: new Date(str),
                            formatted: format(new Date(str), "MMMM d, yyyy"),
                        }
                        : undefined
                ),
            ogImage: z.string().optional(), // Optional OG image URL
        }),
});

export const collections = {
    posts: postsCollection,
};