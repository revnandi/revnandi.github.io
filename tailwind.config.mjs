/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				display: ['Space Grotesk', 'sans-serif'],
				body: ['DM Sans', 'sans-serif'],
			}
		},
	},
	plugins: [
		require('tailwindcss-oklch')()
	],
}
