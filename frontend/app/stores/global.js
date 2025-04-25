import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
	const siteName = ref("");
	const favIcon = ref(null);

	const defaultSeo = ref({});

	const cookie = ref("");
	const gdpr = ref("");

	const socials = ref([]);

	const { find } = useStrapi();

	const getSettings = async () => {
		const { data } = await find("setting?populate=*");

		siteName.value = data.id;
	};

	return {
		siteName,
		favIcon,
		defaultSeo,
		cookie,
		gdpr,
		socials,
		getSettings,
	};
});
