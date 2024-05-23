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
    <h1>Items:</h1>
    <div v-for="item in orderSt.orderItems" :key="item">{{ item.name }} - ${{ item.cost }}</div>
    <h4>Total: ${{ cost }}</h4>
    <button @click="orderSt.$createOrder(cost)">Place your order here</button>
  </div>
</template>

<style>
h1 {
  font-weight: bold;
  font-size: 28px;
}

</style>