<script setup>
defineProps({
	project: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<NuxtLink
		:to="`projects/${project.slug}`"
		class="flex justify-center items-center group h-[200px] md:h-[300px] lg:h-[400px] max-lg:min-w-[350px] relative bg-accent">
		<NuxtImg
			provider="strapi"
			:src="project.cover?.url"
			:alt="project.title || 'Project cover image'"
			quality="80"
			fit="cover"
			sizes="100vw sm:50vw md:400px"
			class="object-cover w-full h-full group-hover:opacity-30 transition-opacity duration-slow" />

		<h3
			class="text-heading-sm font-semibold font-heading capitalize absolute opacity-0 group-hover:opacity-100 transition-opacity duration-slow text-secondary">
			{{ project.title }}
		</h3>
	</NuxtLink>
</template>
