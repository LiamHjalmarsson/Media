<script setup>
const props = defineProps({
	service: {
		type: Object,
	},
});

console.log(props);
</script>

<template>
	<NuxtLink
		:to="'services/' + service.slug"
		class="flex group">
		<BaseCard
			class="transform transition duration-slow group-hover:-translate-y-1 group-hover:shadow-2xl">
			<div
				class="flex flex-col justify-between h-full space-y-10">
				<Icon
					:name="service.icon"
					class="text-heading-3xl text-accent-light" />

				<div class="">
					<h3
						class="text-heading-md font-semibold mb-2.5 font-heading capitalize">
						{{ service.title }}
					</h3>
					<p class="">
						{{ service.description }}
					</p>
				</div>

				<div class="flex justify-end">
					<button
						class="relative border-2 border-primary rounded-full w-12 h-12 text-primary flex justify-center items-center overflow-hidden">
						<Icon
							name="heroicons:arrow-right"
							class="text-primary font-semibold text-body-lg transition duration-slow relative z-10" />
					</button>
				</div>
			</div>
		</BaseCard>
	</NuxtLink>
</template>
