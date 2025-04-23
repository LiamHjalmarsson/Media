/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Graphik", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},

			fontSize: {
				"body-xl": "20px",
				"body-lg": "18px",
				"body-md": "16px",
				"body-sm": "14px",
				"body-xs": "12px",

				"heading-4xl": "96px",
				"heading-3xl": "80px",
				"heading-2xl": "54px",
				"heading-xl": "48px",
				"heading-lg": "42px",
				"heading-md": "36px",
				"heading-sm": "30px",
				"heading-xs": "24px",
			},

			colors: {
				primary: {
					DEFAULT: "#Ae445a",
					hover: "#CC6881",
					active: "#Ae445a",
					focus: "#9e384a",
					disabled: "#f8ebef",
				},

				secondary: {
					DEFAULT: "#F39F5A",
					hover: "#f39f5a",
					active: "#df5b17",
					disabled: "#b94515",
					focus: "#fdedd7",
				},

				accent: {
					DEFAULT: "#1D1A39",
					medium: "#3b3778",
					light: "#443c97",
				},

				neutral: {
					DEFAULT: "#232627",
					black: "#232627",
					darkGray: "#4D4D4D",
					gray: "#df5b17",
					lightGray: "#89939E",
					silver: "#E6ECF4",
					white: "#FEFDFD",
				},
			},

			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
				},
			},

			screens: {},
		},
	},
	plugins: [],
};
