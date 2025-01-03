import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    // Only keeping publishDate for URL generation and sorting fallback
    publishDate: z.string().transform(str => new Date(str)).optional(),
  }),
});

export const collections = {
  'blog': blog,
};