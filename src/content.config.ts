import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: './src/content/products' }),
    schema: z.object({
        name: z.string(),
        price: z.number(),
        collection: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        materialHeritage: z.string().optional(),
        mainImage: z.string().optional(),
        gallery: z.array(z.string()).optional(),
        modelInfo: z.object({
            wearingSize: z.string(),
            height: z.string(),
            bustWaist: z.string(),
            modelImage: z.string(),
        }).optional(),
        sizeChart: z.array(z.object({
            label: z.string(),
            s: z.string(),
            m: z.string(),
            l: z.string(),
        })).optional(),
    }),
});

export const collections = { products };
