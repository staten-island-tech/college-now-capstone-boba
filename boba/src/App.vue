<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Welcome to Yum Boba!</h1>

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

header {
  line-height: 1.5;
  max-height: 100vh;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

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
