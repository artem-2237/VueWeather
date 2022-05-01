<template>
  <div class="weather-label">
    <span class="weather-label__temp">{{ $store.getters['weatherModule/currentWeather']?.temp || '...' }}&deg;</span>
    <div class="weather-label__details">
      <span class="weather-label__city">{{ $store.getters['citiesModule/curCity']?.name }}</span>
      <span class="weather-label__date">
        {{ date.time }} - {{ date.day }}, {{ date.date }}
      </span>
    </div>
    <div class="weather-label__weather">
      <div class="weather-label__icon icon"></div>
      <span class="weather-label__type">{{ $store.getters['weatherModule/currentWeather']?.weather || '...' }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTwoNumsFormat } from '@/utils/useTwoNumsFormat'

export default {
  name: 'WeatherLabel',
  setup() {
    const timeFormat = useTwoNumsFormat

    const dayMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let clock
    let d = new Date()
    const date = ref({
      time: `${timeFormat(d.getHours())}:${timeFormat(d.getMinutes())}`,
      day: dayMap[+d.getDay()],
      date: `${d.getDate()} ${monthMap[+d.getMonth()]} '${d.getFullYear() - 2000}`
    })

    const setTime = () => {
      d = new Date()
      date.value = {
        time: `${timeFormat(d.getHours())}:${timeFormat(d.getMinutes())}`,
        day: dayMap[+d.getDay()],
        date: `${d.getDate()} ${monthMap[+d.getMonth()]} '${d.getFullYear() - 2000}`
      }
    }

    onMounted(() => {
      clock = setInterval(() => {
        setTime()
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(clock)
    })

    return {
      date
    }
  }
}
</script>

<style scoped lang="sass">
.weather-label
  margin: 0 0 150px 150px
  display: flex
  align-items: center
  color: #ffffff
  &__temp
    font-size: 100px
    font-weight: 700
    margin-right: 10px
  &__details
    margin-right: 30px
  &__city
    display: block
    font-size: 50px
  &__date
    font-size: 14px
  &__icon
    display: block
  &__type
    display: block
    text-align: center

@media (max-width: 1500px)
  .weather-label
    margin: 0 0 150px 50px
@media (max-width: 1200px)
  .weather-label
    margin: 150px 0 0 50px
@media (max-width: 730px)
  .weather-label
    margin: 100px 0 0 30px
    &__temp
      font-size: 70px
    &__city
      font-size: 30px
@media (max-width: 500px)
  .weather-label
    margin-left: 15px
    &__temp
      font-size: 55px
    &__city
      font-size: 25px
      margin-bottom: 5px
    &__date, &__type
      font-size: 12px
@media (max-width: 410px)
  .weather-label
    margin-left: 10px
    &__temp
      font-size: 50px
    &__city
      font-size: 23px
    &__details
      margin-right: 15px
    &__date, &__type
      font-size: 10px
    &__icon
      width: 40px
      height: 40px
</style>