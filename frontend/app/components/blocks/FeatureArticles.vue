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
		<div class="grid grid-cols-2 lg:grid-cols-3 gap-10">
			<FeatureArticle
				v-for="article in block.articles"
				:key="article.id"
				:article="article" />
		</div>
	</BaseSection>
</template>
