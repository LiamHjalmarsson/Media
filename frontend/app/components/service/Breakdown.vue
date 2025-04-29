<script setup>
defineProps({
	service: Object,
});
</script>

<template>
	<div class="space-y-2.5">
		<h4 class="font-semibold text-heading-sm font-heading">
			{{ service.title }}
		</h4>
		<ul class="flex space-x-5">
			<li v-for="tag in service.tags" :key="tag.id">
				{{ tag.name }}
			</li>
		</ul>
		<p>
			{{ service.description }}
		</p>
	</div>
</template>
