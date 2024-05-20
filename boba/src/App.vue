<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Register</RouterLink>
      <RouterLink to="/menu">Menu</RouterLink>
    </nav>
    <header>
      <h1>Welcome to Yum Boba!</h1>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  background-color: gray;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

nav a {
  color: #f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: pink;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

header {
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h1 {
  margin: 0;
  font-size: 24px;
}

@media (min-width: 1024px) {
  header {
    padding-right: 40px;
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

</style>
