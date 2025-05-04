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
				<NuxtLink
					:to="`/projects/${project.slug}`"
					class="flex justify-center items-center group h-[400px] relative bg-accent">
					<NuxtImg
						provider="strapi"
						:src="project.cover?.url"
						:alt="project.title || 'Project cover image'"
						quality="80"
						fit="cover"
						sizes="100vw sm:50vw md:400px"
						class="object-cover w-full h-full group-hover:opacity-30 transition-opacity duration-slow" />

					<h3
						class="text-heading-md font-semibold font-heading capitalize absolute opacity-0 group-hover:opacity-100 transition-opacity duration-slow text-neutral-white">
						{{ project.title }}
					</h3>
				</NuxtLink>
			</li>
		</ul>
	</BaseSection>
</template>
