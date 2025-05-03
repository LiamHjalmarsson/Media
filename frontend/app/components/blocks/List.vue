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
		<ol class="grid grid-cols-2 gap-20 mb-20">
			<li
				class="grow"
				v-for="(item, i) in block.items"
				:key="item.id">
				<div class="flex items-center font-heading">
					<span
						class="mr-5 text-[96px] font-bold text-secondary">
						{{ i + 1 }}
					</span>
					<h3 class="text-heading-md font-semibold">
						{{ item.title }}
					</h3>
				</div>
				<p>
					{{ item.description }}
				</p>
			</li>
		</ol>

		<BaseButton
			v-if="block.hasButton"
			label="Gratis analys"
			to="/" />
	</BaseSection>
</template>
