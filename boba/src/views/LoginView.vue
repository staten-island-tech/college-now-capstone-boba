<script setup>
import { userStore } from '../stores/user.js'
import { ref } from 'vue'

let username = ref()
let password = ref()
let incompleteField = ref(false)

function login() {
  if (username.value && password.value) {
    userStore().$userLogin(username.value, password.value)
  } else {
    incompleteField.value = true
  }
}
</script>

<template>
  <div>
    <label for="name">Email:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="username" />
    <label for="name">Password:</label>
    <input
      type="password"
      id="name"
      name="name"
      required
      minlength="4"
      size="10"
      v-model="password"
    />
    <h3 v-if="incompleteField">Please make sure you filled out all fields!</h3>
    <h3 v-if="userStore().loginError">Incorrect username or password!</h3>
    <button @click="login()">Submit:</button>
  </div>
</template>

<style>
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  padding: 2px;
  background-color: white;
  width: 20%;
  border-radius: 20px;
  margin-top: 2px;
  margin-left: 4px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin: 12px;
  color: black;
  border: 2px solid pink;
  border-radius: 10px;
  color: black;
}

button {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  margin-left: 10px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
}

button:hover {
  background-color: pink;
}
</style>
