/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				"primary-light": "#3f3d56",
				"secondary-light": "#817F94",
				"primary-dark": "#dadada",
				"secondary-dark": "#a09fb1"
			}
		}
	},
	darkMode: "class",
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
};
