export default defineNuxtPlugin(async (nuxtApp) => {
	const globalStore = useGlobalStore();
	await globalStore.getGlobal();

	nuxtApp.hook("app:mounted", () => {
		const metaTags = generateMetaTags(globalStore.seo);

		useHead({
			title: globalStore.siteName,

			htmlAttrs: {
				lang: globalStore?.lang || "en",
			},

			meta: metaTags,

			link: [
				{
					rel: "icon",
					type: "image/png",
					href:
						"http://localhost:1337" +
						globalStore?.favicon?.url,
				},
			],
		});
	});
});
