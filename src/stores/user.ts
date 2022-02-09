import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = useStorage('user', {
    name: '',
    email: '',
    pass: '',
    authenticated: false,
  })
  return {
    user,
  }
})
