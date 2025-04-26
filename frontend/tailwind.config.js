/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				body: ["Quicksand", "sans-serif"],
				heading: ["Montserrat", "serif"],
			},

			fontSize: {
				"body-xl": "20px",
				"body-lg": "18px",
				"body-md": "16px",
				"body-sm": "14px",
				"body-xs": "12px",

				"heading-4xl": "82px",
				"heading-3xl": "74px",
				"heading-2xl": "66px",
				"heading-xl": "58px",
				"heading-lg": "50px",
				"heading-md": "42px",
				"heading-sm": "34px",
				"heading-xs": "26px",
				"heading-xxs": "20px",
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
