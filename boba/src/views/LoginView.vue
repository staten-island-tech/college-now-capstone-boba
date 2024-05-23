<script setup>
import { userStore } from '../stores/user.js'
import { ref } from 'vue'

let username = ref()
let password = ref()
</script>

<template>
  <div>
    <label for="name">Email:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="username" />
    <label for="name">Password:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="password" />

    <button @click="userStore().$userLogin(username, password)">Submit:</button>
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin: 12px;
  color:black;
  border: 2px solid pink;
  border-radius: 10px;
  color: black;
  
}

button {
  padding: 7px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  margin-left: 10px;
  border: 2px solid pink;
  border-radius: 10px;
  color: black;
  background-color: white;
  font-weight: bold;
}

button:hover {
  background-color: pink;
}
</style>

