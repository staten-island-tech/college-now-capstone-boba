import { defineStore } from 'pinia'
import { userStore } from './user.js'
import router from '@/router'
import { ref } from 'vue'

const userSt = userStore()

export const orderStore = defineStore('order', () => {
  const orders = ref([])
  const orderItems = ref([])
  const total = ref(0)

  const $createOrder = async function (total) {
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
          console.log(data)
        })
      //router.push('')
    } catch (error) {
      console.log(error)
    }
  }

  const $getOrders = async function () {
    try {
      console.log(userSt.access_token)
      const response = await fetch(`http://localhost:3000/order/get`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: userSt.username
        })
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data)
          orders.value = data
        })
      //router.push('')
    } catch (error) {
      console.log(error)
    }
  }

  const $deleteOrder = async function (itemId) {
    try {
      console.log(userSt.access_token)
      console.log(itemId)
      const response = await fetch(`http://localhost:3000/order/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: itemId
        })
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data)
          $getOrders()
        })
      //router.push('')
    } catch (error) {
      console.log(error)
    }
  }

  const $updateOrder = async function (id, cost) {
    try {
      console.log(userSt.access_token)
      console.log(id)
      const response = await fetch(`http://localhost:3000/order/update`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, menuItems: orderItems.value, cost: cost })
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data)
          $getOrders()
        })
      //router.push('')
    } catch (error) {
      console.log(error)
    }
  }

  return { orderItems, orders, $createOrder, $getOrders, $deleteOrder, $updateOrder }
})
