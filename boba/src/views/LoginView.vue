<script setup> 
import { userStore } from '../stores/user.js'
import { ref } from 'vue'

const store = userStore()

let username = ref('')
let password = ref('')
let zipcode = ref('')
</script>

<template>
  <div>
    <label for="name">Email:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="username" />
    <label for="name">Password:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="password" />
    <label for="name">Zipcode:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="zipcode" />

    <button @click="store.$signup(username, password, zipcode)">Submit:</button>
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
}

button {
  padding: 7px;
  margin-top: 8px;
  font-size: 16px;
  margin-left: 10px;
}
</style>
