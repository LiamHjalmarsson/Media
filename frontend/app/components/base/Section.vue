<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<section class="px-10 py-32">
		<div class="mx-auto max-w-[1250px]">
			<h2
				:class="[
					'text-heading-2xl font-heading font-bold mb-10',
					item?.isHighlighted ? ' text-secondary' : '',
				]">
				{{ title }}
			</h2>
			<slot />
		</div>
	</section>
</template>
