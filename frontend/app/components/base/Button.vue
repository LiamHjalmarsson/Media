<script setup>
const props = defineProps({
	to: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<NuxtLink
		:to="to"
		class="relative w-fit mx-auto h-14 group flex items-center px-8 cursor-pointer">
		<span class="relative z-10 font-medium tracking-wide">
			{{ label }}
		</span>

		<span
			class="absolute left-0 w-14 h-14 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
	</NuxtLink>
</template>
