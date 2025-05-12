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
		<div class="flex gap-10 overflow-auto">
			<FeatureArticle
				v-for="article in block.articles"
				:key="article.id"
				:article="article" />
		</div>
	</BaseSection>
</template>
