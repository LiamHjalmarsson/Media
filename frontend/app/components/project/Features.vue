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
		<ul class="flex gap-5">
			<ProjectFeatured
				v-for="project in block.projects"
				:key="project.id"
				:project="project" />
		</ul>
	</BaseSection>
</template>
