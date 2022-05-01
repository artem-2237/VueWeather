import axios from '@/axios/weather.js'
import store from '@/store'

export default {
  namespaced: true,
  state() {
    return {
      weatherInfo: null,
    }
  },
  getters: {
    currentWeather(state) {
      if (state.weatherInfo) {
        const w = state.weatherInfo.current
        const weather = {
          temp: Math.round(w.temp),
          wind: w['wind_speed'].toFixed(1),
          humidity: w.humidity,
          cloudy: w.clouds,
          weather: w.weather[0].main
        }
        if (w.rain) weather.rain = w.rain['1h']
        if (w.snow) weather.snow = w.snow['1h']
        return weather
      } else {
        return state.weatherInfo
      }
    },
    forecastWeather(state) {
      if (state.weatherInfo) {
        return state.weatherInfo.daily
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
      try {
        const coords = store.getters['citiesModule/curCity']
        const { data } = await axios.get('',{params: {
          lat: coords.lat,
            lon: coords.lon,
            exclude: 'hourly',
            units: 'metric',
            appid: process.env.VUE_APP_WEATHER_API_KEY
        }})
        commit('setWeatherInfo', data)
        commit('setTheme', data.current.weather[0].main.toLowerCase(), {root: true})
      } catch(e) {
        console.log(e)
      }
    }
  }
}