<script setup> 
import { userStore } from '../stores/user.js'
import { ref } from 'vue'

const store = userStore()

let username = ref('')
let password = ref('')
let zipcode = ref('')
const backgroundImageUrl = 'https://static.vecteezy.com/system/resources/previews/031/424/532/original/boba-tea-seamless-pattern-bubble-milk-tea-heart-valentine-scarf-isolated-repeat-wallpaper-tile-background-illustration-doodle-design-vector.jpg';
</script>

<template>
  <div class="background">
  <div class="container" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
    <label for="name">Email:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="username" />
    <label for="name">Password:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="password" />
    <label for="name">Zipcode:</label>
    <input type="text" id="name" name="name" required minlength="4" size="10" v-model="zipcode" />

    <button @click="store.$signup(username, password, zipcode)">Submit:</button>
  </div>
</div>
</template>


<style scoped>
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  padding: 2px;
  background-color: white;
  margin-top: 2px;
  margin-left: 4px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
}

.container {
  height: 100%;
}

.background{
  colors: burlywood;
}
</style>
