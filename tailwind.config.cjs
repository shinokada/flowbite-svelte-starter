const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
  
	theme: {
		colors: {
			'haiti': '#130c2b',
			'ebony':'#0B0717',
			'blackpearl': '#04020c',
			'ricecake': '#fffef2'
    },
		extend: {}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
