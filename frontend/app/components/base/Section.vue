<script setup>
defineProps({
	title: {
		type: String,
	},
});
</script>

<template>
	<section class="px-10 py-32">
		<div class="mx-auto max-w-[1250px]">
			<h2
				v-if="title"
				class="text-heading-2xl font-heading font-bold mb-5">
				{{ title }}
			</h2>
			<slot />
		</div>
	</section>
</template>
