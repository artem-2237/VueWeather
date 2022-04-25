import { createStore } from 'vuex'
import weatherModule from '@/store/weather.module'

export default createStore({
  state: {
    theme: 'cloud',
    weather: null
  },
  getters: {
    theme: state => `theme-${state.theme}`
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    weatherModule
  }
})
