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
    store.dispatch('weatherModule/loadWeatherInfo')
  }
}
</script>

<style lang="scss">
#app {

}
</style>