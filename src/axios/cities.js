import axios from 'axios'

const citiesAxios = axios.create({
  baseURL: process.env.VUE_APP_CITIES_API_URL
})

export default citiesAxios
