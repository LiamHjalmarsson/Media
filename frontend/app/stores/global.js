import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
	const settings = ref([]);

	const contact = ref({});
	const menuLinks = ref([]);
	const socialLinks = ref([]);
	const cookie = ref({});

	const { find } = useStrapi();

	const getSettings = async () => {
		const { data } = await find("setting?populate=*");
		settings.value = data;

		menuLinks.value = data.menu;
	};

	return {
		settings,
		menuLinks,

		getSettings,
	};
});
