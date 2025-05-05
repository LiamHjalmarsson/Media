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
		<div class="flex gap-5">
			<FeatureProject
				:project="project"
				v-for="project in block.projects"
				:key="project.id"
				class="flex-1 hover:flex-[2] duration-slow transition-all ease-out" />
		</div>
	</BaseSection>
</template>
