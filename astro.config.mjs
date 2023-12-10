import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mamadjadali.github.io',
	base: '/Rep-Astro',
	integrations: [
		starlight({
			title: 'REP',
			defaultLocale: 'en', // optional
			locales: {
				en: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},
				'fa': {
					label: 'Persian',
					lang: 'fa',
					dir: 'rtl',
				},
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/style/custom.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'REP',
					translations: {
						'fa': 'رپـــــ',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why??',
							translations: {
								'fa': 'چرا؟؟',
							},
							link: 'rep/thanks/' },
						{ label: 'About us',
							translations: {
								'fa': 'درباره ما',
							},
							link: 'rep/about/' },
					],
				},
				{
					label: 'Networking Solutions',
					translations: {
						'fa': 'شـــبــکه',
					},
					autogenerate: { directory: 'networking' },
				},
				{
					label: 'Security Solutions',
					translations: {
						'fa': 'امــنـیــتــ',
					},
					autogenerate: { directory: 'security' },
				},
			],
		}),
	],
});
