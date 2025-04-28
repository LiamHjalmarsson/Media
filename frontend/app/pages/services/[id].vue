<script setup>
const route = useRoute();
const { findOne } = useStrapi();

const { data } = await findOne("services", route.params.id);
</script>

<template>
	<BaseSection :title="data.title">
		<div class="grid grid-cols-2 gap-20">
			<ServiceBreakdown
				v-for="service in data.subservices"
				:key="service.id"
				:service="service" />
		</div>
	</BaseSection>
</template>
