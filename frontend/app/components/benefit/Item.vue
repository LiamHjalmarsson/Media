<script setup>
defineProps({
	benefit: Object,
	num: Number,
});
</script>

<template>
	<div class="grow">
		<div class="flex items-center font-heading">
			<span
				class="mr-5 text-[96px] font-bold text-secondary">
				{{ num }}
			</span>
			<h3 class="text-heading-md font-semibold">
				{{ benefit.title }}
			</h3>
		</div>
		<p>
			{{ benefit.description }}
		</p>
	</div>
</template>
