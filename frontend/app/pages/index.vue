<script setup>
const nuxtApp = useNuxtApp();
const { find } = useStrapi();

const { data: homePage } = await useAsyncData(
	"home",
	async () => {
		return await find(
			"home-page?populate[0]=hero&populate[1]=hero.image&populate[2]=hero.buttons"
		);
	},
	{
		getCachedData(key) {
			const data =
				nuxtApp.payload.data[key] ||
				nuxtApp.static.data[key];

			if (!data) {
				return;
			}
		},
	}
);
</script>

<template>
	<Hero :hero="homePage.data.hero" />
</template>
