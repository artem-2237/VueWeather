import { createStore } from 'vuex'
import weatherModule from '@/store/weather.module'
import citiesModule from '@/store/cities.module'

const themeMap = {
  rain: ['thunderstorm', 'drizzle', 'rain'],
  snow: ['snow'],
  clear: ['clear'],
  mist: ['mist', 'smoke', 'fok', 'haze', 'dust', 'sand', 'ash', 'squall', 'tornado'],
  clouds: ['clouds']
}

export default createStore({
  state: {
    theme: 'clouds',
    weather: null
  },
  getters: {
    theme: state => {
      const themes = Object.keys(themeMap)
      let theme
      themes.forEach(el => {
        if (themeMap[el].includes(state.theme)) theme = 'theme-' + el
      })
      return `theme-${ state.theme }`
    }
  },
  mutations: {
    setTheme: (state, theme) => {
      state.theme = theme
    }
  },
  actions: {
  },
  modules: {
    weatherModule,
    citiesModule,
  }
})
