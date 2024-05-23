<script setup>
import { ref, onMounted } from 'vue'
import { orderStore } from '@/stores/orders'
import { userStore } from '@/stores/user'
let orderSt = orderStore()
let userSt = userStore()
let cost = ref(0)
let noItems = ref(false)
let notLoggedIn = ref(false)

onMounted(() => {
  orderSt.orderItems.forEach((item) => {
    cost.value += item.cost
  })
})

function placeOrder() {
  console.log(userSt.access_token)
  if (userSt.access_token == undefined) {
    notLoggedIn.value = true
  } else if (cost.value > 0) {
    orderSt.$createOrder(cost.value)
  } else {
    noItems.value = true
  }
}
</script>

<template>
  <div>
    <div v-if="noItems">Place items into your cart!</div>
    <div v-if="!noItems">
      <h1>Items:</h1>
      <div class="container">
        <div v-for="item in orderSt.orderItems" :key="item" class="card">
          {{ item.name }} - ${{ item.cost }}
          <h4>Size: {{ item.size }}</h4>
          <h4>Sugar: {{ item.sugar }}</h4>
          <h4>Ice: {{ item.ice }}</h4>
          <div>Allergens: {{ item.allergens.toString() }}</div>
        </div>
      </div>
      <h4>Total: ${{ cost }}</h4>
      <button class="place_order" @click="placeOrder()">Place your order here</button>
    </div>
    <div v-if="notLoggedIn">Please login or register before you order!</div>
  </div>
</template>

<style>
h1 {
  font-weight: bold;
  font-size: 28px;
}

.container {
  display: flex;
  flex: wrap;
  flex-direction: row;
  width: 80vw;
}

.card {
  margin: 10px;
}

.place_order {
  border: 2px solid pink;
  padding: 10px;
  display: center;
  border-radius: 10px;
}

button:hover {
  background-color: pink;

}
</style>
