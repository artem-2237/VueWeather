<template>
  <page-content>
    <button class="search-btn" @click="search">
      <img src="../assets/icons/search.png" alt="search">
    </button>
    <div class="info-group with-input">
      <input
          type="text"
          class="input"
          ref="searchInput"
          placeholder="Another location"
          v-model="inputModel"
          @keypress.enter="search"
          @focus="showList = true"
          @blur="showList = false"
      >
      <app-drop-list
          v-if="showList && cities"
          :cities="cities"
          @onSelect="select"
      />
    </div>
    <cities-recommended @onSelect="select" />
    <weather-info />
    <weather-forecast-list :forecast="$store.getters['weatherModule/forecastWeather']" />
  </page-content>
</template>

<script>
import PageContent from '@/components/PageContent'
import WeatherInfo from '@/components/weather/WeatherInfo'
import WeatherForecastList from '@/components/weather/WeatherForecastList'
import AppDropList from '@/components/ui/AppDropList'
import CitiesRecommended from '@/components/cities/CitiesRecommended'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'HomePage',
  components: {
    WeatherForecastList,
    WeatherInfo,
    PageContent,
    AppDropList,
    CitiesRecommended,
  },
  setup() {
    const store = useStore()
    const inputModel = ref('')
    const cities = ref([])
    const showList = ref(false)
    const searchInput = ref(null)

    const search = () => {
      if (inputModel.value.length) {
        searchInput.value.focus()
        cities.value = store.getters['citiesModule/cities']
            .filter(el => el.name.toLowerCase().includes(inputModel.value.toLowerCase()))
      } else {
        cities.value = null
      }
    }

    const select = async city => {
      await store.dispatch('citiesModule/setCurCity', city)
      await store.dispatch('weatherModule/loadWeatherInfo')
      showList.value = false
      inputModel.value = ''
    }

    return {
      inputModel,
      search,
      cities,
      showList,
      select,
      searchInput
    }
  }
}
</script>

<style scoped>
.with-input {
  width: 80%;
}
</style>