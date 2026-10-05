// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	// TODO : remplacer par l'URL réelle du site une fois en ligne (utilisée pour
	// le canonical, le sitemap et les balises Open Graph).
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), icon()],

	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Fraunces',
			cssVariable: '--font-fraunces',
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'Times New Roman', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Parisienne',
			cssVariable: '--font-script',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Segoe Script', 'Brush Script MT', 'cursive'],
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
