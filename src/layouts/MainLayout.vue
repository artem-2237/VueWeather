<template>
  <div :class="$store.getters.theme">
    <div class="main">
      <weather-label />
      <router-view />
    </div>
  </div>
</template>

<script>
import WeatherLabel from '@/components/weather/WeatherLabel'

export default {
  name: 'MainLayout',
  components: {
    WeatherLabel,
  }
}
</script>
