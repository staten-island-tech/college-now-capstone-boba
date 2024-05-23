<script setup>
import { onMounted } from 'vue'
import { orderStore } from '@/stores/orders'
let orderSt = orderStore()

onMounted(() => {
  orderSt.$getOrders()
})
</script>

<template>
  <div></div>
</template>
