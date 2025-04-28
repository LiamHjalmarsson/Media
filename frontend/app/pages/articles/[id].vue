<script setup>
const route = useRoute();
const { findOne } = useStrapi();

const response = await findOne("articles", route.params.id);

console.log(response);
</script>

<template>Article</template>
