<script setup>
import { onMounted } from 'vue'
import { MenuItemCard } from '../components/MenuItemCard.vue'
import { menuStore } from '../stores/menu'

onMounted()
</script>

<template>
  <div>
    <MenuItemCard />
  </div>
</template>
