<script setup>
import { useBlockRenderer } from "~/composable/useBlockRender";

const { find } = useStrapi();

const { data: homePage } = await useAsyncData("home", () =>
	find("home-page", {
		populate: [
			"blocks",
			"blocks.image",
			"blocks.buttons",
			"blocks.services",
			"blocks.items",
		],
	})
);

const blocks = computed(
	() => homePage.value?.data?.blocks || []
);
</script>

<template>
	<component
		v-for="block in blocks"
		:is="useBlockRenderer(block.__component)"
		:block="block"
		:key="block.id" />
</template>
