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
        <h6 v-for="tag in tags" :key="'tag_'+tag">{{ tag }}</h6>
      </template>
      <ul v-if="sizes && sizes.length" class="size-container">
        <h5>Sizes:</h5>
        <h6 v-for="size in sizes" :key="'size_'+size">{{ size }},</h6>
      </ul>
      <ul2 v-if="sugar && sugar.length">
        <h5>Sugar Level:</h5>
        <ul v-for="sugarLevel in sugar" :key="'sugar_'+sugarLevel">{{ sugarLevel }}</ul>
      </ul2>
      <ul v-if="ice && ice.length">
        <h5>Ice Level:</h5>
        <ul v-for="icePercentage in ice" :key="'ice_'+icePercentage">{{ icePercentage }}</ul>
      </ul>
      <ul v-if="ingredients && ingredients.length">
        <h5>Ingredients:</h5>
        <ul v-for="ingredient in ingredients" :key="'ingredient_'+ingredient">{{ ingredient }}</ul>
      </ul>
      <ul v-if="allergens && allergens.length">
        <h5>Allergens:</h5>
        <h6 v-for="allergen in allergens" :key="'allergen_'+allergen">{{ allergen }}</h6>
      </ul>
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
  display: flex;
  justify-content: spacebetween;
}

p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-style: italic;
}

.size-container {
  justify-content: space-between;
  display:flex;
  margin: 10px;
  width:100%;
}


</style>
