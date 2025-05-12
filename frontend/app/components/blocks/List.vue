<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<BaseSection
		:title="block.title"
		class="bg-accent text-neutral-white">
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mb-10 lg:mb-20">
			<div
				class="grow"
				v-for="(item, i) in block.items"
				:key="item.id">
				<div class="flex items-center font-heading">
					<span
						class="mr-5 lg:mr-10 text-heading-3xl lg:text-[96px] font-bold text-secondary">
						{{ i + 1 }}
					</span>
					<h3
						class="text-heading-xs lg:text-heading-sm font-semibold">
						{{ item.title }}
					</h3>
				</div>
				<p>
					{{ item.description }}
				</p>
			</div>
		</div>

		<BaseButton
			v-if="block.hasButton"
			label="Gratis analys"
			to="/" />
	</BaseSection>
</template>
