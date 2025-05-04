<script setup>
defineProps({
	block: {
		type: Object,
		required: true,
	},
});

const activeItemId = ref(null);

const toggleAnswer = (itemId) => {
	activeItemId.value =
		activeItemId.value === itemId ? null : itemId;
};
</script>

<template>
	<BaseSection :title="block.title">
		<div
			v-for="(faq, i) in block.items"
			:key="faq.id"
			class="mb-10 border-b border-secondary pb-5 flex space-x-5"
			role="button"
			tabindex="0"
			@click="toggleAnswer(faq.id)"
			@keydown.enter="toggleAnswer(faq.id)"
			@keydown.space.prevent="toggleAnswer(faq.id)">
			<span
				class="text-heading-lg font-semibold font-heading">
				{{ i + 1 }}
			</span>
			<div class="pt-5 w-full">
				<div
					class="mb-5 flex justify-between items-center pr-5">
					<h4
						class="text-heading-xs font-medium font-heading">
						{{ faq.question }}
					</h4>
					<Icon
						name="heroicons:chevron-down"
						:class="[
							'text-heading-xs transition-transform duration-slow',
							activeItemId === faq.id ? 'rotate-180' : '',
						]" />
				</div>
				<p v-if="activeItemId === faq.id" class="text-body">
					{{ faq.answer }}
				</p>
			</div>
		</div>
	</BaseSection>
</template>
