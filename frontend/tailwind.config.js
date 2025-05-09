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
					sm: "1rem",
					md: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},

			transitionDuration: {
				DEFAULT: "200ms",
				fast: "150ms",
				slow: "300ms",
			},

			boxShadow: {
				DEFAULT: "0 4px 16px -4px rgba(35, 38, 39, 0.1)",
				xs: "0 2px 4px 0 rgba(35, 38, 39, 0.06)",
				sm: "0 4px 8px -2px rgba(35, 38, 39, 0.08)",
				md: "0 6px 12px -4px rgba(35, 38, 39, 0.1)",
				lg: "0 8px 16px -6px rgba(35, 38, 39, 0.12)",
				xl: "0 12px 24px -8px rgba(35, 38, 39, 0.14)",
				"2xl": "0 16px 32px -10px rgba(35, 38, 39, 0.16)",
			},

			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [],
};
