export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	future: {
		compatibilityVersion: 4,
	},

	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/strapi",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
	],

	strapi: {
		devtools: true,
	},

	image: {
		format: ["webp"],
		dir: "assets/images",
		strapi: {
			baseURL: "http://localhost:1337/",
		},
	},

	app: {
		head: {
			title: "Alt-media",
		},
	},
});
