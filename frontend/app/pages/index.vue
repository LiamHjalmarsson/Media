<script setup>
const global = useGlobalStore();

onMounted(() => {
	global.getSettings();
});
</script>

<template>
	<Hero> </Hero>
</template>
