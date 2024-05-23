import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const userStore = defineStore('user', () => {
  const username = ref()
  const access_token = ref()
  const loginError = ref(false)
  const registerError = ref(false)

  const $signup = async (user, password, zipcode) => {
    try {
      console.log(user, password, zipcode)
      const response = await fetch(`http://localhost:3000/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      registerError.value = true
      throw new Error(error)
    }
  }

  const $userLogin = async (user, password) => {
    try {
      const response = await fetch(`http://localhost:3000/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user,
          password: password
        })
      })
        .then((res) => res.json())
        .then(async (data) => {
          access_token.value = data.token
          username.value = user
          console.log(access_token.value)
        })
      router.push('/menu')
    } catch (error) {
      loginError.value = true
      throw new Error(error)
    }
  }
  return { username, access_token, loginError, registerError, $signup, $userLogin }
})
