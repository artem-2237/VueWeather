<template>
  <div class="info-group list">
    <li class="space-between">
      <span class="prop-label">Cloudy</span>
      <span class="prop-value">{{ info ? info?.cloudy + '%' : 'Loading...' }}</span>
    </li>
    <li class="space-between">
      <span class="prop-label">Humidity</span>
      <span class="prop-value">{{ info ? info?.humidity + '%' : 'Loading...' }}</span>
    </li>
    <li class="space-between">
      <span class="prop-label">Wind</span>
      <span class="prop-value">{{ info ? info?.wind + 'km/h' : 'Loading...' }}</span>
    </li>
    <li class="space-between">
      <span class="prop-label">Rain</span>
      <span class="prop-value">8mm</span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'WeatherInfo',
  props: {
    info: {
      type: Object,
      default: null,
    }
  },
  setup(props) {
    return {

    }
  }
}
</script>

<style scoped>

</style>