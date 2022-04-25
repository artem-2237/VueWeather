import axios from '@/axios/weather.js'

export default {
  namespaced: true,
  state: {
    weatherInfo: null,
  },
  getters: {
    weatherInfo(state) {
      if (state.weatherInfo) {
        const w = state.weatherInfo
        return {
          temp: Math.round(w.main.temp),
          wind: w.wind.speed.toFixed(1),
          humidity: w.main.humidity,
          cloudy: w.clouds.all,
          weather: w.weather[0].main
        }
      } else {
        return state.weatherInfo
      }
    }
  },
  mutations: {
    setWeatherInfo(state, payload) {
      state.weatherInfo = payload
    }
  },
  actions: {
    async loadWeatherInfo({commit}) {
      const url = process.env.VUE_APP_WEATHER_API_URL
      const key = process.env.VUE_APP_WEATHER_API_KEY
      const { data } = await axios.get(`${url}?lat=${-4}&lon=${15}&units=metric&appid=${key}`)
      commit('setWeatherInfo', await data)
      console.log(data)
    }
  }
}