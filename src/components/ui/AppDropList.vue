<template>
  <ul class="drop-list info-group">
    <li
        class="prop-value"
        v-for="city in cities"
        :key="city.id"
        @mousedown.prevent="$emit('onSelect', city)"
    >{{ city.name }} ({{ city.country }})</li>
  </ul>
</template>

<script>
export default {
  name: 'AppDropList',
  emits: ['onSelect'],
  props: {
    cities: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.drop-list
  position: absolute
  z-index: 1
  top: 60px
  left: 0
  background: transparentize(#181818, .2)
  width: 100%
  max-height: 400px
  border-radius: 3px
  padding: 0
  border: none
  overflow-y: auto
  overflow-x: hidden
  & li
    display: flex
    align-items: center
    height: 50px
    padding: 0 40px
    cursor: pointer
    &:hover
      background: transparentize(#fff, 0.9)
</style>