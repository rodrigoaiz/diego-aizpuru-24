import animations from 'tailwindcss-animated'
import flowbite from 'flowbite/plugin'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
		extend: {
      colors: {
        light: 'rgb(var(--light) / <alpha-value>)',
        dark: 'rgb(var(--darkest-blue) / <alpha-value>)',
        red: 'rgb(var(--red) / <alpha-value>)',
      }
    },
	},
	plugins: [
		animations,
		flowbite
	],
}
