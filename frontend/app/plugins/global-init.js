export default defineNuxtPlugin(async (nuxtApp) => {
	const globalStore = useGlobalStore();

	await globalStore.getSettings();

	// Once app is mounted, set the meta tags
	nuxtApp.hook("app:mounted", () => {
		const seoData = globalStore.defaultSeo;
		const metaTags = generateMetaTags(seoData);
		useHead(metaTags);
	});
});
