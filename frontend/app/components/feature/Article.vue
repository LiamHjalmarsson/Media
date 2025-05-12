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
		class="cursor-pointer group overflow-hidden max-lg:min-w-[48%] flex-1">
		<NuxtImg
			provider="strapi"
			:src="article.cover.url"
			:alt="article.cover.alternativeText || ''"
			class="mb-5" />
		<h3 class="text-heading-xxs mb-2.5">
			{{ article.title }}
		</h3>
		<p class="text-body-sm line-clamp-2">
			{{ article.description }}
		</p>
	</NuxtLink>
</template>
