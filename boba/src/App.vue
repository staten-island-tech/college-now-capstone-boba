<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Welcome to Yum Boba!</h1>
    <div class="imgboba">
    <img src = "https://i.pinimg.com/originals/1c/5b/03/1c5b03fcd3e6ad9d1c46508cc282a3ad.png" alt="Boba Image">
    </div>
    <div class="separator"></div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Register</RouterLink>
        <RouterLink to="/Menu">Menu</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
}

header {
  color: black;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  width: 100%;
}

nav.wrapper {
  display: flex;
  justify-content: center;
  gap: 1px;
  font-size: 12px;
  margin-top: 10px;
}

nav a.router-link-exact-active {
  color: brown;
}

nav a:hover {
  background-color: pink;
  color: gray;
}

h1 {
  margin: 0;
  font-size: 28px;
  display: flex;
  font-weight: bold;
}

@media (min-width: 1024px) {
  header {
    padding-right: 100px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.separator {
  background-color: #441151;
  width: 100%; 
  height: 3px; 
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.imgboba {
  margin-top: 10px;
}

.imgboba img {
  width: 160px;
  height: 240px;
}

</style>
