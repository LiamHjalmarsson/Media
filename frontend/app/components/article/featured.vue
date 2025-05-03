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
				:key="article.id"
				class="cursor-pointer group overflow-hidden">
				<NuxtImg
					provider="strapi"
					:src="article.cover.url"
					class="mb-4" />
				<h4 class="text-heading-xs mb-2">
					{{ article.title }}
				</h4>
				<p class="text-body-md line-clamp-2">
					{{ article.description }}
				</p>
			</div>
		</div>
	</BaseSection>
</template>
