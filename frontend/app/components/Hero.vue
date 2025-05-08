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
		class="flex justify-center items-center relative min-h-[760px] bg-neutral">
		<div
			class="absolute w-full h-full overflow-hidden opacity-30">
			<NuxtImg
				provider="strapi"
				:src="block.image.url"
				quality="80"
				format="webp"
				:alt="block.image.alternativeText || ''"
				class="object-cover w-full h-full" />
		</div>

		<div
			class="p-20 text-neutral-white text-center space-y-10 font-heading container relative z-10">
			<h1
				class="text-heading-3xl font-extrabold"
				v-if="block.title">
				{{ block.title }}
			</h1>
			<h2
				class="text-heading-sm font-medium"
				v-if="block.subtitle">
				{{ block.subtitle }}
			</h2>

			<div v-if="block.buttons">
				<BaseButton
					v-for="button in block.buttons"
					:key="button.id"
					:to="button.path"
					:label="button.label" />
			</div>
		</div>
	</div>
</template>
