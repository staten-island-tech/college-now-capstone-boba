<script setup>
import { ref, onMounted } from 'vue'
import { orderStore } from '@/stores/orders'
import { userStore } from '@/stores/user'
let orderSt = orderStore()
let userSt = userStore()
let cost = ref(0)

onMounted(() => {
  orderSt.orderItems.forEach((item) => {
    cost.value += item.cost
  })
})
</script>

<template>
  <div>
    <div v-for="item in orderSt.orderItems" :key="item">{{ item.name }} - ${{ item.cost }}</div>
    <h4>total: ${{ cost }}</h4>
    <button @click="orderSt.$createOrder(cost)">place your order here</button>
  </div>
</template>
