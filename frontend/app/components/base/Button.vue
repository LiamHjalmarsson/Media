<script setup>
defineProps({
	to: String,

	label: {
		type: String,
		required: true,
	},

	type: {
		type: String,
		default: "button",
	},
});
</script>

<template>
	<NuxtLink
		v-if="to"
		:to="to"
		class="relative w-fit mx-auto h-14 group flex items-center px-8 cursor-pointer">
		<span
			class="relative z-10 font-medium tracking-wide text-body-sm md:text-body-md lg:text-body-lg">
			{{ label }}
		</span>

		<span
			class="absolute left-0 w-14 h-14 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
	</NuxtLink>

	<button
		v-else
		:type="type"
		class="relative w-fit mx-auto h-14 group flex items-center px-8 cursor-pointer">
		<span class="relative z-10 font-medium tracking-wide">
			{{ label }}
		</span>

		<span
			class="absolute left-0 w-14 h-14 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
	</button>
</template>
