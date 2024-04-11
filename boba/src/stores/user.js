import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const userStore = defineStore('user', () => {
  const username = ref()
  const access_token = ref()

  const $signup = async (user, password, zipcode) => {
    try {
      const response = await fetch(`http://localhost:3000/user/register`, {
        method: 'POST',
        body: JSON.stringify({
          username: user,
          password: password,
          zipcode: zipcode
        })
      })
        .then((res) => res.json())
        .then(async (data) => {
          access_token.value = data.token
          console.log(access_token.value)
        })
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const $userLogin = async (user, password) => {
    try {
      const response = await fetch(`http://localhost:3000/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          username: user,
          password: password
        })
      })
        .then((res) => res.json())
        .then(async (data) => {
          access_token.value = data.token
          console.log(access_token.value)
        })
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }
  return { username, access_token, $signup, $userLogin }
})
