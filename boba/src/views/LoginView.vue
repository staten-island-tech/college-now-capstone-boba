<script setup>
import { userStore } from '../stores/user.js'
import { ref } from 'vue'

let username = ref()
let password = ref()
</script>

<template>
  <div>
    <label for="name">Email:</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="4"
      maxlength="8"
      size="10"
      v-model="username"
    />
    <label for="name">Password:</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="4"
      maxlength="8"
      size="10"
      v-model="password"
    />

    <button @click="userStore().$userLogin(username, password)">Submit:</button>
  </div>
</template>
