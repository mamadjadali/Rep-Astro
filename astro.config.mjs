import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mamadjadali.github.io',
	integrations: [
		starlight({
			title: 'REP',
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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why??', link: 'rep/thanks/' },
						{ label: 'About us', link: 'rep/about/' },
					],
				},
				{
					label: 'Networking Solutions',
					autogenerate: { directory: 'networking' },
				},
				{
					label: 'Security Solutions',
					autogenerate: { directory: 'security' },
				},
			],
		}),
	],
});
