import { defineStore } from 'pinia'
import { userStore } from './user.js'
import router from '@/router'
import { ref } from 'vue'

const userSt = userStore()

export const orderStore = defineStore('order', () => {
  const orderItems = ref([])
  const total = ref(0)

  const $createOrder = async function () {
    try {
      console.log(userSt.access_token)
      const response = await fetch(`http://localhost:3000/order/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: userSt.username,
          userToken: userSt.access_token,
          currentOrder: true,
          menuItems: orderItems.value,
          cost: total.value
        })
      })
        .then((res) => res.json())
        .then(async (data) => {
          access_token.value = data.token
          console.log(data)
        })
      //router.push('')
    } catch (error) {
      console.log(error)
    }
  }

  return { orderItems, $createOrder }
})
