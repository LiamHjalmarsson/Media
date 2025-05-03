<script setup>
const props = defineProps({
	block: {
		type: Object,
		required: true,
	},
});

const config = useRuntimeConfig();

const imageUrl = computed(() =>
	props.block?.image?.url
		? `${config.public.strapi.url}${props.block.image.url}`
		: null
);
</script>

<template>
	<div
		class="min-h-screen bg-cover bg-center relative flex justify-center items-center"
		:style="{
			backgroundImage: block?.image?.url
				? `url(${imageUrl})`
				: 'none',
		}">
		<div class="absolute w-full h-full bg-accent/90"></div>

		<div
			class="text-white relative z-10 max-w-[750px] text-center">
			<h3
				class="text-heading-4xl font-bold font-heading text-secondary mb-2.5">
				{{ block.title }}
			</h3>

			<p class="text-body-lg">
				{{ block.text }}
			</p>
		</div>
	</div>
</template>
