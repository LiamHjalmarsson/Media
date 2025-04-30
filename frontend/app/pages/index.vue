<script setup>
const { find } = useStrapi();

const { data: homePage } = await useAsyncData("home", () =>
	find("home-page", {
		populate: [
			"hero.image",
			"hero.buttons",
			"blocks",
			"blocks.image",
			"blocks.buttons",
			"blocks.services",
			"blocks.items",
			"blocks.cards",
			"blocks.solution",
			"blocks.full-image",
		],
	})
);

const blocks = computed(
	() => homePage.value?.data?.blocks || []
);

const hero = computed(
	() => homePage.value?.data?.hero || []
);
</script>

<template>
	<Hero :block="hero" />

	<component
		v-for="block in blocks"
		:is="useBlockRenderer(block.__component)"
		:block="block"
		:key="block.id" />
</template>
