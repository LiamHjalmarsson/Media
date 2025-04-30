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
		<div class="flex flex-wrap gap-20">
			<BaseCard
				v-for="item in block.items"
				:key="item.id"
				class="flex-1 space-y-5 text-center">
				<h3
					class="text-heading-sm font-heading font-semibold">
					{{ item.title }}
				</h3>

				<p>
					{{ item.description }}
				</p>

				<button
					class="px-4 py-2 text-primary font-semibold">
					Vad inngår
				</button>
			</BaseCard>
		</div>
	</BaseSection>
</template>
