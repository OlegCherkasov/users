<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import { userStore } from '@/stores/users'

const store = userStore()
const router = useRouter()
const route = useRoute()

interface User {
  id: number,
  lastName: string,
  firstName: string,
  email: string,
  avatar: string
}

const id = ref<number>(0)
const user = ref<User>()
const index = ref<number>(0)

id.value = +route.params.id

const getUser = () => {
  user.value = store.users.find(item => item.id === id.value)
}

function deleteUser() {
  if (!index.value) {
    index.value = store.users.findIndex(item => item.id === id.value)
  }

  store.deleteUser(index.value)
  router.push('/')
}

getUser()

watch(
  () => user.value,
  () => {
    if (!index.value) {
      index.value = store.users.findIndex(item => item.id === id.value)
    }
    // @ts-ignore
    store.users[index.value] = user.value
  },
  { deep: true }
)
</script>


<template>
  <div class="card">
    <div>
      <RouterLink to="/">To Users List</RouterLink>
    </div>


    <input v-model="user.firstName" type="text" placeholder="Change First Name">

    <input v-model="user.lastName" type="text" placeholder="Change Last Name">

    <input v-model="user.email" type="post" placeholder="Change Post">

    <img :src="user.avatar" width="100" />

    <button @click="deleteUser()">Delete user</button>
  </div>
</template>

<style scoped></style>
