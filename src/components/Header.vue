<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header class="greetings">
    <h1 class="green">{{ title }}</h1>
  </header>
</template>

<style scoped></style>
