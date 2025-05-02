<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div
		class="min-h-screen bg-cover bg-center relative flex justify-center items-center"
		:style="{
			backgroundImage: block?.image?.url
				? `url(http://localhost:1337${block.image.url})`
				: 'none',
		}">
		<div class="absolute w-full h-full bg-accent/90"></div>

		<div
			class="text-white relative z-10 max-w-[750px] text-center">
			<h3
				class="text-heading-4xl font-bold font-heading text-secondary">
				{{ block.title }}
			</h3>

			<p class="text-body-lg">
				{{ block.text }}
			</p>
		</div>
	</div>
</template>
