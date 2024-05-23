<script setup>
import { userStore } from '../stores/user.js'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const showContent = ref(false)
let tl

onMounted(() => {
  const firstSection = {
    firstWord: document.querySelector('.first-word'),
    secondWord: document.querySelector('.second-word'),
    words: document.querySelectorAll('.first-header'),
    firstBG: document.querySelector('.first-bg'),
    secondBG: document.querySelector('.second-bg')
  }

  tl = gsap.timeline({ delay: 1 })

  tl.to('.reveal-1', { width: '100%', duration: 0.2 })
  tl.to('.reveal-2', { width: '100%', duration: 0.2 })
  tl.to('.first-header', { opacity: 1, duration: 0.1 })

  tl.to('.reveal-1', { width: '0%', duration: 0.2 })
  tl.to('.reveal-2', { width: '0%', duration: 0.2 })
  tl.to('.first', {
    opacity: 0,
    duration: 0.5,
    delay: 0.7,
    onComplete: () => {
      showContent.value = true
    }
  })
})

const store = userStore()
let incompleteFields = ref(false)
let username = ref('')
let password = ref('')
let zipcode = ref('')
const backgroundImageUrl =
  'https://static.vecteezy.com/system/resources/previews/031/424/532/original/boba-tea-seamless-pattern-bubble-milk-tea-heart-valentine-scarf-isolated-repeat-wallpaper-tile-background-illustration-doodle-design-vector.jpg'

function signup() {
  if (username.value && password.value && zipcode.value) {
    store.$signup(username.value, password.value, zipcode.value)
  } else {
    incompleteFields.value = true
  }
}
</script>

<template>
  <div>
    <section class="first">
      <div class="first-bg">
        <h1 class="first-header first-word">WELCOME TO</h1>
        <div class="reveal-color reveal-1"></div>
      </div>
      <div class="second-bg">
        <h1 class="first-header second-word">YUM BOBA</h1>
        <div class="reveal-color reveal-2"></div>
      </div>
    </section>

    <div class="background">
      <div class="container" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
        <label for="name">Email:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          size="10"
          v-model="username"
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minlength="4"
          size="10"
          v-model="password"
        />
        <label for="zipcode">Zipcode:</label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          required
          minlength="4"
          size="10"
          v-model="zipcode"
        />
        <h3 v-if="incompleteFields">Please make sure all fields are filled out.</h3>
        <button @click="signup">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

html,
body,
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato';
}

.first {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
  flex-direction: column;
}

.first-header {
  text-transform: uppercase;
  color: black;
  margin: 0.5rem auto;
  padding: 10px;
  font-size: 50px;
  opacity: 0;
  flex-direction: column;
  background-color: white;
}

.first-bg,
.second-bg {
  position: relative;
  width: 60rem;
  height: 20%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reveal-1,
.reveal-2 {
  width: 0;
  top: 0;
  left: 0;
  position: absolute;
  display: inline-block;
  height: 100%;
}

.reveal-1 {
  background-color: Pink;
}

.reveal-2 {
  background-color: Purple;
}

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

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  display: center;
}

.container {
  height: 100%;
  border: 2px solid pink;
  width: 800px;
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
}

.background {
  color: brown;
}
</style>
