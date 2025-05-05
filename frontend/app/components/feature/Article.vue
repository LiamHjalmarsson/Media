<script setup>
defineProps({
	article: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<NuxtLink
		:to="`articles/${article.slug}`"
		class="cursor-pointer group overflow-hidden">
		<NuxtImg
			provider="strapi"
			:src="article.cover.url"
			:alt="article.cover.alternativeText || ''"
			class="mb-4" />
		<h3 class="text-heading-xs mb-2">
			{{ article.title }}
		</h3>
		<p class="text-body-md line-clamp-2">
			{{ article.description }}
		</p>
	</NuxtLink>
</template>
