<script setup>
import { onMounted, ref } from 'vue'
import { orderStore } from '@/stores/orders'
let orderSt = orderStore()
let dataGot = ref(false)

onMounted(() => {
  orderSt.$getOrders()
  dataGot.value = true
})
</script>

<template>
  <div v-if="dataGot" class="hi">
    <h1>Orders:</h1>
    <div v-for="order in orderSt.orders" :key="order._id" class="card">
      <h3>insert order name here idk</h3>
      <div v-for="item in order.menuItems" :key="item">{{ item.name }} - ${{ item.cost }}</div>
      <div>total: ${{ order.cost }}</div>
      <button @click="orderSt.$deleteOrder(order._id)">delete order!</button>
      <button @click="orderSt.$updateOrder(order._id)">update order! (with cart)</button>
    </div>
  </div>
</template>

<style scoped>
.hi {
  display: flex;
  flex: wrap;
  flex-direction: row;
}

.card {
  margin: 5px;
}

h1 {
  font-weight: bold;
  font-size: 28px;
}
</style>
