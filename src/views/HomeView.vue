<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

import { userStore } from '@/stores/users'
const store = userStore()
</script>

<template>
  <h1>List</h1>
  <div v-for="(item, index) in store.users" :key="index">
    <p>id: {{ item.id }}</p>
    <p>First Name: {{ item.firstName }}</p>
    <p>Last Name: {{ item.lastName }}</p>
    <p>E-mail: {{ item.email }}</p>
    <img :src="item.avatar" width="100" />
    <div class="button" @click="router.push(`/about/${item.id}`)">More</div>
  </div>
</template>

<style scoped></style>
