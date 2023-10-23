import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getUsers } from '@/components/backend/usersApi'

interface Users {
  id: number,
  lastName: string,
  firstName: string,
  email: string,
  avatar: string
}

export const userStore = defineStore('userStore', () => {
  const users = ref<Users[]>([])
  let isLocal = ref<boolean>(false)

  async function getUsersList() {
    users.value = await getUsers()
  }

  function deleteUser(index: number): void {
    users.value.splice(index, 1)
  }

  function getLocalUsers(): Users {
    return users.value = JSON.parse(localStorage.getItem('Users') || '')
  }

  function checkLocal(): boolean {
    return isLocal.value = (window.localStorage.getItem('Users') !== null)
  }

  return { users, getUsersList, deleteUser, checkLocal, isLocal, getLocalUsers }
})
