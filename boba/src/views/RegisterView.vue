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

<style scoped>
label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin: 10px;
  display: flex;
}

button {
  padding: 7px;
  margin-top: 8px;
  font-size: 16px;
  margin-left: 10px;
}
</style>
