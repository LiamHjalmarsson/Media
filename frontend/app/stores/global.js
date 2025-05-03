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
			const { data } = await useAsyncData("global", () =>
				find("global", {
					populate: [
						"defaultSeo.metaImage",
						"favicon",
						"header.links",
						"header.logo",
						"footer.footerColumn.links",
						"contact.socialLinks",
					],
				})
			);

			const global = data.value.data;

			seo.value = global.defaultSeo;
			header.value = global.header;
			footer.value = global.footer;
			contact.value = global.contact;

			siteName.value = global.siteName;
			favicon.value = global.favicon;
		} catch (error) {
			console.log("error", error);
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
