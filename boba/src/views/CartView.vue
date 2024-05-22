<script setup>
import { orderStore } from '@/stores/orders'
import { userStore } from '@/stores/user'
let orderSt = orderStore()
let userSt = userStore()
</script>

<template>
  <div>
    <button @click="orderSt.$createOrder()">test button woo</button>
  </div>
</template>
