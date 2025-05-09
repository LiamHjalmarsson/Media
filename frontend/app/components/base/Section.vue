<script setup>
defineProps({
	title: {
		type: String,
	},
});
</script>

<template>
	<section class="px-10 py-32">
		<div class="mx-auto max-w-screen-xl">
			<h2
				v-if="title"
				class="text-heading-xl font-heading font-bold mb-10">
				{{ title }}
			</h2>
			<slot />
		</div>
	</section>
</template>
