<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<BaseSection
		class="bg-accent text-neutral-white"
		:title="block.title">
		<div class="grid grid-cols-3 gap-20">
			<div
				v-for="article in block.articles"
				:key="article.id">
				<NuxtImg
					provider="strapi"
					:src="article.cover.url" />
				<h4 class="text-heading-xs my-2">
					{{ article.title }}
				</h4>
				<p class="text-body-md">
					{{ article.description }}
				</p>
			</div>
		</div>
	</BaseSection>
</template>
