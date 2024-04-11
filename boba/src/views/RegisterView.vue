<script setup>
import { userStore } from '../stores/user.js'
import { ref } from 'vue'

const store = userStore()

let username = ref()
let password = ref()
let zipcode = ref()
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
    <label for="name">Zipcode:</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="4"
      maxlength="8"
      size="10"
      v-model="zipcode"
    />

    <button @click="store.$signup(username, password, zipcode)">Submit:</button>
  </div>
</template>
