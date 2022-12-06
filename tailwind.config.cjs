/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	lightMode: ['class', '[data-theme="light"]'],
	a1Mode: ['class', '[font-size="A1"]'],
	a2Mode: ['class', '[font-size="A2"]'],
	a3Mode: ['class', '[font-size="A3"]'],
	content: ['./src/**/*.{astro,html,js,mjs,cjs,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		screens: {
			'xs': '320px',

			'sm': '560px',

			'md': '768px',

			'lg': '1024px',

			'xl': '1024px',

			'2xl': '1280px',
		},
		extend: {},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		fontSize: {
			'sm': '13px',
			'xs': '15px',
			'md': '17px',
			'lg': '19px',
			'xl': '21px',
			'2xl': '23px',
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
}