<script setup>
const { find } = useStrapi();

const { data: homePage } = await useAsyncData("home", () =>
	find(
		"home-page?populate[0]=hero&populate[1]=hero.image&populate[2]=hero.buttons"
	)
);
</script>

<template>
	<Hero :hero="homePage.data.hero" />
</template>
