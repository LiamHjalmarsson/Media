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
			<li
				v-for="project in block.projects"
				:key="project.id"
				class="flex-1 hover:flex-[2] duration-slow transition-all ease-out">
				<FeatureProject :project="project" />
			</li>
		</ul>
	</BaseSection>
</template>
