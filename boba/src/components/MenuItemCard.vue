<script setup>
defineProps({
  name: String,
  description: String,
  tags: Array,
  cost: Number,
  calories: Number,
  sizes: Array,
  sugar: Array,
  ice: Array,
  ingredients: Array,
  allergens: Array
})
</script>

<template>
  <div>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <h6 v-for="tag in tags" :key="tag">{{ tag }}</h6>
    <h6 v-for="size in sizes" :key="size">{{ size }}</h6>
    <h6 v-for="sugar in sugar" :key="sugar">{{ sugar }}</h6>
    <h6 v-for="icePercentage in ice" :key="icePercentage">{{ icePercentage }}</h6>
    <h6 v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</h6>
    <h6 v-for="allergen in allergens" :key="allergen">{{ allergen }}</h6>
  </div>
</template>
