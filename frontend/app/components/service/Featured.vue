<script setup>
defineProps({
	service: {
		type: Object,
	},
});
</script>

<template>
	<NuxtLink
		:to="'services/' + service.slug"
		class="flex group">
		<BaseCard
			class="transform transition duration-slow group-hover:-translate-y-1 group-hover:bg-secondary/10 group-hover:shadow-2xl">
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
						class="relative flex items-center justify-center border-2 border-primary rounded-full h-12 w-12 group-hover:w-36 transition-all duration-slow ease-in-out overflow-hidden bg-transparent group-hover:bg-primary/10">
						<span
							class="absolute z-10 text-body-lg font-semibold text-primary opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:-translate-x-3 transition-all duration-slow ease-in-out whitespace-nowrap">
							Läs mer
						</span>

						<Icon
							name="heroicons:arrow-right"
							class="relative z-10 text-primary text-body-lg group-hover:text-primary-dark group-hover:translate-x-10 transition-all duration-slow ease-in-out" />
					</button>
				</div>
			</div>
		</BaseCard>
	</NuxtLink>
</template>
