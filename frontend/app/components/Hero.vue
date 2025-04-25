<script setup>
const props = defineProps({});
</script>

<template>
	<div
		class="flex justify-center items-center relative min-h-[760px] bg-neutral">
		<div
			class="p-20 text-neutral-white text-center space-y-10 font-heading container">
			<h1 class="text-heading-4xl font-extrabold">
				Vi
				<span class="text-secondary"> hjälper </span> er med
				allt inom <span class="text-secondary"> webb </span>
			</h1>
			<h3 class="text-heading-md">Enkelt och prisvärd</h3>
			<div>
				<BaseButton
					to="/contact"
					label="Kontakta oss"></BaseButton>
			</div>
		</div>
	</div>
</template>
