<template>
  <div class="item">
    <div :class="['item__icon', 'icon', weather.toLowerCase()]"></div>
    <span class="item__title prop-label">{{ weather }}</span>
    <span class="item__temp prop-value">{{ temp }}</span>
    <span class="item__date prop-label">{{ validatedDate }}</span>
  </div>
</template>

<script>
import { useTwoNumsFormat } from '@/utils/useTwoNumsFormat'

export default {
  name: 'WeatherForecastItem',
  props: {
    weather: {
      type: String,
      default: '...'
    },
    temp: {
      type: String,
      default: '...'
    },
    date: {
      type: Date,
      default: '...'
    }
  },
  setup(props) {
    const dateFormat = useTwoNumsFormat
    const validatedDate = dateFormat(props.date.getDate()) + '.' + dateFormat(props.date.getMonth())
    return {
      validatedDate
    }
  }
}
</script>

<style lang="sass" scoped>
span
  display: block
.item
  display: flex
  flex-direction: column
  align-items: center
  min-width: 85px
  margin: 0 10px
  border-radius: 8px
  border: 1px outset #ccc
  background: transparentize(#b4b4b4, .7)
  &__icon
    margin-bottom: 25px
  &__title
    margin-bottom: 15px
  &__temp
    margin-bottom: 10px
</style>