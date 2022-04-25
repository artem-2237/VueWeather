import axios from 'axios'

const weatherAxios = axios.create({
  baseURL: process.env.VUE_APP_WEATHER_API_URL
})

export default weatherAxios
