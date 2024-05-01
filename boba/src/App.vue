<script setup> 
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Menu">Menu</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  display: flex;
  font-size: 1rem;
  place-items: left;
  padding: 1rem;
  justify-content: flex-start;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
  length: 2px;
}

@media (min-width: 100px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

