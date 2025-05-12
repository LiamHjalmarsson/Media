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
		<ul>
			<li
				v-for="(faq, i) in block.items"
				:key="faq.id"
				class="border-b pb-5 flex space-x-10 mb-10"
				role="button"
				tabindex="0"
				@click="toggleAnswer(faq.id)">
				<span
					class="text-heading-xs sm:text-heading-sm md:text-heading-md lg:text-heading-lg font-semibold font-heading text-secondary">
					{{ i + 1 }}
				</span>

				<div class="pt-5 w-full">
					<div
						class="mb-5 flex justify-between items-center pr-5">
						<h4
							class="text-body-md sm:text-body-lg md:text-body-xl lg:text-heading-xs font-medium font-heading">
							{{ faq.question }}
						</h4>
						<Icon
							name="heroicons:chevron-down"
							:class="[
								'text-heading-xs transition-transform duration-slow',
								activeItemId === faq.id ? 'rotate-180' : '',
							]" />
					</div>
					<p
						v-if="activeItemId === faq.id"
						class="text-body text-body-xs sm:text-body-sm md:text-body-md lg:text-body-lg">
						{{ faq.answer }}
					</p>
				</div>
			</li>
		</ul>
	</BaseSection>
</template>
