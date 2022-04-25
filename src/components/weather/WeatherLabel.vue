<template>
  <div class="weather-label">
    <span class="weather-label__temp">16&deg;</span>
    <div class="weather-label__details">
      <span class="weather-label__city">London</span>
      <span class="weather-label__date">
        06:09 - Monday, 9 Sep '19
      </span>
    </div>
    <div class="weather-label__weather">
      <img src="" alt="icon" class="weather-label__icon">
      <span class="weather-label__type">Cloudy</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherLabel',
}
</script>

<style scoped lang="sass">
.weather-label
  margin: 0 0 150px 150px
  display: flex
  align-items: center
  justify-content: space-between
  color: #ffffff
  &__temp
    font-size: 100px
    font-weight: 700
  &__city
    display: block
    font-size: 50px
  &__date
    font-size: 14px
  &__icon
    display: block
</style>