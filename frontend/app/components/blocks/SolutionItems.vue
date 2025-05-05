<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});

const toggleHandler = () => {};
</script>

<template>
	<BaseSection :title="block.title">
		<div class="flex flex-wrap gap-10">
			<BaseCard
				v-for="item in block.items"
				:key="item.id"
				class="flex-1 space-y-5 text-center flex flex-col justify-between items-center">
				<Icon
					:name="item.nuxtIcon"
					class="text-[96px] text-accent-light" />

				<h3
					class="text-heading-sm font-heading font-semibold">
					{{ item.title }}
				</h3>

				<p>
					{{ item.description }}
				</p>

				<button
					class="px-4 py-2 text-primary font-semibold relative">
					Vad inngår

					<span
						class="absolute left-0 bottom-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-slow" />
				</button>
			</BaseCard>
		</div>
	</BaseSection>
</template>
