<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<BaseSection :title="block.title">
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			<FeatureService
				:service="service"
				:key="service.id"
				v-for="service in block.services"
				class="flex" />
		</div>
	</BaseSection>
</template>
