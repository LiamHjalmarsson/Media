export default defineNuxtPlugin(async (nuxtApp) => {
	const globalStore = useGlobalStore();
	await globalStore.getSettings();

	nuxtApp.hook("app:mounted", () => {
		const settings = globalStore.settings;

		const metaTags = generateMetaTags(settings.seo);

		useHead({
			title: settings.siteName,

			htmlAttrs: {
				lang: settings?.lang || "en",
			},

			meta: metaTags,

			link: [
				{
					rel: "icon",
					type: "image/png",
					href:
						"http://localhost:1337" +
						settings?.favicon?.url,
				},
			],
		});
	});
});
