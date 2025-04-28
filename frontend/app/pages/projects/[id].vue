<script setup>
const route = useRoute();
const { findOne } = useStrapi();

const response = await findOne("projects", route.params.id);

console.log(response);
</script>

<template>Project</template>
