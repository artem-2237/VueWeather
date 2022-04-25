<template>
  <page-content>
    <button class="search-btn">
      <img src="../assets/search.png" alt="search">
    </button>
    <div class="info-group with-input">
      <input type="text" class="input" placeholder="Another location">
    </div>
    <div class="info-group list">
      <li class="prop-label btn">Birmingham</li>
      <li class="prop-label btn">Manchester</li>
      <li class="prop-label btn">New York</li>
      <li class="prop-label btn">California</li>
    </div>
    <weather-info :info="weatherInfo" />
  </page-content>
</template>

<script>
import PageContent from '@/components/PageContent'
import WeatherInfo from '@/components/weather/WeatherInfo'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'HomePage',
  components: {WeatherInfo, PageContent},
  setup() {
    const store = useStore()
    const weatherInfo = computed(() => store.getters['weatherModule/weatherInfo'])

    return {
      weatherInfo
    }
  }
}
</script>

<style scoped>
.with-input {
  width: 80%;
}
</style>