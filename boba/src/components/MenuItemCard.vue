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
  <div class="card">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <div class="details">
      <template v-if="tags && tags.length">
        <h6 v-for="tag in tags" :key="'tag_'+tag">Tag: {{ tag }}</h6>
      </template>
      <template v-if="sizes && sizes.length">
        <h6 v-for="size in sizes" :key="'size_'+size">Size: {{ size }}</h6>
      </template>
      <template v-if="sugar && sugar.length">
        <h6 v-for="sugarLevel in sugar" :key="'sugar_'+sugarLevel">Sugar: {{ sugarLevel }}</h6>
      </template>
      <template v-if="ice && ice.length">
        <h6 v-for="icePercentage in ice" :key="'ice_'+icePercentage">Ice: {{ icePercentage }}</h6>
      </template>
      <template v-if="ingredients && ingredients.length">
        <h6 v-for="ingredient in ingredients" :key="'ingredient_'+ingredient">Ingredient: {{ ingredient }}</h6>
      </template>
      <template v-if="allergens && allergens.length">
        <h6 v-for="allergen in allergens" :key="'allergen_'+allergen">Allergen: {{ allergen }}</h6>
      </template>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
  background-color: blanchedalmond;
}

.card h3 {
  margin-top: 0;
}

h3, .details {
  margin-top: 8px;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-style: italic;
}


</style>
