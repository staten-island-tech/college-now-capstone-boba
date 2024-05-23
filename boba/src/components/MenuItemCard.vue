<script setup>
import { orderStore } from '@/stores/orders'
import { ref } from 'vue'

let store = orderStore()

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

const tempIce = ref('Regular')
const tempSugar = ref('100%')
const tempSize = ref('Medium')

function addToCart(data) {
  store.orderItems.push(data)
  console.log(data)
}
</script>

<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <div class="details">
      <template v-if="tags && tags.length">
        <h6 v-for="tag in tags" :key="'tag_' + tag">{{ tag }}</h6>
      </template>
      <div v-if="ingredients && ingredients.length">
        <h3>Ingredients:</h3>
        <h6>{{ ingredients.toString() }}</h6>
      </div>
      <div v-if="allergens && allergens.length">
        <h3>Allergens:</h3>
        <h6 v-for="allergen in allergens" :key="'allergen_' + allergen">{{ allergen }}</h6>
      </div>
    </div>

    <div class="separator1"></div>

    <div class="options">
      <div v-if="sizes && sizes.length" class="size-container">
        <h5>Sizes:</h5>
        <div v-for="size in sizes" :key="'size_' + size" class="sizeButtons buttons">
          <button @click="tempSize = size">{{ size }}</button>
        </div>
      </div>
      <div v-if="sugar && sugar.length">
        <h5>Sugar Level:</h5>
        <div v-for="sugarLevel in sugar" :key="'sugar_' + sugarLevel" class="sugarButtons buttons">
          <button @click="tempSugar = sugarLevel">{{ sugarLevel }}</button>
        </div>
      </div>
      <div v-if="ice && ice.length">
        <h5>Ice Level:</h5>
        <div v-for="icePercentage in ice" :key="'ice_' + icePercentage" class="iceButtons buttons">
          <button @click="tempIce = icePercentage">{{ icePercentage }}</button>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button
        class="add-to-cart"
        @click="
          addToCart({
            name: name,
            cost: cost,
            calories: calories,
            sizes: tempSize,
            sugar: tempSugar,
            ice: tempIce,
            allergens: allergens
          })
        "
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 16px;
  margin-top: 16px;
  background-color: blanchedalmond;
  color: black;
}

.card h3 {
  margin-top: 0;
  color: black;
}

h3,
.details {
  margin-top: 8px;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
}

p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: bold;
  font-style: italic;
}

.buttons {
  padding: 4px;
  margin-left: 4px;
  margin-bottom: 8px;
  font-size: 16px;
  border: 2px solid pink;
  border-radius: 10px;
  color: black;
  background-color: pink;
  border-color: white;
  font-weight: bold;
  text-align: center;
}

button:hover {
  color: gray;
}

.options {
  display: flex;
  flex: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.separator1 {
  background-color: gray;
  width: 100%;
  height: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

.add-to-cart {
  margin-top: auto;
  align-self: flex-start;
  padding: 7px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  border: 2px solid pink;
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
  text-align: center;
}

.button-container {
  justify-content: center;
  display: flex;
  flex: wrap;
}
</style>
