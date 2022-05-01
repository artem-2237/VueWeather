<template>
  <div class="info-group list">
    <li class="space-between">
      <span class="prop-label">Cloudy</span>
      <span class="prop-value">{{ weatherInfo ? weatherInfo?.cloudy + '%' : 'Loading...' }}</span>
    </li>
    <li class="space-between">
      <span class="prop-label">Humidity</span>
      <span class="prop-value">{{ weatherInfo ? weatherInfo?.humidity + '%' : 'Loading...' }}</span>
    </li>
    <li class="space-between">
      <span class="prop-label">Wind</span>
      <span class="prop-value">{{ weatherInfo ? weatherInfo?.wind + 'km/h' : 'Loading...' }}</span>
    </li>
    <li class="space-between" v-if="weatherInfo?.rain">
      <span class="prop-label">Rain</span>
      <span class="prop-value">{{ weatherInfo?.rain + 'mm' }}</span>
    </li>
    <li class="space-between" v-if="weatherInfo?.snow">
      <span class="prop-label">Snow</span>
      <span class="prop-value">{{ weatherInfo?.snow + 'mm' }}</span>
    </li>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'WeatherInfo',
  setup() {
    const store = useStore()
    const weatherInfo = computed(() => store.getters['weatherModule/currentWeather'])

    return {
      weatherInfo
    }
  }
}
</script>

<style scoped>

</style>