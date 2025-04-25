export default defineNuxtPlugin(async (nuxtApp) => {
	const globalStore = useGlobalStore();

	await globalStore.getSettings();

	nuxtApp.hook("app:mounted", () => {
		const seoData = globalStore.defaultSeo;

		const metaTags = generateMetaTags(seoData);
		console.log(metaTags);
		useHead(metaTags);
	});
});
