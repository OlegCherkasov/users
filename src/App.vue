<script setup lang="ts">
import { watch } from 'vue'

import Header from './components/Header.vue'

import { RouterView } from 'vue-router'
import { userStore } from '@/stores/users'

const store = userStore()

store.checkLocal()

if (store.isLocal) {
  store.getLocalUsers()
} else {
  store.getUsersList()
}

watch(
  () => store.users,
  () => {
    window.localStorage.setItem('Users', JSON.stringify(store.users))
  },
  { deep: true }
)

</script>

<template>
  <div class="container">

    <Header title="Users" />

    <RouterView />
  </div>
</template>

<style scoped></style>
