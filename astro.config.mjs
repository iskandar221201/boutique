import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [react(), keystatic()],
    vite: {
        plugins: [tailwind()],
    },
});
