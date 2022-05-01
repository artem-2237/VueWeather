<template>
  <main-layout />
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import { useStore } from 'vuex'

export default {
  components: {
    MainLayout,
  },
  setup() {
    const store = useStore()
    const loadData = async () => {
      if (!localStorage.getItem('city') ||
          localStorage.getItem('city') === 'null' ||
          localStorage.getItem('city') === 'undefined') {
        localStorage.setItem('city', JSON.stringify({
          country: "United Kingdom",
          id: "328328",
          lat: 52,
          lon: -0,
          name: "London"
        }))
        console.log(localStorage.getItem('city'))
      }
      if (!localStorage.getItem('recommendCities') ||
          localStorage.getItem('recommendCities') === 'null' ||
          localStorage.getItem('recommendCities') === 'undefined') {
        const cities = [
          {
            country: "United Kingdom",
            id: "328328",
            lat: 52,
            lon: -0,
            name: "London"
          },
          {
            country: "Ukraine",
            id: "324505",
            lat: "50",
            lon: "31",
            name: "Kiev"
          },
          {
            country: "United States",
            id: "349727",
            lat: "41",
            lon: "-74",
            name: "New York"
          },
          {
            country: "Japan",
            id: "226396",
            lat: "36",
            lon: "140",
            name: "Tokyo"
          }
        ]
        localStorage.setItem('recommendCities', JSON.stringify(cities))
      }
      store.commit(
          'citiesModule/setRecCities',
          JSON.parse(localStorage.getItem('recommendCities'))
      )
      store.commit(
          'citiesModule/setCurCity',
          JSON.parse(localStorage.getItem('city'))
      )

      await store.dispatch('citiesModule/loadCities')
      await store.dispatch('weatherModule/loadWeatherInfo')
    }

    loadData()
  }
}
</script>

<style lang="scss">
#app {

}
</style>