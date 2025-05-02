import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
	const seo = ref([]);
	const header = ref([]);
	const footer = ref([]);
	const contact = ref([]);

	const siteName = ref(null);
	const lang = ref(null);
	const favicon = ref(null);

	const { find } = useStrapi();

	const getGlobal = async () => {
		try {
			// const { data: global } = await find("global", {
			// 	populate: [
			// 		"seo",
			// 		"favicon",
			// 		"header.links",
			// 		"header.logo",
			// 		"footer.footerColumn.links",
			// 		"contact.socialLinks",
			// 	],
			// });

			const { data: global } = await useAsyncData(
				"global",
				() =>
					find("global", {
						populate: [
							"defaultSeo",
							"favicon",
							"header.links",
							"header.logo",
							"footer.footerColumn.links",
							"contact.socialLinks",
						],
					})
			);

			seo.value = global.value.data.defaultSeo;
			header.value = global.value.data.header;
			footer.value = global.value.data.footer;
			contact.value = global.value.data.contact;

			siteName.value = global.value.data.siteName;
			favicon.value = global.value.data.favicon;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		siteName,
		favicon,
		seo,
		header,
		footer,
		contact,

		getGlobal,
	};
});
