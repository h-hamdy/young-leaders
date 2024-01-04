/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
			'primary' : '#EA3B15',
			'primary-hover' : "#D02800",
			'black-1': '#2A3342',
			'gray-1': '#556987',
		}
	  },
	},
	plugins: [],
  }