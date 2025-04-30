<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<BaseSection
		:title="block.title"
		class="bg-accent text-neutral-white">
		<div class="grid grid-cols-2 gap-20 mb-20">
			<BenefitItem
				v-for="(item, i) in block.items"
				:key="item.id"
				:benefit="item"
				:num="i + 1" />
		</div>

		<BaseButton
			label="Gratis analys"
			to="/"
			v-if="block.hasButton" />
	</BaseSection>
</template>

<!-- Snacka om att gratisa analys är ett direkt formulär med epost och företag / websida -->
