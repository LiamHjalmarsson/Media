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
			const { data: global } = await find("global", {
				populate: [
					"seo",
					"favicon",
					"header.links",
					"header.logo",
					"footer.footerColumn.links",
					"contact.socialLinks",
				],
			});

			seo.value = global.seo;
			header.value = global.header;
			footer.value = global.footer;
			contact.value = global.contact;

			siteName.value = global.siteName;
			favicon.value = global.favicon;
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
