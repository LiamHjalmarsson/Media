import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
	const settings = ref([]);

	const header = ref([]);
	const footer = ref([]);

	const { find } = useStrapi();

	const getSettings = async () => {
		try {
			const [
				settingsResponse,
				footerResponse,
				headerResponse,
			] = await Promise.all([
				find("global?populate=*"),
				find(
					"footer?populate[0]=footerColumn&populate[1]=footerColumn.links"
				),
				find("header?fields[0]=showLogo&populate[0]=links"),
			]);

			settings.value = settingsResponse.data;
			header.value = headerResponse.data;
			footer.value = footerResponse.data;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		settings,
		header,
		footer,

		getSettings,
	};
});
