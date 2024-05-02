import { defineStore } from 'pinia'
import { ref } from 'vue'

export const menuStore = defineStore('menu', () => {
  const menuItems = ref([])

  const $fetchMenu = async function () {
    try {
      const response = await fetch(`http://localhost:3000/menu/fetch`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => res.json())
        .then(async (data) => {
          menuItems.value = data
        })
    } catch (error) {
      console.log(error)
    }
  }

  return { menuItems, $fetchMenu }
})
