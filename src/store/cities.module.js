import axios from '@/axios/cities.js'

export default {
  namespaced: true,
  state() {
    return {
      cities: null,
      curCity: null,
      recommendCities: null
    }
  },
  getters: {
    cities(state) {
      console.log('updated')
      return state.cities?.map(el => {
        return {
          id: el.Key,
          name: el.AdministrativeArea.EnglishName.replace(' City', ''),
          country: el.Country.EnglishName,
          lat: el.GeoPosition.Latitude.toFixed(0),
          lon: el.GeoPosition.Longitude.toFixed(0),
        }
      }) || []
    },
    curCity: state => state.curCity,
    recommendCities: state => state.recommendCities
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload
    },
    setCurCity(state, payload) {
      state.curCity = payload
      localStorage.setItem('city', JSON.stringify(payload))
    },
    setRecCities(state, payload) {
      state.recommendCities = payload
      localStorage.setItem('recommendCities', JSON.stringify(payload))
    },
    addRecCity(state, payload) {
      state.recommendCities.unshift(payload)
      state.recommendCities.pop()
      localStorage.setItem('recommendCities', JSON.stringify(state.recommendCities))
    }
  },
  actions: {
    async loadCities({commit}) {
      try {
        const key = process.env.VUE_APP_CITIES_API_KEY
        const url = `?apikey=${key}&language=en-us`
        const { data } = await axios.get(url)
        commit('setCities', await data)
      } catch (e) {
        console.log(e)
      }
    },
    setCurCity({ state, commit }, payload) {
      commit('setCurCity', payload)
      let isRecommend = false
      state.recommendCities.forEach(el => {
        if (el.name === payload.name) isRecommend = true
      })
      if (!isRecommend) {
        commit('addRecCity', payload)
      }
    }
  }
}