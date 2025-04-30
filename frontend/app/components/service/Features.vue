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
		<ul class="grid grid-cols-2 lg:grid-cols-3 gap-20">
			<ServiceFeatured
				v-for="service in block.services"
				:key="service.id"
				:service="service" />
		</ul>
	</BaseSection>
</template>
