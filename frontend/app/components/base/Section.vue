<script setup>
defineProps({
	title: {
		type: String,
	},
});
</script>

<template>
	<section class="px-5 md:px-10 py-10 lg:py-32">
		<div class="mx-auto max-w-screen-xl">
			<h2
				v-if="title"
				class="text-heading-xs sm:text-heading-sm md:text-heading-md lg:text-heading-lg font-heading font-bold mb-5 lg:mb-10">
				{{ title }}
			</h2>
			<slot />
		</div>
	</section>
</template>
