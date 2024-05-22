<template>
  <div>
    <p>{{ itemName }}</p>
  </div>
</template>

<script setup>
defineProps({
  itemName: {
    type: String,
    required: true
  }
})
</script>
