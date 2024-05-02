import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  const menuItems = ref([])

  const $fetchMenu = async function () {
    try {
      console.log(userStore.access_token)
      const response = await fetch(`http://localhost:3000/menu/fetch`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => res.json())
        .then(async (data) => {
          menuItems.value = data
        })
      //router.push('')
    } catch (error) {
      console.log(error)
    }
  }

  return { menuItems, $fetchMenu }
})
