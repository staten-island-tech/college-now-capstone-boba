<script setup>
import { onMounted, ref } from 'vue'
import MenuItemCard from '../components/MenuItemCard.vue'
import { menuStore } from '../stores/menu.js'
import { orderStore } from '../stores/orders.js'

const menuSt = menuStore()
const orderSt = orderStore()
const gotData = ref(false)

onMounted(() => {
  menuSt.$fetchMenu()
  gotData.value = true
})
</script>

<template>
  <div class="container">
    <div v-if="gotData" class="card-container">
      <MenuItemCard
        v-for="item in menuSt.menuItems"
        :key="item"
        :name="item.name"
        :description="item.description"
        :tags="item.tags"
        :cost="item.cost"
        :calories="item.calories"
        :sizes="item.sizes"
        :sugar="item.sugarPercentage"
        :ice="item.icePercentage"
        :ingredients="item.ingredients"
        :allergens="item.allergens"
        @click="orderSt.orderItems.push(item)"
      />
    </div>
  </div>
</template>

<style>
header {
  display: flex;
  justify-content: left;
  padding: 20px;
  margin-right: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.card {
  margin: 0 10px;
  width: 300px;
}
</style>
