<template>
  <div class="forecast info-group" @wheel="horizontalScroll" ref="forecastList">
    <weather-forecast-item
      v-for="item in forecast"
      :key="item.dt"
      :weather="item.weather[0].main"
      :temp="`${Math.round(item.temp.min)}&deg; - ${Math.round(item.temp.max)}&deg;`"
      :date="new Date(item.dt * 1000)"
    />
  </div>
</template>

<script>
import WeatherForecastItem from '@/components/weather/WeatherForecastItem'
import { ref } from 'vue'

export default {
  name: 'WeatherForecastList',
  components: {WeatherForecastItem},
  props: {
    forecast: {
      type: Array,
      default: []
    }
  },
  setup() {
    const forecastList = ref(null)

    const horizontalScroll = event => {
      if (forecastList.value.scrollWidth >= forecastList.value.clientWidth) {
        let modifier
        if (event.deltaMode == event.DOM_DELTA_PIXEL) {
          modifier = 1;
          // иные режимы возможны в Firefox
        } else if (event.deltaMode == event.DOM_DELTA_LINE) {
          modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
          modifier = this.clientHeight;
        }
        if (event.deltaY != 0) {
          // замена вертикальной прокрутки горизонтальной
          forecastList.value.scrollLeft += modifier * event.deltaY > 0 ? 105 : -105;
          event.preventDefault();
        }
      } else {

      }
    }
    return {
      horizontalScroll,
      forecastList
    }
  },
}
</script>

<style lang="sass" scoped>
.forecast
  display: flex
  overflow-y: hidden
  overflow-x: scroll
  margin: auto

@media (max-width: 600px)
  .forecast
    width: 420px
@media (max-width: 550px)
  .forecast
    width: 315px
@media (max-width: 400px)
  .forecast
    width: 210px
</style>