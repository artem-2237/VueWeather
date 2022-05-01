<template>
  <div class="info-group list">
    <li
        class="prop-label btn"
        v-for="city in $store.getters['citiesModule/recommendCities']"
        :key="city.id"
        @click="$emit('onSelect', city)"
    >{{ city.name }}</li>
  </div>
</template>

<script>
export default {
  name: 'CitiesRecommended',
}
</script>

<style scoped>

</style>