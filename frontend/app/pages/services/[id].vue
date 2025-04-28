<script setup>
const route = useRoute();
const { findOne } = useStrapi();

const response = await findOne("services", route.params.id);

console.log(response);
</script>

<template>service</template>
