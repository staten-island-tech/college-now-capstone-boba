<script setup>
import { userStore } from '../stores/user.js'
import { ref } from 'vue'
import { defineStore} from 'pinia'

const store = userStore()

let item = ref('')

</script>

<template>
  <div class="menu">
    <label for="search">Search Menue Item: </label>
    <input type="text" id="search" name="search" required minlength="4" size="10" v-model="username" />
    <button @click="store.$menuList(item)">Enter</button>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .menu {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>