<script setup>
const route = useRoute();
const { findOne } = useStrapi();

const { data } = await findOne("services", route.params.id);
</script>

<template>
	<BaseSection :title="data.title">
		<div class="grid grid-cols-2 gap-20">
			<div
				class="space-y-2.5"
				v-for="service in data.subservices"
				:key="service.id">
				<h4
					class="font-semibold text-heading-sm font-heading">
					{{ service.title }}
				</h4>
				<ul class="flex space-x-5">
					<li v-for="tag in service.tags" :key="tag.id">
						{{ tag.name }}
					</li>
				</ul>
				<p>
					{{ service.description }}
				</p>
			</div>
		</div>
	</BaseSection>
</template>
