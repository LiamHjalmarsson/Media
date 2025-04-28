<script setup>
const props = defineProps({
	hero: Object,
});

console.log(props);
</script>

<template>
	<div
		class="flex justify-center items-center relative min-h-[760px] bg-neutral">
		<div
			class="absolute w-full h-full overflow-hidden opacity-30">
			<NuxtImg
				provider="strapi"
				:src="hero.image.url"
				quality="80"
				format="webp"
				:alt="hero.image.alternativeText"
				class="object-cover w-full h-full" />
		</div>

		<div
			class="p-20 text-neutral-white text-center space-y-10 font-heading container relative z-10">
			<h1
				class="text-heading-4xl font-extrabold"
				v-if="hero.title">
				{{ hero.title }}
			</h1>
			<h3 class="text-heading-md" v-if="hero.subtitle">
				{{ hero.subtitle }}
			</h3>

			<div v-if="hero.buttons">
				<BaseButton
					v-for="button in hero.buttons"
					:to="'/' + button.path"
					:label="button.label" />
			</div>
		</div>
	</div>
</template>
