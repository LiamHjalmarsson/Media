<script setup>
defineProps({
	service: {
		type: Object,
	},
});
</script>

<template>
	<BaseCard>
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
					class="border-2 border-primary rounded-full w-12 h-12 text-primary flex justify-center items-center">
					<Icon
						name="heroicons:arrow-right"
						class="text-primary font-semibold text-body-lg" />
				</button>
			</div>
		</div>
	</BaseCard>
</template>
